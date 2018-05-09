import { combineReducers } from 'redux';
import { POSTS_FETCHED_SUCCESS } from '../actions';

export const initialAppState = {
    user : null,
    posts: []
}

function app(state = initialAppState, action) {
    return state;
}

function allPosts(state = initialAppState, action) {
    switch (action.type) {
        case POSTS_FETCHED_SUCCESS:
            return {
                ...state,
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
