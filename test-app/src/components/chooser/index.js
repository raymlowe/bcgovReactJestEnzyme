import React, { useState } from 'react';


const Chooser = () => {

    const [text, setText] = useState("Initial State")
    const changeText = () => {
        setText("Initial State Changed")
    }

    const [name, setName] = useState("")
    const changeToCraig = () => {
        setName("Craig");
    }
    const changeToEric = () => {
        setName("Eric");
    }
    const changeToRaymond = () => {
        setName("Raymond");
    }


    return (
    <div>
        <button data-test='test_name_button' onClick={changeText}>
        Change Text
        </button>
        <p data-test='test_state' className='changableText'>{text}</p>

        <button data-test="setCraig" onClick={changeToCraig}>
            Set Craig
        </button>
        <button data-test="setEric" onClick={changeToEric}>
            Set Eric
        </button>
        <button data-test="setRaymond" onClick={changeToRaymond}>
            Set Raymond
        </button>
    <p data-test='setDeveloper'>{name}</p>
    </div>
    )
}

export default Chooser;