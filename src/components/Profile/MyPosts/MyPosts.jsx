import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256



const MyPosts = (props) => {
    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text); 
    }

    return(
        <div className={myPostsCss.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={myPostsCss.posts}>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts;