import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/communication-technology-internet-business-global-world-network-telecommunication-earth-cryptocurrency-blockchain-iot-elements-this-image-furnished-by-nasa_102957-60.jpg" alt=""/>
            </div>
            <div className={profileInfoCss.descriptionBlock}>av + descr</div>
        </div>
    )
}



export default ProfileInfo;