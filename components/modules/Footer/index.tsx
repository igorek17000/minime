import React from 'react'
import useLanguage from '../../../hooks/useLanguage';
import {useDispatch} from "react-redux";
import {changeLanguage} from "../../../redux/actions/language";

const translates = {
    about: ['О нас', 'About Us'],
    team: ['Команда', 'Team'],
    minime: ['Mini Me', 'Mini Me'],
    discord: ['Discord', 'Discord'],
    faq: ['Вопросы', 'FAQ'],
    lang: ['RU', 'EN'],
    politics: ['2022 Все права защищены ', '2022 All rights reserved '],
    conditions: ['Условия', 'Terms and Conditions'],
}

const Footer = () => {
    const dispatch = useDispatch()
    const {translatedTexts}: any = useLanguage(translates)

    const onChangeLanguage = () => {
        dispatch(changeLanguage())
    }

    return (
        <div className="footer">
            <div className="cont">
                <div className="footer__box">
                    {/*pointa="top"*/}
                    <svg className="menu__logo" viewBox="0 0 118.76 25.45"
                         xmlns="http://www.w3.org/2000/svg" fill='#fff'>

                        <path className="menu__logo_svg"
                              d="M0,7.29H3.83V9.71h.35A5.71,5.71,0,0,1,9.26,6.63,6.15,6.15,0,0,1,14.78,10h.35a6.42,6.42,0,0,1,5.73-3.28c4.38,0,6.91,3.48,6.91,7.56v10.6H23.86V14.57c0-2.38-1.45-4.45-4-4.52s-4.11,2.11-4.11,4.52V24.83H11.85V14.57c0-2.41-1.25-4.52-3.87-4.52s-4,2-4,4.52V24.83H0Z">
                        </path>
                        <path className="menu__logo_svg" d="M30.53,7.29h3.9V24.83h-3.9Z"></path>
                        <path className="menu__logo_svg"
                              d="M37,7.29h3.9V9.64h.35A6.1,6.1,0,0,1,46.5,6.7c4.46,0,7,3.32,7,7.5V24.83H49.61V14.51c0-2.53-1.42-4.39-4-4.39a4.6,4.6,0,0,0-4.7,4.63V24.83H37Z">
                        </path>
                        <path className="menu__logo_svg" d="M56,7.29h3.9V24.83H56Z"></path>
                        <path className="menu__logo_svg"
                              d="M70.59,7.29h3.84V9.71h.34a5.72,5.72,0,0,1,5.08-3.08A6.17,6.17,0,0,1,85.38,10h.34a6.44,6.44,0,0,1,5.73-3.28c4.39,0,6.91,3.48,6.91,7.56v10.6h-3.9V14.57c0-2.38-1.45-4.45-4-4.52s-4.11,2.11-4.11,4.52V24.83H82.44V14.57c0-2.41-1.24-4.52-3.87-4.52s-4,2-4,4.52V24.83H70.59Z">
                        </path>
                        <path className="menu__logo_svg"
                              d="M100,15.85c0-5.56,4.07-9.22,9.43-9.22a8.87,8.87,0,0,1,9.32,9.26c0,.65,0,1.1,0,1.38H104.05a5.52,5.52,0,0,0,5.66,5,5.72,5.72,0,0,0,5.15-2.9l3.28,1.24c-1.49,3.42-5,4.83-8.57,4.83A9.26,9.26,0,0,1,100,15.85Zm14.71-1.48a5.4,5.4,0,0,0-10.67,0Z">
                        </path>
                        <circle className="menu__logo_svg" cx="32.48" cy="2.32" r="2.32"></circle>
                        <circle className="menu__logo_svg" cx="57.94" cy="2.32" r="2.32"></circle>
                    </svg>
                    <div className="menu__right">
                        <div className="menu__itm">
                            {/*pointa="about"*/}
                            <p className="menu__itm_nav">{translatedTexts.about}</p>
                            {/*pointa="team"*/}
                            <p className="menu__itm_nav">{translatedTexts.team}</p>
                            {/*pointa="minime"*/}
                            <p className="menu__itm_nav">{translatedTexts.minime}</p>

                            {/*<p className="menu__itm_nav">Roadmap (soon)</p>*/}
                            {/*pointa="faq"*/}
                            <a rel='noreferrer' className="menu__itm_nav" href="https://discord.gg/minime"
                               target="_blank"
                               data-lang="Discord">{translatedTexts.discord}</a>
                            <p className="menu__itm_nav">{translatedTexts.faq}</p>
                            <p onClick={onChangeLanguage}
                               className="menu__itm_nav menu__itm_nav_lng">{translatedTexts.lang}</p>
                        </div>

                        <div className="menu__soc"><a rel="noreferrer" className="menu__soc_link w-inline-block"
                                                      href="https://www.instagram.com/minime.eth/"
                                                      target="_blank">
                            <svg className="menu__soc_inst"
                                 display="block" viewBox="0 0 22.36 22.36" fill='#fff'
                                 xmlns="http://www.w3.org/2000/svg">

                                <path className="menu__soc_inst_svg"
                                      d="M5.15,0H17.21a12.59,12.59,0,0,1,1.25.27,5.59,5.59,0,0,1,3.9,5.36c0,3.7,0,7.41,0,11.11a5.34,5.34,0,0,1-1,3.25,5.52,5.52,0,0,1-4.69,2.37H5.82a6.08,6.08,0,0,1-1.13-.09A5.41,5.41,0,0,1,.4,18.78,11.64,11.64,0,0,1,0,17.21V5.15c0-.15.05-.31.08-.46A5.49,5.49,0,0,1,3.56.4,11.93,11.93,0,0,1,5.15,0Zm6,15.84a4.66,4.66,0,1,0-4.66-4.67A4.68,4.68,0,0,0,11.18,15.84Zm6.06-9.32a1.4,1.4,0,1,0-1.4-1.4A1.4,1.4,0,0,0,17.24,6.52Z">
                                </path>
                            </svg>
                        </a>
                            {/*// <!-- <a target="_blank" href="https://discord.com/" class="menu__soc_link w-inline-block">*/}
                            {/*//     <svg class="menu__soc_disc" display="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.37 21.57"><defs><style>.menu__soc_disc_svg{fill:#fff;}</style></defs><g id="qTHPnT.tif"><path class="menu__soc_disc_svg" d="M0,15.67v-.39A1.35,1.35,0,0,0,.05,15a12.81,12.81,0,0,1,.11-2c.09-.62.15-1.25.26-1.86a22.44,22.44,0,0,1,.94-3.51,23.83,23.83,0,0,1,1.1-2.6C2.73,4.5,3,4,3.33,3.42s.61-1,.93-1.48a.59.59,0,0,1,.27-.22A20.63,20.63,0,0,1,6.83.83,22,22,0,0,1,9.73.08L10.16,0c.35.48.52,1,.82,1.5l1-.1,1.13-.1L14,1.25h.33l1.14.05h.24l1.3.15.45,0c.28-.5.46-1,.78-1.49a2.58,2.58,0,0,1,.29,0,23.74,23.74,0,0,1,5.33,1.67A.69.69,0,0,1,24.2,2c.43.71.86,1.42,1.28,2.14a19.27,19.27,0,0,1,1.17,2.42A20.5,20.5,0,0,1,27.49,9c.19.7.35,1.4.49,2.11.1.49.18,1,.24,1.5a15.3,15.3,0,0,1,.14,1.65c0,1,0,2.11,0,3.16a1,1,0,0,1-.5.91,25.68,25.68,0,0,1-4,2.28,25.87,25.87,0,0,1-2.54.95l-.18,0a15.4,15.4,0,0,1-1.46-2.42A13.93,13.93,0,0,0,21.92,18c0-.2-.17-.26-.28-.36a.41.41,0,0,0-.52-.06,16.22,16.22,0,0,1-2.77,1,15,15,0,0,1-2.57.45l-1.77.1c-.21,0-.42,0-.63-.05-.5,0-1-.06-1.49-.14-.7-.11-1.4-.26-2.09-.43a15.27,15.27,0,0,1-2.43-.86c-.36-.16-.39-.16-.68.1l-.18.17c0,.17.11.21.2.27a15.66,15.66,0,0,0,1.85.88l.23.13c-.11.2-.2.39-.31.56-.33.54-.67,1.08-1,1.62a.31.31,0,0,1-.42.15l-.84-.28a21.21,21.21,0,0,1-3.89-1.82C1.65,19,1,18.55.35,18.12a.45.45,0,0,1-.24-.38c0-.44,0-.87,0-1.3,0-.17,0-.34,0-.5A1.28,1.28,0,0,0,0,15.67Zm16.37-3.81a2.91,2.91,0,0,0,1.08,2.36,2.36,2.36,0,0,0,3,0,3,3,0,0,0,1.09-2.5,3.1,3.1,0,0,0-.21-1A2.58,2.58,0,0,0,18.66,9a2.43,2.43,0,0,0-1.55.83A2.85,2.85,0,0,0,16.37,11.86Zm-9.45-.34A3.24,3.24,0,0,0,8,14.2a2.41,2.41,0,0,0,3.22-.15,3.06,3.06,0,0,0,.88-2.23,3.18,3.18,0,0,0-.24-1.21A2.57,2.57,0,0,0,9.22,9a2.3,2.3,0,0,0-1.55.81A2.78,2.78,0,0,0,6.92,11.52Z"/></g></svg>*/}
                            {/*// </a> --> */}
                            <a rel="noreferrer" className="menu__soc_link w-inline-block"
                               href="https://twitter.com/minime_eth/"
                               target="_blank">
                                <svg className="menu__soc_twit" display="block" viewBox="0 0 23.7 19.43"
                                     xmlns="http://www.w3.org/2000/svg" fill='#fff'>

                                    <g id="B7RVCu.tif">
                                        <path className="menu__soc_twit_svg"
                                              d="M8.31,19.43H6.62a.87.87,0,0,0-.22-.05,13.35,13.35,0,0,1-4.69-1.19C1.13,17.92.57,17.6,0,17.31l0-.08a10.34,10.34,0,0,0,3.71-.32,9.47,9.47,0,0,0,3.39-1.72,4.93,4.93,0,0,1-4.53-3.4H4.68v-.08A5,5,0,0,1,.87,6.84,5.06,5.06,0,0,0,3,7.43C.35,5.22.66,2.43,1.62.94A13.86,13.86,0,0,0,11.6,6a11.75,11.75,0,0,1,0-1.88A4.66,4.66,0,0,1,14.9.27a4.74,4.74,0,0,1,5,1.14.51.51,0,0,0,.35.1,10.13,10.13,0,0,0,2.61-1l.27-.13a4.92,4.92,0,0,1-2,2.62l.05.09L23.7,2.4a3.62,3.62,0,0,1-.22.32,10.12,10.12,0,0,1-2,2,.43.43,0,0,0-.17.31A14,14,0,0,1,19,13.18a13,13,0,0,1-9,6C9.45,19.29,8.88,19.35,8.31,19.43Z">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__info">
                    <p className="footer__info_txt">{translatedTexts.politics} &copy; Mini Me</p>

                    <div className="footer__info_box"><a className="footer__info_txt" href="/doc/terms.pdf"
                                                         target="_blank">{translatedTexts.conditions}</a>
                        {/*// <!-- <a href="doc/contract.pdf" target="_blank" class="footer__info_txt footer__info_sp">Smart Contract</a> -->*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;