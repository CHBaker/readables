import { combineReducers } from 'redux';
import { POSTS_FETCHED_SUCCESS, NEW_POST_SUCCESS } from '../actions';

export const initialUserState = {
    user : null,
}

function app(state = initialUserState, action) {
    return state;
}

const initialPostState = {
    allPosts: [],
    redux: [],
    react: [],
    udacity: [],
    node: []
}

function allPosts(state = initialPostState, action) {
    switch (action.type) {
        case POSTS_FETCHED_SUCCESS:
            return {
                allposts: action.posts,
                redux: action.posts.filter((post) => post.category === 'redux'),
                react: action.posts.filter((post) => post.category === 'react'),
                udacity: action.posts.filter((post) => post.category === 'udacity'),
                node: action.posts.filter((post) => post.category === 'node'),
            };
        case NEW_POST_SUCCESS:
            console.log('state post, ', action.post);
            const category = action.post.category;
            return {
                ...state,
                [category]: [...state[category], action.post]
            }
        default:
            return state;
    }
}

export default combineReducers({
    app,
    allPosts
})
