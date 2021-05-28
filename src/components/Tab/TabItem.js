import React, { useState } from 'react';
import './tab.css';
import Grid from '@material-ui/core/Grid';
import niji_char from '../../data/niji_char';
import ShowInfo from '../content_container/show_info';
import ShowImg from '../content_container/show_img';
import ShowVid from '../content_container/show_vid';
import Deco from '../content_container/deco';

//sent context to show_info
const InfoValueContext = React.createContext();

function TabItem() {
    const [InfoValue, setInfoValue] = useState('5')

    const nijiList = niji_char.map((niji) => {
        return (
            <button className={`btn-deco-${niji.id}`} key={niji.id} label={niji.name} onClick={() => setInfoValue(`${niji.id}`)} >
                <img className='tab_btn_img' src={niji.tab_img} alt={niji.name} />
            </button>
        )
    })

    return (
        <InfoValueContext.Provider value={InfoValue}>
            <div className="tabContainer">
                <Grid container item xs={12} spacing={0} direction="row" justify="center">
                    <div className="tabWarp">
                        <Grid>
                            {nijiList}
                        </Grid>
                    </div>
                </Grid>
            </div>
            <Deco />
            <Grid container item xs={12} spacing={0} direction="row" justify="center">
                <Grid className={`SHOW_ALL SHOW_ALL_BG_${InfoValue}`} container item xs={9} spacing={5} direction="row" justify="center">
                    <Grid item xs={5}>
                        <ShowInfo />
                    </Grid>
                    <Grid item xs={5}>
                        <ShowImg />
                        <ShowVid />
                    </Grid>
                </Grid>
            </Grid>

        </InfoValueContext.Provider>
    )
}

export { InfoValueContext };
export default TabItem;


