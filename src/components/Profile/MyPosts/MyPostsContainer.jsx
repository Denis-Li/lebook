import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256



const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text); 
        props.store.dispatch(action);
    }

    return(
        <MyPosts updateNewPostText={onPostChange} 
            addPost={addPost} 
            posts={state.profilePage.posts}
            newPostText={state.profilePage.NewPostText} />
    )
}

export default MyPostsContainer;