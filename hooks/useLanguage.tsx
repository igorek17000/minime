import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import {RootState} from "../redux/reducers"
//: { [key: string]: any[] }
// @ts-ignore
const useLanguage = (translates): any => {
    console.log('translates', translates)
    const [indexLanguage, setIndexLanguage] = useState(0)
    const [translatedTexts, setTranslatedTexts] = useState({})
    const {language}: any = useSelector((state: RootState) => {
        return state?.language
    }) || 'ru'

    useEffect(() => {
        setIndexLanguage(language === 'ru' ? 0 : 1)
    }, [language])


    useEffect(() => {
        if (translates) {
            setTranslatedTexts({})
            console.log(translates)
            Object
                .keys(translates)
                .forEach(key => {
                    setTranslatedTexts((prev: any) => {
                        return {
                            ...prev,
                            [key]: translates[key][indexLanguage]
                        }
                    })
                })
        }
    }, [indexLanguage])


    return {indexLanguage, language, translatedTexts}
}

export default useLanguage