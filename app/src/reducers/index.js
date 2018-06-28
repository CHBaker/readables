import { combineReducers } from 'redux';
import {
    POSTS_FETCHED_SUCCESS, NEW_POST_SUCCESS,
    DELETE_POST_SUCCESS, EDIT_POST_SUCCESS, VOTE_POST_SUCCESS,
    GET_POST_SUCCESS,
    GET_COMMENTS_SUCCESS,
    NEW_COMMENT_SUCCESS
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
    node: [],
    currentPost: {},
    currentComments: []
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
            const getPostCategory = action.post.category;
            const getPostId = action.post.id;
            const fetchedPost = {...action.post};
            return {
                ...state,
                allPosts: [...state.allPosts.filter(post => {return post.id !== action.post.id} ), fetchedPost],
                [getPostCategory]: [...state[getPostCategory].filter(post => post.id !== getPostId), fetchedPost],
                currentPost: fetchedPost
            }
        case GET_COMMENTS_SUCCESS:
            const comments = action.comments;
            return {
                ...state,
                currentComments: comments
            }
        case NEW_POST_SUCCESS:
            const newPostCategory = action.post.category;
            const newPost = action.post;
            newPost.voteScore = 0;
            return {
                ...state,
                [newPostCategory]: [newPost, ...state[newPostCategory]]
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
            const voteCount = (vote === 'upVote') ? 1 : -1;
            const votePost = action.postInfo.post;
            const votePostId = action.postInfo.post.id;
            const voteCategory = action.postInfo.post.category;
            votePost.voteScore += voteCount;
            return {
                ...state,
                [voteCategory]: [...state[voteCategory].filter(post => post.id !== votePostId), votePost],
                allPosts: [...state.allPosts.filter(post => post.id !== votePostId), votePost],
                currentPost: {...votePost}
            }
        case NEW_COMMENT_SUCCESS:
            const comment = action.comment;
            comment.voteScore = 0;
            return {
                ...state,
                currentComments: [comment, ...state.currentComments]
            }
        default:
            return state;
    }
}

export default combineReducers({
    app,
    allPosts
})
