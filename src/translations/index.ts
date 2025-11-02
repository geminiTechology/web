import type { Language } from '../contexts/LanguageContext';
import { translations as enTranslations } from './en';
import { translations as skTranslations } from './sk';

export const translations = {
  en: enTranslations,
  sk: skTranslations,
};

export type TranslationKey = keyof typeof enTranslations;

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return typeof value === 'string' ? value : key;
}

