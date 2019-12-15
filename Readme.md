# React tiny translations

Tiny library to setup typesafe (typescript based) translations. This library intentionally leaves out the i18n part, this can be very easily integrated by using the [browser intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

## Installation

```
npm i react-tiny-translations
```

## Usage

```typescript
// setup
import React from 'react'
import { Translation } from 'react-tiny-translations';

const en = {
    simpleString: `hi`,
    function: ({name}: {name: string}) => `hi ${name}`,
}

const { TranslationProvider, useTranslations } = new Translation(en)

// hooks usage
const Welcome: React.FC = () => {
    const t = useTranslations()
    return <>{t.function({name: 'user'})}</>
}
```

For the full usage see the [example folder](./example)
