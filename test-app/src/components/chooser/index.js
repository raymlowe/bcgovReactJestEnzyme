import React, { useState } from 'react';
import './styles.scss';

const Chooser = () => {
    
    //We useState to set state of this component
    const [name, setName] = useState("")

    //function for setting the state
    const changeToCraig = () => {
        setName("Craig");
    }
    const changeToEric = () => {
        setName("Eric");
    }
    const changeToRaymond = () => {
        setName("Raymond");
    }
    const changeToTyler = () => {
        setName("Tyler");
    }

    return (
    <div className="chooser">
        {/* Buttons for Choosing the Developer */}
        <button data-test="setCraig" className="selector_button_craig" onClick={changeToCraig}>
            Choose Craig
        </button>
        <button data-test="setEric" className="selector_button_eric" onClick={changeToEric}>
            Choose Eric
        </button>
        <button data-test="setRaymond" className="selector_button_raymond" onClick={changeToRaymond}>
            Choose Raymond
        </button>
        <button data-test="setRaymond" className="selector_button_tyler" onClick={changeToTyler}>
            Choose Tyler
        </button>
    {/* Container to display chosen developer */}
    <p className="styleBold styleBlue" data-test='setDeveloper'>{name}</p>
    </div>
    )
}

export default Chooser;