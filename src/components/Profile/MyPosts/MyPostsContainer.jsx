import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256



const MyPostsContainer = () => {
    return(
        <StoreContext.Consumer>
        {
            (store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text); 
                store.dispatch(action);
            }
            return <MyPosts updateNewPostText={onPostChange} 
                addPost={addPost} 
                posts={state.profilePage.posts}
                newPostText={state.profilePage.NewPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;