import React from 'react'
import useLanguage from "../../../hooks/useLanguage"
import { teamEng, teamRus } from './constants'
import {v4 as randomKey} from 'uuid'

const translates = {
    title: ['Команда мечты', 'Dream Team'],

}

const Team = () => {
    const {translatedTexts, language}: any = useLanguage(translates)

    return (
        <div className="team">
            <div className="cont">
                <p className="team__head">{translatedTexts.title}</p>

                <div className="team__slide">
                    <div className="team__box">
                        {
                            (language === 'ru' ? teamRus : teamEng).map(({image, name, description, twitterLink, emailLink}) => (
                                <div key={randomKey()} className="team__itm">
                                    <div className="team__itm_wrap">
                                        <div className="team__itm_img">
                                            <img
                                                className="team__itm_img_el"
                                                src={image}
                                            />
                                        </div>
                                    </div>

                                    <div className="team__itm_bl">
                                        <p className="team__itm_name">{name}</p>
                                        {
                                            twitterLink &&
                                            <a rel="noreferrer" href={twitterLink} target="_blank"
                                               className="team__itm_link w-inline-block">
                                                <svg className="team__itm_inst" display="block"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.7 19.44"
                                                     fill='#d9d9d9'>
                                                    <g id="B7RVCu.tif">
                                                        <path className="team__itm_inst_svg"
                                                              d="M8.31,19.44H6.62l-.22-.05A13.19,13.19,0,0,1,1.71,18.2c-.58-.27-1.14-.59-1.71-.88v-.08a10.32,10.32,0,0,0,3.71-.32A9.3,9.3,0,0,0,7.1,15.2a4.91,4.91,0,0,1-4.53-3.4H4.68v-.08A5,5,0,0,1,.87,6.85,5,5,0,0,0,3,7.44,4.89,4.89,0,0,1,1.62,1,13.85,13.85,0,0,0,11.6,6a11.8,11.8,0,0,1,0-1.88A4.66,4.66,0,0,1,14.9.28a4.76,4.76,0,0,1,5,1.14.5.5,0,0,0,.35.1,9.85,9.85,0,0,0,2.61-1l.27-.13a4.89,4.89,0,0,1-2,2.62l.05.09,2.52-.69a3.62,3.62,0,0,1-.22.32,10,10,0,0,1-2,2,.44.44,0,0,0-.17.31A14,14,0,0,1,19,13.19a13,13,0,0,1-9,6C9.45,19.3,8.88,19.36,8.31,19.44Z"/>
                                                    </g>
                                                </svg>
                                            </a>
                                        }
                                    </div>

                                    <p className="team__itm_txt">{description}</p>
                                </div>
                            ))
                        }

                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img">*/}
                        {/*            <img*/}
                        {/*                className="team__itm_img_el"*/}
                        {/*                src="/images/team_1.png"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Timmex</p>*/}
                        {/*        <a rel="noreferrer" href="https://www.twitter.com/timmexETH" target="_blank"*/}
                        {/*           className="team__itm_link w-inline-block">*/}
                        {/*            <svg className="team__itm_inst" display="block"*/}
                        {/*                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.7 19.44"*/}
                        {/*                 fill='#d9d9d9'>*/}
                        {/*                <g id="B7RVCu.tif">*/}
                        {/*                    <path className="team__itm_inst_svg"*/}
                        {/*                          d="M8.31,19.44H6.62l-.22-.05A13.19,13.19,0,0,1,1.71,18.2c-.58-.27-1.14-.59-1.71-.88v-.08a10.32,10.32,0,0,0,3.71-.32A9.3,9.3,0,0,0,7.1,15.2a4.91,4.91,0,0,1-4.53-3.4H4.68v-.08A5,5,0,0,1,.87,6.85,5,5,0,0,0,3,7.44,4.89,4.89,0,0,1,1.62,1,13.85,13.85,0,0,0,11.6,6a11.8,11.8,0,0,1,0-1.88A4.66,4.66,0,0,1,14.9.28a4.76,4.76,0,0,1,5,1.14.5.5,0,0,0,.35.1,9.85,9.85,0,0,0,2.61-1l.27-.13a4.89,4.89,0,0,1-2,2.62l.05.09,2.52-.69a3.62,3.62,0,0,1-.22.32,10,10,0,0,1-2,2,.44.44,0,0,0-.17.31A14,14,0,0,1,19,13.19a13,13,0,0,1-9,6C9.45,19.3,8.88,19.36,8.31,19.44Z"/>*/}
                        {/*                </g>*/}
                        {/*            </svg>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}

                        {/*    <p className="team__itm_txt">Founder<br/>*/}
                        {/*        and Project manager</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_6.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Lena</p>*/}
                        {/*        <a rel="noreferrer" href="https://www.twitter.com/Sousplanet" target="_blank"*/}
                        {/*           className="team__itm_link w-inline-block">*/}
                        {/*            <svg className="team__itm_inst" display="block"*/}
                        {/*                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.7 19.44"*/}
                        {/*                 fill='#d9d9d9'>*/}
                        {/*                <g id="B7RVCu.tif">*/}
                        {/*                    <path className="team__itm_inst_svg"*/}
                        {/*                          d="M8.31,19.44H6.62l-.22-.05A13.19,13.19,0,0,1,1.71,18.2c-.58-.27-1.14-.59-1.71-.88v-.08a10.32,10.32,0,0,0,3.71-.32A9.3,9.3,0,0,0,7.1,15.2a4.91,4.91,0,0,1-4.53-3.4H4.68v-.08A5,5,0,0,1,.87,6.85,5,5,0,0,0,3,7.44,4.89,4.89,0,0,1,1.62,1,13.85,13.85,0,0,0,11.6,6a11.8,11.8,0,0,1,0-1.88A4.66,4.66,0,0,1,14.9.28a4.76,4.76,0,0,1,5,1.14.5.5,0,0,0,.35.1,9.85,9.85,0,0,0,2.61-1l.27-.13a4.89,4.89,0,0,1-2,2.62l.05.09,2.52-.69a3.62,3.62,0,0,1-.22.32,10,10,0,0,1-2,2,.44.44,0,0,0-.17.31A14,14,0,0,1,19,13.19a13,13,0,0,1-9,6C9.45,19.3,8.88,19.36,8.31,19.44Z"/>*/}
                        {/*                </g>*/}
                        {/*            </svg>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Artist</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_2.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Yurski</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Co-founder<br/>*/}
                        {/*        and Project manager</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_3.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Luke</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Financial officer</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_7.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Daria</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">CGI Artist</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_4.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Erik</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Artist</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img"><img className="team__itm_img_el"*/}
                        {/*                                            src="/images/team_5.png"/></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Alex</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Creative director</p>*/}
                        {/*</div>*/}
                        {/*<div className="team__itm">*/}
                        {/*    <div className="team__itm_wrap">*/}
                        {/*        <div className="team__itm_img">*/}
                        {/*            <img className="team__itm_img_el" src="/images/team_8.png"/>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="team__itm_bl">*/}
                        {/*        <p className="team__itm_name">Vitalii</p>*/}
                        {/*    </div>*/}
                        {/*    <p className="team__itm_txt">Blockchain developer</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;