import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "signup-subheader",

  initialize() {
    withPluginApi("0.8.14", (api) => {
      // Method 1: Try to modify the create-account component
      api.modifyClass("component:create-account", {
        pluginId: "discourse-air",
        
        didInsertElement() {
          this._super(...arguments);
          this._addValueProposition();
        },
        
        _addValueProposition() {
          const settings = api.container.lookup("service:site-settings");
          console.log("Signup subheader settings:", settings);
          
          // Default to true if setting is not found
          const isEnabled = settings.signup_subheader_enabled !== false;
          
          if (isEnabled) {
            const title = settings.signup_subheader_title || "Join Our Community";
            const cta = settings.signup_subheader_cta || "Create your account to unlock these benefits!";
            
            // Build benefits HTML
            let benefitsHTML = "";
            for (let i = 1; i <= 4; i++) {
              const icon = settings[`benefit_${i}_icon`] || ["🎓", "🔬", "👥", "📚"][i-1];
              const benefitTitle = settings[`benefit_${i}_title`] || `Benefit ${i}`;
              const benefitDesc = settings[`benefit_${i}_description`] || `Description for benefit ${i}`;
              
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
            
            const subheader = document.createElement("div");
            subheader.className = "signup-value-proposition";
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
            
            // Try to insert after the title
            const titleElement = this.element.querySelector("h1") || this.element.querySelector(".create-account-title");
            if (titleElement) {
              titleElement.insertAdjacentElement("afterend", subheader);
              console.log("Signup subheader added successfully via component");
            } else {
              // Fallback: insert at the beginning
              this.element.insertAdjacentElement("afterbegin", subheader);
              console.log("Signup subheader added via fallback");
            }
          }
        }
      });
      
      // Method 2: Also try on page change for the signup route
      api.onPageChange((url) => {
        if (url.includes("/signup") || url.includes("/create-account")) {
          setTimeout(() => {
            const settings = api.container.lookup("service:site-settings");
            const isEnabled = settings.signup_subheader_enabled !== false;
            
            if (isEnabled && !document.querySelector(".signup-value-proposition")) {
              const title = settings.signup_subheader_title || "Join Our Community";
              const cta = settings.signup_subheader_cta || "Create your account to unlock these benefits!";
              
              let benefitsHTML = "";
              for (let i = 1; i <= 4; i++) {
                const icon = settings[`benefit_${i}_icon`] || ["🎓", "🔬", "👥", "📚"][i-1];
                const benefitTitle = settings[`benefit_${i}_title`] || `Benefit ${i}`;
                const benefitDesc = settings[`benefit_${i}_description`] || `Description for benefit ${i}`;
                
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
              
              const subheader = document.createElement("div");
              subheader.className = "signup-value-proposition";
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
              
              const titleElement = document.querySelector("h1") || document.querySelector(".create-account-title");
              if (titleElement) {
                titleElement.insertAdjacentElement("afterend", subheader);
                console.log("Signup subheader added via page change");
              }
            }
          }, 100);
        }
      });
    });
  },
}; 