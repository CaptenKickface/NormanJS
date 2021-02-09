import React from 'react'

const Intro = () => {
    const introduction = <p>Hey, please pick your age demographic</p>;
    const demoQ = <form>
        <input type="radio" name="choice" value="18-25"/> Scripting
<input type="radio" name="choice" value="25-40"/> Programming
<input type="radio" name="choice" value="40-60"/> Application
<input type="radio" name="choice" value="60+"/> None of These
    </form>
    const submitButton =  <button onclick="submitAnswer()">Submit Answer</button>

    var radios = document.getElementsByName('choice');
    var value = "";

    if (value == "") {
        alert('please select an age group');
    } else {
        console.log("This is where you put the submission to DB")
    };

    return (
        <div className="instructions">
            <h1>{introduction}</h1>  
            <div>{demoQ}</div>  
            <div>{submitButton}</div>        
        </div>                
    )
}

export default Intro;
