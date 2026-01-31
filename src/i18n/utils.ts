import { translations, type Locale, type TranslationKey } from './translations';

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] ?? translations.en[key] ?? key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, , locale] = url.pathname.split('/');
  if (locale === 'fr') return 'fr';
  return 'en';
}

export function getCvUrl(locale: Locale): string {
  const file = locale === 'fr' ? 'CV-Architect-FR.pdf' : 'CV-Architect.pdf';
  return `/me/files/${file}`;
}
