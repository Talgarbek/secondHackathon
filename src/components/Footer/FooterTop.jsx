import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AlternateEmail, Home, Phone } from '@material-ui/icons';
import React from 'react';
import './Footer.css'

const FooterTop = () => {
    return (
        <div className='footerTop'>
            {/* <BottomNavigation style={{height: '40px', marginTop: '15px', paddingTop: '8px'}}>
                <h6><Phone></Phone>+996(312) 00 00 00&ensp;|&ensp;</h6>
                <h6><AlternateEmail></AlternateEmail> Example@gmail.com&ensp;|&ensp;</h6>
                <h6><Home></Home> Example str. 123&ensp;|&emsp;&emsp;&emsp;&emsp;&emsp;</h6>
                <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{color: 'red'}} />} href="https://www.youtube.com/"/>
                <BottomNavigationAction label="Instagram"icon={<InstagramIcon style={{color: 'red'}} />} href="https://instagram.com" />
                <BottomNavigationAction label="Telegram"icon={<TelegramIcon style={{color: 'blue'}} />} href="https://telegram.org" />
                <BottomNavigationAction label="Twitter"icon={<TwitterIcon style={{color: 'blue'}} />} href="https://twitter.com/?lang=ru" />
            </BottomNavigation> */}
        </div>
    );
};

export default FooterTop;