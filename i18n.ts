// import i18next from 'https://deno.land/x/i18next/index.js'
// import Backend from "https://deno.land/x/i18next_fs_backend/index.js";
// import enTranslation from "./locales/en/translation.json" assert {
//   type: "json",
// };
// import loTranslation from "./locales/lo/translation.json" assert {
//   type: "json",
// };

// const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

// i18next
//   .use(Backend)
//   .init({
//     // debug: true,
//     fallbackLng: "en",
//     resources: {
//       en: {
//         translation: enTranslation,
//       },
//       lo: {
//         translation: loTranslation,
//       },
//     }
//   });

// export default (lng: string | undefined | null) =>
//   i18next.getFixedT(lng || systemLocale);

import i18next from "https://deno.land/x/i18next/index.js";
import Backend from "https://deno.land/x/i18next_fs_backend/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware/index.js";

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    // debug: true,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    preload: ["lo", "en"],
  });

export const i18n = i18next;
export const middleware = i18nextMiddleware;
