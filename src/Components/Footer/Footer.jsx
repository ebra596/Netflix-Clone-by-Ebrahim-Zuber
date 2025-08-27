import React from 'react'
import "./Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <div className='Footer_outer_container'>
            <div className="Footer_inner_container">
                <div className="Footer_icons">
                    <FacebookOutlinedIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
                <div className="Footer_data">
                    <div>
                        <ul>
                            <li>Audio Description</li>
                            <li>Investor Relations</li>
                            <li>Legal Noties</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Gift Cards</li>
                            <li>Terms of User</li>
                            <li>Copperate Information</li>
                        </ul>
                    </div>
                    <div>
                        <ul><li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li></ul>
                    </div>
                </div>
                <div className="servie_code">
                    <p>
                        servie_code
                    </p>
                </div>
                <div className="copy-write">
                    &copy; 1997-2025 Netlifix, Inc By Ebrahim Zuber
                </div>


            </div>
        </div>
    )
}

export default Footer
