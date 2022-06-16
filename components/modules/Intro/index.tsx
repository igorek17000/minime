import React, {useEffect, useState} from 'react';
import {Menu} from "../index";

const Intro = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handlerScroll = () => setOffsetY(window.scrollY)

    useEffect(() => {
        if (window !== undefined) {
            window.addEventListener('scroll', handlerScroll)

            return () => {
                window.removeEventListener('scroll', handlerScroll)
            }
        }
    }, [])

    return (
        <div className="main">
            <Menu/>
            <img
                style={{
                    transition: 'transform .1s linear',
                    transform: `translateY(${offsetY * -0.13}px)`
                }}
                className="main__img"
                src="/images/main_img.svg?ver=3"
            />
            <img
                style={{
                    transition: 'transform .1s linear',
                    transform: `translateY(${offsetY * 0.2}px)`
                }}
                className="main__people"
                src="/images/main_people.png?ver=10"
            />
        </div>
    )
}

export default Intro