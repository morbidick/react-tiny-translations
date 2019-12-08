import React, { FunctionComponent } from "react";
import { TranslationProvider, Translate, useTranslations, de } from "./translations";

const main: FunctionComponent = () => {
    return (
        <TranslationProvider value={de}>
            <Translate key="helloName" name="Sagar" />
            <Welcome />
        </TranslationProvider>
    )
}

const Welcome: FunctionComponent = () => {
    const t = useTranslations()
    return <>{t.helloName({name: 'user'})}</>
}