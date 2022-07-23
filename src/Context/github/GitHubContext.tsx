import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({})

const GITHUB_UL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY

export const GithubProvider = ({ children }: any) => {
    const intialState = {
        users: [],
        loader: true
    }
    const [state, dispatch] = useReducer(githubReducer, intialState)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_UL}/users`, {
            headers: {
                Authorization: `token${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, loader: state.loader, fetchUsers }}>
            {children}
        </GithubContext.Provider >
    )


}
export default GithubContext



