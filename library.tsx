import React, { useContext, FunctionComponent } from 'react'

type transFunc = (props: any) => string
function transFuncCheck(t: string | transFunc): t is transFunc {
    return typeof t === "function"
} 

type ArgType<T> = T extends (args: infer A) => string ? A : never

interface Args {
    blubb:string, zwo: number 
}

const test = ({blubb, zwo}: Args) => "hi"

type b = ArgType<typeof test>

interface Translations {[key: string]: string | transFunc}

export class Translation<T extends Translations, K extends keyof T> {
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
    // Translate should be generic with something like U in keysof T and using the Arguments of T[U] for extra args
    public Translate = ({key, ...args}: {key: K} & ArgType<T[K]>) => {
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