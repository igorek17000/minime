import React from 'react'
import useLanguage from "../../../hooks/useLanguage"
import {v4 as randomKey} from 'uuid'

const translates = {
    text: [
        <p key={randomKey()} className="qst__head" data-aos="zoom-out-up">
            Если у вас возникли вопросы, наши модераторы будут рады помочь вам и ответить на них в нашем <a
            className="qst__head_link" rel="noreferrer" href="https://discord.com/"
            target="_blank">discord</a> канале
        </p>,
        <p key={randomKey()} className="qst__head" data-aos="zoom-out-up">
            Any further questions can be answered on our <a
            className="qst__head_link" rel="noreferrer" href="https://discord.com/"
            target="_blank">discord</a> by our
            amazing
            moderators. We&nbsp;will&nbsp;be&nbsp;more than happy to answer
            all&nbsp;of&nbsp;your&nbsp;questions.
        </p>
    ]
}

const Qst = () => {
    const {translatedTexts}: any = useLanguage(translates)


    return (
        <div className="qst">
            <div className="cont">
                {translatedTexts.text}
            </div>
        </div>
    );
};

export default Qst;