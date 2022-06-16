import React from 'react'
import useLanguage from "../../../hooks/useLanguage"
import {v4 as randomKey} from 'uuid'

const translates = {
    "label": ['Запуск', 'Drop Time'],
    "coming-soon": ['СКОРО', 'COMING SOON'],
    "description": [
        <p key={randomKey()} className="drop__info_txt" data-aos="fade-right">7,777 уникальных<br/> <span className="drop__info_txt_sp">персонажей</span>, созданных<br/> на ethereum blockchain</p>,
        <p key={randomKey()} className="drop__info_txt" data-aos="fade-right">7,777 unique<br/> <span className="drop__info_txt_sp">characters</span>, living<br/> on the ethereum<br/> blockchain</p>
    ]
}


const Drop = () => {
    console.log(translates)
    const {translatedTexts}: any = useLanguage(translates)


    return (
        <div className="drop">
            <p className="drop__label">{translatedTexts.label}</p>
            {/*// <!-- изменить state на disable + вставить рыбу в span + активировать скрипты -->*/}

            {/*state="enable"*/}
            <p className="drop__time"><span className="drop__time_day">{translatedTexts["coming-soon"]}</span></p>
            <div className="drop__person_wrap">
                <div className="drop__person_itm">
                    <img className="drop__person" data-aos="fade-up" src="/images/drop_person_hover.png"/>
                </div>
                {/*// <!-- <div class="drop__person_itm" hover>*/}
                {/*//     <img class="drop__person" src="/drop_person_hover.png" />*/}
                {/*// </div> -->*/}
            </div>
            <div className="drop__info">
                <div className="cont">
                    {/*<p className="drop__info_txt" data-aos="fade-right">*/}
                        {/*7,777 unique<br/>*/}
                        {/*<span className="drop__info_txt_sp">characters</span>, living<br/>*/}
                        {/*on the ethereum<br/>*/}
                        {/*blockchain*/}
                        {translatedTexts.description}
                    {/*</p>*/}
                </div>
            </div>
        </div>
    )
}

export default Drop