import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/communication-technology-internet-business-global-world-network-telecommunication-earth-cryptocurrency-blockchain-iot-elements-this-image-furnished-by-nasa_102957-60.jpg" alt=""/>
            </div>
            <div className={profileInfoCss.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" className={profileInfoCss.imgBlock} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
}



export default ProfileInfo;