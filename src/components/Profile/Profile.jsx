import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import profileCss from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const Profile = (props) => {

    debugger;
    

    return(
        <div>
            <ProfileInfo /> 
            <MyPosts posts={props.posts} />
        </div>
    )
}



export default Profile;