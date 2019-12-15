import React from 'react'
import { Translation } from "../lib";

// define one language as your default, all further typings will be extracted from it
export const en = {
    hello: `hi`,
    helloName: ({name}: {name: string}) => `hi ${name}`,
    helloBold: ({name}: {name: string}) => <>hello <b>{name}</b></>
}

// ensure other languages have all keys by setting their type to the default language
export const de: typeof en = {
    hello: `hallo`,
    helloName: ({name}) => `hallo ${name}`,
    helloBold: ({name}) => <>hallo <b>{name}</b></>
}

// setup your Translations Element with the default language
export const { TranslationProvider, useTranslations, Translate } = new Translation(en)
