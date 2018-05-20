import * as Api from '../utils/Api';

export const POSTS_FETCHED_SUCCESS = "POSTS_FETCHED_SUCCESS";
export const NEW_POST_SUCCESS = "NEW_POST_SUCCESS";

export const fetchPosts = () => dispatch => {
    Api.getAllPosts().then(posts =>
        dispatch({
            type: 'POSTS_FETCHED_SUCCESS',
            posts
        })
    ).catch((error) => console.log(error));
};

export const newPost = () => dispatch => {
    Api.newPost().then(post =>
        dispatch({
            type: 'NEW_POST_SUCCESS',
            post
        })
    ).catch((error) => console.log(error));
};
