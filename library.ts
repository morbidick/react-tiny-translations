import React, { useContext, FunctionComponent } from 'react'

export class Translation<T extends {}> {
    private translationContext: React.Context<string>
    constructor(private translations: { en: T, [key: string]: T }, defaultLang = 'en') {
        this.translationContext = React.createContext(defaultLang)
    }
    get TranslationProvider() {
        return this.translationContext.Provider
    }
    public useTranslations = (): T => {
        return this.translations[useContext(this.translationContext)]
    }
    // Translate should be generic with something like U in keysof T and using the Arguments of T[U] for extra args
    public Translate: FunctionComponent<{key: string, [key: string]: string | number}> = ({key, ...args}) => {
        const t = this.useTranslations()[key]
        switch (typeof t) {
            case "function":
                return t(args)
            case "string":
                return t
            default:
                return key
        } 
    }
}