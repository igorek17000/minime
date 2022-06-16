import React from 'react'
import CharItem from "./CharItem"
import {v4 as randomKey} from 'uuid'
import {charsEng, charsRus} from './contstans'
import {Swiper, SwiperSlide} from 'swiper/react'
import useLanguage from "../../../hooks/useLanguage"

export type TypeChar = {
    image: string,
    imageHover: string,
    name: string | React.ReactFragment,
    description: string | React.ReactFragment
}

const translates = {
    title: ['10 Персонажей', '10 Characters'],
}


const Char = () => {
    const {language, translatedTexts}: any = useLanguage(translates)

    return (
        <div className="char">
            <div className="cont">
                <p className="char__head">{translatedTexts.title}</p>
                <Swiper
                    slidesPerView='auto'
                    className="char__box unselectable"
                >
                    <div
                        className="char__roll swiper-wrapper"
                    >
                        {
                            (language === 'ru' ? charsRus : charsEng).map(({image, imageHover, name, description}) => (
                                <SwiperSlide className="char__sl" key={randomKey()}>
                                    <CharItem
                                        key={randomKey()}
                                        image={image}
                                        imageHover={imageHover}
                                        name={name}
                                        description={description}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Char