import { combineReducers } from 'redux';

const initialAppState = {
    user : null,
    posts: []
}

function app(state = initialAppState, action) {
    return state;
}

// function posts (state = initialCalendarState, action)  {

//     switch (action.type) {
//         case GET_ALL_POSTS:
//             return {
//                 ...state,
//                 posts: posts
//                 }
//         default:
//             return state
//     }
// }

export default combineReducers({
    app
})
