import React, { useContext, FunctionComponent } from 'react'

type transFunc = (props: any) => string
function transFuncCheck(t: string | transFunc): t is transFunc {
    return typeof t === "function"
} 

type ArgType<T> = T extends (args: infer A) => string ? A : {}

interface Translations {[key: string]: string | transFunc}

export class Translation<T extends Translations> {
    private translationContext: React.Context<T>
    constructor(translations: T) {
        this.translationContext = React.createContext(translations)
    }
    get TranslationProvider() {
        return this.translationContext.Provider
    }
    public useTranslations = (): T => {
        return useContext(this.translationContext)
    }
    public Translate = <K extends keyof T>({key, ...args}: {key: K} & ArgType<T[K]>) => {
        const t = this.useTranslations()[key]
        if (typeof t === "string") {
            return <>{t}</>
        } else if (transFuncCheck(t)) {
            return <>{t(args)}</>
        } else {
            return <>{key}</>
        }
    }
}