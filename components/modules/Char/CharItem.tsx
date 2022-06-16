import React from 'react'
import {TypeChar} from '.'

const CharItem: React.FC<TypeChar> = ({image, imageHover, name, description}) => {

    return (
        <>
            <div className="char__sl_cont">
                <div className="char__sl_img">
                    <img
                        className="char__sl_pers char__sl_pers_no-hover"
                        src={image}
                    />
                    <img
                        className="char__sl_pers char__sl_pers_hover"
                        src={imageHover}
                    />
                </div>
            </div>
            <p className="char__sl_name">{name}</p>
            <p className="char__sl_txt">{description}</p>
        </>
    )
}

export default CharItem