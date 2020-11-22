import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const MyPosts = (props) => {
    debugger;

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
    ]

    let postsElements = posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts;