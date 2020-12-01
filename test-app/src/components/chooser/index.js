import React, { useState } from 'react';
import './styles.scss';

const Chooser = () => {
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
    const changeToTyler = () => {
        setName("Tyler");
    }

    return (
    <div className="chooser">
        <button data-test="setCraig" onClick={changeToCraig}>
            Set Craig
        </button>
        <button data-test="setEric" onClick={changeToEric}>
            Set Eric
        </button>
        <button data-test="setRaymond" onClick={changeToRaymond}>
            Set Raymond
        </button>
        <button data-test="setRaymond" onClick={changeToTyler}>
            Set Tyler
        </button>
    <p className="styleBold styleBlue" data-test='setDeveloper'>{name}</p>
    </div>
    )
}

export default Chooser;