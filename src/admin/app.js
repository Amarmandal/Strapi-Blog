import favicon from "./extensions/favicon.ico";
import AuthLogo from "./extensions/my-logo.png";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "MW Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "...",
        "Auth.form.welcome.title": "Welcome to Modernwrites!",
        "Auth.form.welcome.subtitle": "Log in to your MW account",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
