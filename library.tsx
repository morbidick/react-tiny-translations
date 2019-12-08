import React, { useContext, FunctionComponent } from 'react'

type transFunc = (props: any) => string | number | JSX.Element
function transFuncCheck(t: string | number | transFunc): t is transFunc {
    return typeof t === "function"
} 

type PropsType<T> = T extends (args: infer P) => string ? P : {}

interface Translations {[key: string]: string | number | transFunc}

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
    public Translate = <K extends keyof T>({key, ...args}: {key: K} & PropsType<T[K]>): JSX.Element => {
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