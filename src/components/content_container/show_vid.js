import React, { useContext } from 'react';
import './content.css'
import niji_char from '../../data/niji_char';
import { InfoValueContext } from '../Tab/TabItem';

//recieve context from tabItem
function ShowVid() {
    const InfoValue = useContext(InfoValueContext)

    const obj = niji_char.find(o => o.id === InfoValue)

    return (
        <div className="videoWrapper">
            <iframe width="560" height="315" src={obj.vid_src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default ShowVid;