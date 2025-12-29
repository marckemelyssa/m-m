import { en } from "./languages/en";
import { pt } from "./languages/pt";

export const translations = {
  en,
  pt,
} as const;

export type TranslationSchema = typeof translations.en;
export type Language = keyof typeof translations;