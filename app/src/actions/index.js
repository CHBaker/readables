import * as Api from '../utils/api';

export const POSTS_FETCHED_SUCCESS = 'POSTS_FETCHED_SUCCESS';
export const SORT_BY_SCORE = 'SORT_BY_SCORE';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const VOTE_POST_SUCCESS = 'VOTE_POST_SUCCESS';
export const NEW_COMMENT_SUCCESS = 'NEW_COMMENT_SUCCESS';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export const fetchPosts = () => dispatch => {
    Api.getAllPosts().then(posts =>
        dispatch({
            type: POSTS_FETCHED_SUCCESS,
            posts
        })
    ).catch(error => console.log(error));
};

export const getPost = (postId) => dispatch => {
    Api.getPost(postId).then(post =>
        dispatch({
            type: GET_POST_SUCCESS,
            post
        })
    ).catch(error => console.log(error));
}

export const getComments = (postId) => dispatch => {
    Api.getComments(postId).then(comments =>
        dispatch({
            type: GET_COMMENTS_SUCCESS,
            comments
        })
    ).catch(error => console.log(error));
}

export const newPost = (post) => dispatch => {
    Api.newPost(post).then(post =>
        dispatch({
            type: NEW_POST_SUCCESS,
            post
        })
    ).catch(error => console.log(error));
};

export const deletePost = (post) => dispatch => {
    Api.deletePost(post).then(post =>
        dispatch({
            type: DELETE_POST_SUCCESS,
            post
        })
    ).catch(error => console.log(error));
}

export const editPost = (post) => dispatch => {
    Api.editPost(post).then(post =>
        dispatch({
            type: EDIT_POST_SUCCESS,
            post
        })
    ).catch(error => console.log(error));
}

export const votePost = (vote, post) => dispatch => {
    Api.vote(vote, post).then((postInfo) =>
        dispatch({
            type: VOTE_POST_SUCCESS,
            postInfo: { vote: postInfo.vote, post: postInfo.post }
        })
    ).catch(error => console.log(error));
}

export const newComment = (comment) => dispatch => {
    Api.newComment(comment).then((comment) =>
        dispatch({
            type: NEW_COMMENT_SUCCESS,
            comment
        })
    ).catch(error => console.log(error));
}

export const editComment = (comment) => dispatch => {
    Api.editComment(comment).then((comment) =>
        dispatch({
            type: EDIT_COMMENT_SUCCESS,
            comment
        })
    ).catch(error => console.log(error));
}

export const deleteComment = (comment, post) => dispatch => {
    Api.deleteComment(comment, post).then((commentInfo) =>
        dispatch({
            type: DELETE_COMMENT_SUCCESS,
            commentInfo
        })
    );
}

export const sortByScore = () => dispatch => {
    dispatch({
        type: SORT_BY_SCORE
    });
}