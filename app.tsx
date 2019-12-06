import React, { FunctionComponent } from "react";
import { TranslationProvider, Translate, useTranslations, translations } from "./translations";

const main: FunctionComponent = () => {
    return (
        <TranslationProvider value={translations.de}>
            <Translate key="hello" name="test"/>
            <Welcome />
        </TranslationProvider>
    )
}

const Welcome: FunctionComponent = () => {
    const t = useTranslations()
    return <>{t.helloName({name: 'user'})}</>
}