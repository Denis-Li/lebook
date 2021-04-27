import React from 'react';
import { reduxForm } from 'redux-form';
import profileInfoCss from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';



const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        
        <div>
            <b>My professional skills</b>: 
            { createField("My professional skills", "lookingForAJobDesvription", [], Textarea )}
        </div>
        
        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div className={profileInfoCss.contact}>
                    <b>{key}: {createField("Full name", "fullName", [], Input)}</b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm