import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "signup-subheader",

  initialize() {
    withPluginApi("0.8.14", (api) => {
      // Add subheader to the create account page
      api.decorateCookedElement(
        (elem) => {
          const createAccountHeader = elem.querySelector(".create-account-header");
          if (createAccountHeader) {
            const settings = api.container.lookup("service:site-settings");
            
            if (settings.signup_subheader_enabled) {
              const subheader = document.createElement("div");
              subheader.className = "signup-value-proposition";
              
              const title = settings.signup_subheader_title || "Join Our Community";
              const cta = settings.signup_subheader_cta || "Create your account to unlock these benefits!";
              
              // Build benefits HTML
              let benefitsHTML = "";
              for (let i = 1; i <= 4; i++) {
                const icon = settings[`benefit_${i}_icon`];
                const benefitTitle = settings[`benefit_${i}_title`];
                const benefitDesc = settings[`benefit_${i}_description`];
                
                if (icon && benefitTitle && benefitDesc) {
                  benefitsHTML += `
                    <div class="benefit-item">
                      <div class="benefit-icon">${icon}</div>
                      <div class="benefit-text">
                        <strong>${benefitTitle}</strong>
                        <span>${benefitDesc}</span>
                      </div>
                    </div>
                  `;
                }
              }
              
              subheader.innerHTML = `
                <div class="value-proposition-content">
                  <h3 class="value-proposition-title">${title}</h3>
                  <div class="value-proposition-benefits">
                    ${benefitsHTML}
                  </div>
                  <div class="value-proposition-cta">
                    <p>${cta}</p>
                  </div>
                </div>
              `;
              
              // Insert after the header title
              const headerTitle = createAccountHeader.querySelector("h1");
              if (headerTitle) {
                headerTitle.insertAdjacentElement("afterend", subheader);
              }
            }
          }
        },
        { id: "create-account" }
      );
    });
  },
}; 