import React from 'react'

const Intro = () => {
    const introduction = <p>Hey, please pick your age demographic</p>;
    const demoQ = <form>
        <input type="radio" name="choice" value="18-25"/> 18-25
<input type="radio" name="choice" value="25-40"/> 25-40
<input type="radio" name="choice" value="40-60"/> 40-60
<input type="radio" name="choice" value="60+"/> 60+
    </form>
    const submitButton =  <button onclick="submitAnswer()">Submit Answer</button>

    const submitAnswer = () => {

    }
    var radios = document.getElementsByName('choice');
    var value = "";


 

    return (
        <div className="instructions">
            <h1>{introduction}</h1>  
            <div>{demoQ}</div>  
            <div>{submitButton}</div>        
        </div>                
    )
}

export default Intro;