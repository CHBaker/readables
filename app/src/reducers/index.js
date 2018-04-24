import { combineReducers } from 'redux';

const initialAppState = {
    nothing: null
}

function app(state = initialAppState, action) {
    return state;
}

export default combineReducers({
    app
})
