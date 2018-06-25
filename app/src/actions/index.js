import * as Api from '../utils/Api';

export const POSTS_FETCHED_SUCCESS = 'POSTS_FETCHED_SUCCESS';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';

export const fetchPosts = () => dispatch => {
    Api.getAllPosts().then(posts =>
        dispatch({
            type: 'POSTS_FETCHED_SUCCESS',
            posts
        })
    ).catch(error => console.log(error));
};

export const newPost = (post) => dispatch => {
    Api.newPost(post).then(post =>
        dispatch({
            type: 'NEW_POST_SUCCESS',
            post
        })
    ).catch(error => console.log(error));
};

export const deletePost = (post) => dispatch => {
    Api.deletePost(post).then(post =>
        dispatch({
            type: 'DELETE_POST_SUCCESS',
            post
        })
    ).catch(error => console.log(error));
}

export const editPost = (post) => dispatch => {
    Api.editPost(post).then(post =>
        dispatch({
            type: 'EDIT_POST_SUCCESS',
            post
        })
    ).catch(error => console.log(error));
}
