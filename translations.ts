import { Translation } from "./library";

const translations = {
    en: {
        hello: `hi`,
        helloName: ({name: string}) => `hi ${name}`,
    },
    de: {
        hello: `hallo`,
        helloName: ({name: string}) => `hallo ${name}`,
    }
}

export const { TranslationProvider, useTranslations, Translate } = new Translation(translations)
