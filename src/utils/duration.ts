import type { Language } from '../contexts/LanguageContext';

export function translateDuration(duration: string, language: Language, t: (key: string) => string): string {
  // Check if duration contains "hours" or "weeks"
  if (duration.toLowerCase().includes('hours')) {
    return duration.replace(/hours?/gi, t('common.hours'));
  }
  if (duration.toLowerCase().includes('weeks')) {
    return duration.replace(/weeks?/gi, t('common.weeks'));
  }
  if (duration.toLowerCase().includes('hodiny')) {
    return duration.replace(/hodiny/gi, t('common.hours'));
  }
  if (duration.toLowerCase().includes('týždňov')) {
    return duration.replace(/týždňov/gi, t('common.weeks'));
  }
  
  // If no match, return as is
  return duration;
}

