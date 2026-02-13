// Language Management System
export const languages = {
  VI: 'vi',
  EN: 'en'
};

let currentLanguage = localStorage.getItem('language') || 'vi';

export function getCurrentLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (Object.values(languages).includes(lang)) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    // Dispatch custom event to notify all components of language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }
}

export function t(key, translations) {
  const lang = getCurrentLanguage();
  return translations[key]?.[lang] || key;
}
