import React, { FunctionComponent } from "react";
import { TranslationProvider, Translate, useTranslations } from "./translations";

const main: FunctionComponent = () => {
    return (
        <TranslationProvider value="de">
            <Translate key="helloName" name="blubb"/>
            <Welcome />
        </TranslationProvider>
    )
}

const Welcome: FunctionComponent = () => {
    const t = useTranslations()
    return <>{t.helloName({name: 'user'})}</>
}