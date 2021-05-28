import React, { useContext } from 'react';
import './content.css'
import niji_char from '../../data/niji_char';
import { InfoValueContext } from '../Tab/TabItem';

//recieve context from tabItem
function Deco() {
    const InfoValue = useContext(InfoValueContext)

    const obj = niji_char.find(o => o.id === InfoValue)

    return (
        <div>
            <div className="Deco-logo">
                <img src={obj.char_logo} alt={obj.name}></img>
            </div>
            <div className="Deco-sign">
                <img src={obj.char_sign} alt={obj.name}></img>
            </div>
        </div>
    )
}

export default Deco;