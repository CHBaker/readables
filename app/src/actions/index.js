import * as Api from '../utils/Api';

export const POSTS_FETCHED_SUCCESS = "POSTS_FETCHED_SUCCESS";

const postsFetchedSuccess = (posts) => ({
    type: 'POSTS_FETCHED_SUCCESS',
    posts
});
