import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({})

const GITHUB_UL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY

export const GithubProvider = ({ children }: any) => {
    const intialState = {
        users: [],
        loader: false
    }
    const [state, dispatch] = useReducer(githubReducer, intialState)

    const fetchUsers = async () => {
        setLoader()

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

    const getUser = async (name: string) => {
        const params = new URLSearchParams({
            p: name
        })

        const user = await fetch(`${GITHUB_UL}/search/users?q=${name}`, {
            headers: {
                Authorization: `token${GITHUB_TOKEN}`
            }
        })

        const { items } = await user.json()
        console.log(items)
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const setLoader = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, loader: state.loader, fetchUsers, getUser }}>
            {children}
        </GithubContext.Provider >
    )


}
export default GithubContext



