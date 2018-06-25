import { combineReducers } from 'redux';
import {
    POSTS_FETCHED_SUCCESS, NEW_POST_SUCCESS,
    DELETE_POST_SUCCESS, EDIT_POST_SUCCESS
} from '../actions';

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
            const newPostCategory = action.post.category;
            return {
                ...state,
                [newPostCategory]: [...state[newPostCategory], action.post]
            }
        case DELETE_POST_SUCCESS:
            const deletePostId = action.post.id;
            const deleteCategory = action.post.category;
            return {
                ...state,
                [deleteCategory]: [...state[deleteCategory].filter(post => post.id !== deletePostId)]
            }
        case EDIT_POST_SUCCESS:
            const editedPostId = action.post.id;
            const editedPostCategory = action.post.category;
            return {
                ...state,
                [editedPostCategory]: [...state[editedPostCategory].filter(post => {
                    if (post === editedPostId) {
                        post.title = action.post.title;
                        post.body = action.post.body;
                        return post
                    }
                    return post
                })]
            }
        default:
            return state;
    }
}

export default combineReducers({
    app,
    allPosts
})
