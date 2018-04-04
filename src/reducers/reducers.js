import { UPDATE_LOGIN } from '../actions/token'

let defaultState = {
    token: null,
    islogin: false
};

export default (state = defaultState, action) => {
    let newStates = {
        token: action.token,
        isLogin: true
    }
    switch (action.type) {
        case UPDATE_LOGIN:
            return Object.assign({}, state, newStates)
        default:
            return state
    }
}