import { combineReducers } from 'redux';
import { postsFetchedSuccess } from '../actions';

export const initialAppState = {
    user : null,
    posts: []
}

function app(state = initialAppState, action) {
    return state;
}

function allPosts(state = initialAppState, action) {
    switch (action.type) {
        case postsFetchedSuccess:
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
