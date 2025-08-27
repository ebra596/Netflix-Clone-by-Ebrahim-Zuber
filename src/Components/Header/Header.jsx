import React from 'react'
import "./header.css"
import logo from "./image/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    return (
        <div className='header_outer_container'>
            <div className="header_container">
                <div className="header_left">
                    <ul>
                        <li><img src={logo} alt="" width={100} /></li>
                        <li>Netflix</li>
                        <li>Home</li>
                        <li>TvShows</li>
                        <li>Movies</li>
                        <li>latest</li>
                        <li>MyLists</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
                <div className="header right">
                    <ul>
                        <l><SearchIcon /></l>
                        <l><NotificationsNoneIcon /> </l>
                        <l><AccountBoxIcon /></l>
                        <l><ArrowDropDownIcon /></l>
                        <l></l>
                        <l></l>
                        <l></l>
                        <l></l>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Header
