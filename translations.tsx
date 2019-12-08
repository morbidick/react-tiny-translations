import { Translation } from "./library";

export const en = {
    hello: `hi`,
    helloName: ({name}: {name: string}) => `hi ${name}`,
    helloBold: ({name}: {name: string}) => <>hello <b>{name}</b></>
}

export const de: typeof en = {
    hello: `hallo`,
    helloName: ({name}: {name: string}) => `hallo ${name}`,
    helloBold: ({name}: {name: string}) => <>hallo <b>{name}</b></>
}

export const { TranslationProvider, useTranslations, Translate } = new Translation(en)
