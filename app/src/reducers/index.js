import { combineReducers } from 'redux';
import {
    POSTS_FETCHED_SUCCESS, NEW_POST_SUCCESS,
    DELETE_POST_SUCCESS, EDIT_POST_SUCCESS, VOTE_POST_SUCCESS,
    GET_POST_SUCCESS
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
                ...state,
                allPosts: [...action.posts],
                redux: [...action.posts.filter((post) => post.category === 'redux')],
                react: [...action.posts.filter((post) => post.category === 'react')],
                udacity: [...action.posts.filter((post) => post.category === 'udacity')],
                node: [...action.posts.filter((post) => post.category === 'node')],
            };
        case GET_POST_SUCCESS:
            console.log(state)
            const getPostCategory = action.post.category;
            const getPostId = action.post.id;
            const fetchedPost = action.post;
            return {
                ...state,
                allPosts: [...state.allPosts.filter(post => post.id !== action.post.id), {...fetchedPost}],
                [getPostCategory]: [...state[getPostCategory].filter(post => post.id !== getPostId), {...fetchedPost}]
            }
        case NEW_POST_SUCCESS:
            const newPostCategory = action.post.category;
            const newPost = action.post;
            newPost.voteScore = 0;
            console.log('current state ', state)
            return {
                ...state,
                [newPostCategory]: [...state[newPostCategory], newPost]
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
                    if (post.id === editedPostId) {
                        post.title = action.post.title;
                        post.body = action.post.body;
                        return post
                    }
                    return post
                })]
            }
        case VOTE_POST_SUCCESS:
            const vote = action.postInfo.vote;
            const votePostId = action.postInfo.post.id;
            const voteCategory = action.postInfo.post.category;
            const voteCount = (vote === 'upVote') ? 1 : -1;
            return {
                ...state,
                [voteCategory]: [...state[voteCategory].filter(post => {
                    if (post.id === votePostId) {
                        post.voteScore = post.voteScore + voteCount;
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
