import React, { useContext } from 'react';
import './content.css'
import niji_char from '../../data/niji_char';
import Carousel from 'react-material-ui-carousel'
import { InfoValueContext } from '../Tab/TabItem';

//recieve context from tabItem
function ShowImg() {
    const InfoValue = useContext(InfoValueContext)

    const obj = niji_char.find(o => o.id === InfoValue)

    const charimg = obj.char_img

    return (
        <div className="imgWrap">
            <Carousel indicators={false}>
                {
                    charimg.map((item, i) => <img key={i} className="imgSlide" src={charimg[i]} alt={i} />)
                }
            </Carousel>
        </div>
    )
}

export default ShowImg;