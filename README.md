<!-- Describe this theme/component in one or two sentences -->

A clean & modern theme with a handful of theme-components included to enhance your forum!

<!-- Add screenshots (if applicable) -->

**Light Mode**

![image](https://user-images.githubusercontent.com/5862206/214545439-85410d82-9565-4e00-8b23-b2d69a0ee1eb.png)

**Dark Mode**

![image](https://user-images.githubusercontent.com/5862206/214545506-f44d6165-4f79-416e-a89c-548482d04cea.png)

**Categories Page**

![image](https://user-images.githubusercontent.com/5862206/214545568-76d38925-55a6-4359-b1c6-bf1010706132.png)

This theme includes a handful of components to enhance your forum as well.

- Dark Light Scheme Toggle
- Clickable Topics
- Discourse Loading Slider
- Discourse Search Banner
- Modern Category + Group Boxes
- Customizable Signup Value Proposition

> :exclamation: Please read through these tips upon installation, as there are a couple of settings that **NEED TO BE ENABLED** for this to theme to render properly.

---

# Tips

### Dark Light Scheme Toggle

![image](https://user-images.githubusercontent.com/5862206/214545622-af847fa5-b4ae-4308-9fe2-ddd66eb62cc8.png)

For this to work properly, at least 2 color scheme choices need to be enabled in your `https://discourse.jordanvidrine.com/admin/customize/colors` area. At least two colors need to have `color scheme can be selected by users` enabled.

![image](https://user-images.githubusercontent.com/5862206/214545647-e0544474-b6bf-4b9c-8c64-6a8bfa6ba83a.png)

Once this is done, users should be able to choose between two color schemes as their `light` and `dark` preferences in their user preferences interface menu.

![image](https://user-images.githubusercontent.com/5862206/214545707-170a6b88-8ccd-4d31-af59-f0834a4fad3c.png)

---

## Discourse Search Banner

In the options for the `discourse-search-banner` theme component, the `plugin-outlet` options needs to be set to **BELOW-SITE-HEADER** for this theme to render properly.

![image](https://user-images.githubusercontent.com/5862206/214545774-ed8f1322-9a95-4958-bba0-adf7ff6dea3f.png)

---

## Modern Category + Group Boxes

This theme component requires your categories to use the **CATEGORY BOXES WITH SUBCATEGORIES** setting in your `/admin/site_settings/category/all_results?filter=categories` area.

![image](https://user-images.githubusercontent.com/5862206/214545903-c4bd61b9-1893-48e0-84e7-502efc26c46d.png)

This theme component also allows the forum admin to organize their category page with header titles, and choose which categories appear under each header. To keep things simple, I have only allowed up to 5 headings to be used. **If no categories + heading settings are chosen, all categories will render as they do above, this is the default rendering option.**

---

## Customizable Signup Value Proposition

This theme includes a comprehensive value proposition section that appears on the signup page below the main title. Forum administrators can configure the title, benefits, and call-to-action through the theme settings.

The value proposition includes:
- **Main Title**: Customizable headline for the section
- **Four Benefit Items**: Each with an icon, title, and description
- **Call-to-Action**: Encouraging text at the bottom

To customize the signup value proposition:

1. Go to your forum's admin panel
2. Navigate to **Customize** → **Themes**
3. Find the "Air Theme" and click **Edit**
4. In the settings, you'll find various options:
   - **Enable/Disable**: Toggle the feature on/off
   - **Main Title**: Set the headline text
   - **Call-to-Action**: Set the bottom message
   - **Benefits**: Configure up to 4 benefit items with icons, titles, and descriptions
5. Save the changes

The value proposition will appear below the "Create Account" title on the signup page, showcasing the benefits of joining your community with an attractive, professional design.

---

Feel free to post any issues here :grinning_face_with_smiling_eyes:

I hope you enjoy!

|                     |                              |                                                                                                                             |
| ------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| :eyeglasses:        | **Preview**                  | https://discourse.jordanvidrine.com/                                                                                        |
| :hammer_and_wrench: | **Repository**               | https://github.com/discourse/discourse-air.git                                                                              |
| :question:          | **Install Guide**            | [How to install a theme or theme component](https://meta.discourse.org/t/how-do-i-install-a-theme-or-theme-component/63682) |
| :open_book:         | **New to Discourse Themes?** | [Beginner’s guide to using Discourse Themes](https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966)  |
