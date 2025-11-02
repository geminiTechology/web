import type { Language } from "../contexts/LanguageContext";

export function translateDuration(
  duration: string,
  language: Language,
  t: (key: string) => string
): string {
  const text = duration.toLowerCase();

  if (language === 'sk') {
    if (text.includes('hodiny')) return duration.replace(/hodiny/gi, t('common.hours'));
    if (text.includes('týždňov')) return duration.replace(/týždňov/gi, t('common.weeks'));
  } else {
    if (text.includes('hours')) return duration.replace(/hours?/gi, t('common.hours'));
    if (text.includes('weeks')) return duration.replace(/weeks?/gi, t('common.weeks'));
  }

  return duration;
}
