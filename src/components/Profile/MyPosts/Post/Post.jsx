import React from 'react';
import profileCss from './Post.module.css';


// https://preview.themeforest.net/item/matebook-social-network-html-template/full_screen_preview/25860967?_ga=2.133018510.1410821775.1605738375-1770383739.1605738256

const Post = (props) => {
    // console.log(props.message);
    return(
        <div className={profileCss.item}>
            <img src="https://banner2.cleanpng.com/20180528/ccc/kisspng-computer-icons-user-avatar-woman-avatar-5b0c5b2f6ecaa1.2446433615275364314538.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}



export default Post;