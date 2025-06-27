import { defineRouting } from 'next-intl/routing';

/**
 * Objet de configuration de routage multilingue pour `next-intl`.
 * Il spécifie la liste des locales supportées ainsi que la locale par défaut.
 */
export const routing = defineRouting({
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
});
