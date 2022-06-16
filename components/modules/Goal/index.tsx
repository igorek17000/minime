import React from 'react';
import useLanguage from "../../../hooks/useLanguage";
import {v4 as randomKey} from 'uuid'

const translates = {
    text: [
        <span key={randomKey()}>
            Глобально, нашей целью является <span className="goal__head_sp">развитие личных отношений со своим персонажем.</span> Каждая деталь была тщательно продумана и имеет свою историю.
        </span>,
        <span key={randomKey()}>
            Ultimately, our goal is for you to&nbsp;<span className="goal__head_sp">develop&nbsp;a personal relationship with&nbsp;your character.</span> Every single trait&nbsp;has&nbsp;been carefully thought through, and each character has&nbsp;its&nbsp;own story.
        </span>
    ]
}

const Goal = () => {
    const {translatedTexts}: any = useLanguage(translates)

    return (
        <div className="goal">
            <div className="cont">
                <p className="goal__head" data-aos="zoom-out-up">
                    {translatedTexts.text}
                </p>
            </div>
        </div>
    )
}

export default Goal;