import * as Api from '../utils/Api';

export const POSTS_FETCHED_SUCCESS = "POSTS_FETCHED_SUCCESS";

export const fetchPosts = () => dispatch => {
    Api.getAllPosts().then(posts =>
      dispatch({
        type: 'POSTS_FETCHED_SUCCESS',
        posts
      })
    );
  };
