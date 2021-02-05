import React, { Component } from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256



const MyPosts = React.memo(props => {
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }
    console.log("r yo");
    let postsElements = props.posts
        .map( p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return(
        <div className={myPostsCss.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={myPostsCss.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post massage"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
AddNewPostForm = reduxForm ({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

export default MyPosts;