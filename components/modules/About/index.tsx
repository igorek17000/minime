
import useLanguage from "../../../hooks/useLanguage";
import {v4 as randomKey} from 'uuid'

const translates = {
    title: ['О Mini Me', 'About Mini Me'],
    info: [
        <p key={randomKey()} className="about__offer" data-aos="zoom-out-up">
            Чем уникальны наши персонажи? <span className="about__offer_sp">Более 200 айтемов</span> на любой вкус и
            цвет, что позволяет сделать каждого персонажа особенным, как я и ты.
        </p>,
        <p key={randomKey()} className="about__offer" data-aos="zoom-out-up">
            Over <span className="about__offer_sp">200 different traits</span> make up our collection of
            characters, making them all unique, just like me and
            you.
        </p>
    ],
    description: [
        'Идея, которую мы воплотили в Mini Me, — это создание пространства, где каждый найдёт частичку себя в этом огромном цифровом мире.',
        'The idea we are trying to convey with Mini Me, is a space where we can find a partof ourselves in digital form.'
    ]
}

const About = () => {
    const {translatedTexts}: any = useLanguage(translates)

    return (
        <div className="about">
            <div className="cont">
                <p className="about__label">{translatedTexts.title}</p>
                {translatedTexts.info}

                <p className="about__txt">
                    {translatedTexts.description}
                </p>
            </div>
        </div>
    )
}

export default About