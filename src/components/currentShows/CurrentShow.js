
import React, { useState } from 'react';
import "./currentShow.css"

const CurrentShow = ({
    click,
    title,
    language,
    movie_img
}) => {
    const [isHovered, setHover] = useState(false);


    return (
        <div onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className="image-container-now">
                <div className="movie-card">
                    <div className="movie-info">
                        <h3>{title}</h3>
                        <p>Language: {language}</p>
                    </div>
                    <img
                        src={movie_img}
                        alt="Banner Img"
                        className="image-nowShowing"
                    />

                    {
                        isHovered ? (<button style={{ cursor: "pointer" }} onClick={click} className='buttonBtn'>Watch Trailer </button>
                        ) : null
                    }

                </div>
            </div>
        </div>
    )
}

export default CurrentShow