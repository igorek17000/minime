import React, {useState} from 'react'
import {v4 as randomKey} from 'uuid'
import classNames from "classnames";
import FaqItem from './FaqItem';
import useLanguage from "../../../hooks/useLanguage";

const faqEng = [
    {
        question: <span>There will be a total of 7777 minime&rsquo;s including 12 1/1</span>,
        answer: <span>What is the total supply of minime&rsquo;s?</span>
    },
    {
        question: 'We are yet to determine an exact date for launch but are aiming to launch in Q2, 2022',
        answer: 'When will the mint take place'
    },
    {
        question: 'We will announce the mint price closer to the release date',
        answer: 'What will be the mint price?'
    },
    {
        question: 'We will have a total of 2000 whitelist spots with each whitelisted member being able to mint 2. We will announce details on how to get whitelisted on our discord.',
        answer: 'Will there be a whitelist?'
    },
    {
        question: 'Yes there will be a public sale',
        answer: 'Will there be a public sale?'
    },
    {
        question: 'Most certainly there will be a very exciting roadmap built by our whole team which we cant wait to reveal to you.',
        answer: 'Will there be a roadmap?'
    }
]

const faqRus = [
    {
        question: 'Всего будет 7777 Mini Me, вкючая 6 1/1',
        answer: 'Сколько Всего NFT будут запушены'
    },
    {
        question: 'Мы еще не определили точную дату запуска, но стремимся к концу июня 2022',
        answer: 'Когда запускается проект?'
    },
    {
        question: 'Цена минта: 0.1 ETH',
        answer: 'Какова будет цена минта?'
    },
    {
        question: 'У нас будет в общей сложности 2000 мест в white List. Каждый участник white list сможет минтить двух. Мы объявим подробности о том, как получить доступ в white list',
        answer: 'Будет ли White list?'
    },
    {
        question: 'Да, будет открытая продажа',
        answer: 'Будет ли открытая продажа?'
    },
    {
        question: 'Будет интересный роудмеп, созданный нашей большой командой',
        answer: 'Будет ли роудмеп?'
    }
]


const translates = {
    title: ['Вопросы', 'FAQ']
}

const Faq = () => {
    const [activePanels, setActivePanels] = useState<number[]>([])
    const {language, translatedTexts} = useLanguage(translates)

    const handlerSetActivePanels = (index: number) => {
        if (activePanels.includes(index)) {
            setActivePanels(prev => prev.filter(number => number !== index))
        } else {
            setActivePanels(prev => [...prev, index])
        }
    }

    return (
        <div className="faq">
            <div className="cont">
                <p className="faq__head">{translatedTexts.title}</p>

                <div className="faq__box">
                    {
                        (language === 'ru' ? faqRus : faqEng).map(({question, answer}, index) => (
                            <FaqItem isOpened={activePanels.includes(index)} handlerSetActivePanels={() => handlerSetActivePanels(index)} key={randomKey()} answer={answer} question={question}/>
                            // <div key={randomKey()} className="faq__itm">
                            //     <div className="faq__itm_top" onClick={() => handlerSetActivePanels(index)}>
                            //         <p className="faq__itm_top_name">{answer}</p>
                            //         <img className="faq__itm_top_icon" src="/images/faq_top_icon.svg"/>
                            //     </div>
                            // {/*    style={{*/}
                            // {/*    height: activePanels.includes(index) ? 'auto' : 0*/}
                            // {/*}}*/}
                            //
                            //     <div className={classNames('faq__itm_info', {
                            //         'opened': activePanels.includes(index)
                            //     })}>
                            //         <p className="faq__itm_info_txt">
                            //             {question}
                            //         </p>
                            //     </div>
                            // </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;