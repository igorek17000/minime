import React, {useState} from 'react';
import {v4 as randomKey} from "uuid";
import classNames from "classnames";

interface FaqItemProps {
    answer: React.ReactNode | string,
    question: React.ReactNode | string,
    handlerSetActivePanels: () => void,
    isOpened: boolean
}

const FaqItem: React.FC<FaqItemProps> = ({answer, question, handlerSetActivePanels, isOpened}) => {

    return (
        <div key={randomKey()} className="faq__itm">
            <div className="faq__itm_top" onClick={handlerSetActivePanels}>
                <p className="faq__itm_top_name">{answer}</p>
                <img className="faq__itm_top_icon" src="/images/faq_top_icon.svg"/>
            </div>

            <div className={classNames('faq__itm_info', {
                'opened': isOpened
            })}>
                <p className="faq__itm_info_txt">
                    {question}
                </p>
            </div>
        </div>
    );
};

export default FaqItem;