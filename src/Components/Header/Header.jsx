// import React from 'react'
// import "./header.css"
// import logo from "./image/logo.png"
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// function Header() {
//     return (
//         <>
//             <div>
//                 const myHeaders = new Headers();
//                 myHeaders.append("x-apihub-key", "kEn2wtXOiB-4id0PRgWivhlIU8P3haKsVYGhOjGaCiBLlBygHI");
//                 myHeaders.append("x-apihub-host", "TMDB-Movies-and-TV-Shows-API-by-APIRobots.allthingsdev.co");
//                 myHeaders.append("x-apihub-endpoint", "85ffa74b-8298-40ac-908a-736892987ab1");

//                 const requestOptions = {
//                     method: "GET",
//                 headers: myHeaders,
//                 redirect: "follow"
// };

//                 fetch("https://TMDB-Movies-and-TV-Shows-API-by-APIRobots.proxy-production.allthingsdev.co/v1/tmdb", requestOptions)
//    .then((response) => response.text())
//    .then((result) => console.log(result))
//    .catch((error) => console.error(error));
//             </div>




//             <div className='header_outer_container'>
//                 <div className="header_container">
//                     <div className="header_left">
//                         <ul>
//                             <li><img src={logo} alt="" width={100} /> </li>
//                             <li>Netflix</li>
//                             <li>Home</li>
//                             <li>TvShows</li>
//                             <li>Movies</li>
//                             <li>latest</li>
//                             <li>MyLists</li>
//                             <li>Browse by Language</li>
//                         </ul>
//                     </div>
//                     <div className="header right">
//                         <ul>
//                             <l><SearchIcon /></l>
//                             <l><NotificationsNoneIcon /> </l>
//                             <l><AccountBoxIcon /></l>
//                             <l><ArrowDropDownIcon /></l>
//                             <l></l>
//                             <l></l>
//                             <l></l>
//                             <l></l>
//                         </ul>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header
import React, { useEffect } from 'react';
import "./header.css";
import logo from "./image/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {


    return (
        <>
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
                    <div className="header_right">
                        <ul>
                            <li><SearchIcon /></li>
                            <li><NotificationsNoneIcon /></li>
                            <li><AccountBoxIcon /></li>
                            <li><ArrowDropDownIcon /></li>
                            {/* Extra empty list items removed for cleanliness */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;