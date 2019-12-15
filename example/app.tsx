import React, { FunctionComponent } from "react";

// import translations from one central place in your app (needed to share types)
import { TranslationProvider, Translate, useTranslations, de } from "./translations";

// Translations can be used as a component
const TranslateComponent: FunctionComponent = () => {
    return (
        <TranslationProvider value={de}>
            <Translate key="helloName" name="Sagar" />
        </TranslationProvider>
    )
}

// or with hooks
const TranslateHook: FunctionComponent = () => {
    const t = useTranslations()
    return <>{t.helloName({name: 'user'})}</>
}
