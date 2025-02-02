import { Language } from '@prisma/client';

export const LanguageToText = (language: Language): string => {
  return language.replaceAll('_', ' ').toCapitalCase();
};
