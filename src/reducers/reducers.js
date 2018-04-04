import { UPDATE_LOGIN } from '../actions/token'

let defaultState = {
    token: null,
    islogin: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_LOGIN:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}