import { Translation } from "./library";

export const translations = {
    en: {
        hello: `hi`,
        helloName: ({name}: {name: string}) => `hi ${name}`,
        helloUrgent: ({name}: {name: string}) => <>hello<b>{name}</b></>
    },
    de: {
        hello: `hallo`,
        helloName: ({name}: {name: string}) => `hallo ${name}`,
    }
}

export const { TranslationProvider, useTranslations, Translate } = new Translation(translations.en)
