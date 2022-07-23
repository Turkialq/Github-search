const githubReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loader: false
            }
        default:
            return state
    }


}

export default githubReducer