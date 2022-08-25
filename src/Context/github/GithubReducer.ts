const githubReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loader: false
            }
        case 'GET_REPOS':
            return {
                ...state,
                repos: action.payload,
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_LOADER':
            return {
                ...state,
                loader: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []

            }
        default:
            return state
    }


}

export default githubReducer