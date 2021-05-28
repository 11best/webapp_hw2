import React from 'react'
import logo from '../../img/logo/logo_niji.png';
import './footer.css';

const footer = () => {
    return (
        <div className="footerWrap">
            <img className="footer_logo" src={logo} alt="logo"/>
        </div>
    )
}

export default footer;
