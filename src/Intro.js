import React from 'react'

const Intro = () => {
    const introduction = <p>Hey, please pick your age demographic</p>;
    return (
        <div className="instructions">
            <h1>{introduction}</h1>
            
        </div>
    )
}

export default Intro;