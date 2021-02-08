import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from 'react';


it('new post should be added', () => {
    let action = addPostActionCreator("denisli.info");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
        ]
    };
    let newState = profileReducer(state, action);

});