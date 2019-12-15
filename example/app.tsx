import React, { FunctionComponent } from "react";
import { TranslationProvider, Translate, useTranslations, de } from "./translations";

const Hooks: FunctionComponent = () => {
    return (
        <TranslationProvider value={de}>
            <Translate key="helloName" name="Sagar" />
            <ClassComponent />
        </TranslationProvider>
    )
}

const ClassComponent: FunctionComponent = () => {
    const t = useTranslations()
    return <>{t.helloName({name: 'user'})}</>
}