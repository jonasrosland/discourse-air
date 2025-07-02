import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "signup-subheader-outlet",

  initialize() {
    withPluginApi("0.8.14", (api) => {
      // Use the create-account-header-bottom outlet
      api.decoratePluginOutlet("create-account-header-bottom", (elem, args) => {
        const settings = api.container.lookup("service:site-settings");
        const isEnabled = settings.signup_subheader_enabled !== false;
        
        if (!isEnabled) return "";
        
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
        
        return `
          <div class="signup-value-proposition">
            <div class="value-proposition-content">
              <h3 class="value-proposition-title">${title}</h3>
              <div class="value-proposition-benefits">
                ${benefitsHTML}
              </div>
              <div class="value-proposition-cta">
                <p>${cta}</p>
              </div>
            </div>
          </div>
        `;
      });
      
      // Also try the above-create-account outlet
      api.decoratePluginOutlet("above-create-account", (elem, args) => {
        const settings = api.container.lookup("service:site-settings");
        const isEnabled = settings.signup_subheader_enabled !== false;
        
        if (!isEnabled) return "";
        
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
        
        return `
          <div class="signup-value-proposition">
            <div class="value-proposition-content">
              <h3 class="value-proposition-title">${title}</h3>
              <div class="value-proposition-benefits">
                ${benefitsHTML}
              </div>
              <div class="value-proposition-cta">
                <p>${cta}</p>
              </div>
            </div>
          </div>
        `;
      });
    });
  },
}; 