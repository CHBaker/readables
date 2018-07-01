import { combineReducers } from 'redux';
import {
    POSTS_FETCHED_SUCCESS, NEW_POST_SUCCESS,
    DELETE_POST_SUCCESS, EDIT_POST_SUCCESS, VOTE_POST_SUCCESS,
    GET_POST_SUCCESS,
    GET_COMMENTS_SUCCESS,
    NEW_COMMENT_SUCCESS,
    EDIT_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS,
    SORT_BY_SCORE
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
            newPost.commentCount = 0;
            return {
                ...state,
                [newPostCategory]: [newPost, ...state[newPostCategory]]
            }
        case DELETE_POST_SUCCESS:
            const deletePostId = action.post.id;
            const deleteCategory = action.post.category;
            return {
                ...state,
                allPosts: [...state.allPosts.filter(post => post.id !== deletePostId)],
                [deleteCategory]: [...state[deleteCategory].filter(post => post.id !== deletePostId)],
                currentPost: {}
            }
        case EDIT_POST_SUCCESS:
            const editedPost = action.post;
            const editedPostCategory = action.post.category;
            editedPost.title = action.post.title;
            editedPost.body = action.post.body;
            return {
                ...state,
                allPosts: [editedPost, ...state.allPosts.filter(post => post.id !== editedPost.id)],
                [editedPostCategory]: [editedPost, ...state[editedPostCategory].filter(post => post.id !== editedPost.id)],
                currentPost: {...editedPost}
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
                [voteCategory]: [votePost, ...state[voteCategory].filter(post => post.id !== votePostId)],
                allPosts: [votePost, ...state.allPosts.filter(post => post.id !== votePostId)],
                currentPost: {...votePost}
            }
        case NEW_COMMENT_SUCCESS:
            const comment = action.comment;
            comment.voteScore = 0;
            const parent = state.currentPost
            parent.commentCount += 1;
            return {
                ...state,
                allPosts: [parent, ...state.allPosts.filter(post => post.id !== parent.id)],
                [parent.category]: [parent, ...state[parent.category].filter(post => post.id !== parent.id)],
                currentPost: {...parent},
                currentComments: [comment, ...state.currentComments]
            }
        case EDIT_COMMENT_SUCCESS:
            return {
                ...state,
                currentComments: [action.comment, ...state.currentComments.filter(comment => comment.id !== action.comment.id)]
            }
        case DELETE_COMMENT_SUCCESS:
            console.log(action);
            const commentId = action.commentInfo.comment.id;
            const relatedPost = action.commentInfo.post;
            relatedPost.commentCount -= 1;
            return {
                ...state,
                allPosts: [relatedPost, ...state.allPosts.filter(post => post.id !== relatedPost.id)],
                [relatedPost.category]: [relatedPost, ...state[relatedPost.category].filter(post => post.id !== relatedPost.id)],
                currentPost: relatedPost,
                currentComments: [...state.currentComments.filter(comment => comment.id !== commentId)]
            }
        case SORT_BY_SCORE:
            const posts = state.allPosts;
            posts.sort((a, b) => a.voteScore - b.voteScore );
            return {
                ...state,
                allPosts: [ ...posts ]
            }
        default:
            return state;
    }
}

export default combineReducers({
    app,
    allPosts
})
