import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return(
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/communication-technology-internet-business-global-world-network-telecommunication-earth-cryptocurrency-blockchain-iot-elements-this-image-furnished-by-nasa_102957-60.jpg" alt=""/>
            </div>
            <div className={profileInfoCss.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="" className={profileInfoCss.imgBlock} />
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                <ProfileData profile={profile} />

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div>{profile.contacts.instagram}</div>
                <div>{profile.fullName}</div>
            </div>
        </div>
    )
}

const ProfileData = ({profile}) => {
    return <div>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && 
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDesvription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={profileInfoCss.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;