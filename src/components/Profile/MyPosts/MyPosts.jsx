import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const MyPosts = (props) => {
    debugger;
    return(
        <div className={myPostsCss.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={myPostsCss.posts}>
                <Post message='Hi, how are you?' likesCount='50' />
                <Post message="It's my first post" likesCount='32' />
            </div>
        </div>
    )
}



export default MyPosts;