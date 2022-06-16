import React from 'react'
import useLanguage from "../../../hooks/useLanguage";
import {v4 as randomKey} from 'uuid'

const translates = {
    text: [
        <p key={randomKey()} className="pro__head" data-aos="zoom-out-up">Инклюзивность - это, пожалуй, самая большая часть нашего проекта, ни одна культура или сообщество не остаются в стороне. Каждый сможет <span className="pro__head_sp">найти персонажа,</span> который действительно найдет отклик в вас.</p>,
        <p key={randomKey()} className="pro__head" data-aos="zoom-out-up">Inclusivity is perhaps the biggest&nbsp;part&nbsp;of&nbsp;our project, no culture or community is left behind and each and every one of you will be able to&nbsp;<span className="pro__head_sp">find&nbsp;a&nbsp;mini</span> that truly resonates with&nbsp;you.</p>,
    ]
}

const Pro = () => {
    const {translatedTexts}: any = useLanguage(translates)


    return (
        <div className="pro">
            <div className="cont">
                <p className="pro__head" data-aos="zoom-out-up">
                    {translatedTexts.text}
                </p>
            </div>
        </div>
    );
};

export default Pro;