import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import niji_char from '../../data/niji_char';
import { InfoValueContext } from '../Tab/TabItem';

//recieve context from tabItem
function ShowInfo() {
    const InfoValue = useContext(InfoValueContext)

    const obj = niji_char.find(o => o.id === InfoValue)

    return (
        <div className="showinfoWrap">
            <List key={obj.id} >
                <li>
                    {`Name : ${obj.name}`}
                </li>
                <Divider />
                <li>
                    {`Birthday : ${obj.birthday}`}
                </li>
                <Divider />
                <li>
                    {`Year : ${obj.year}`}
                </li>
                <Divider />
                <li>
                    {`Color : ${obj.color}`}
                </li>
                <Divider />
                <li>
                    {`Unit : ${obj.unit}`}
                </li>
                <Divider />
                <li>
                    {`Description : ${obj.description}`}
                </li>
            </List>
        </div>
    )
}

export default ShowInfo;