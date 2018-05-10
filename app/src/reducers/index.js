import { combineReducers } from 'redux';
import { POSTS_FETCHED_SUCCESS } from '../actions';

export const initialAppState = {
    user : null
}

function app(state = initialAppState, action) {
    return state;
}

function allPosts(state = [], action) {
    switch (action.type) {
        case POSTS_FETCHED_SUCCESS:
            return {
                posts: action.posts
            };
        default:
            return state;
    }
}

export default combineReducers({
    app,
    allPosts
})
