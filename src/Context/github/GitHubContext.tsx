import { useReducer, createContext, ReactNode } from "react";
import { Navigate } from "react-router-dom"
import githubReducer from "./GithubReducer";

type GithubProviderProps = {
    children: ReactNode
}

type GithubContextProps = {
    users: []
    user: {}
    repos: []
    loader: boolean
    getUser: (name: string) => void
    getUsers: (name: string) => void
    getRepos: (name: string) => void
    clearUser: () => void
}
const GithubContext = createContext({} as GithubContextProps)


const GITHUB_UL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY

export const GithubProvider = ({ children }: GithubProviderProps) => {

    const intialState = {
        users: [],
        user: {},
        repos: [],
        loader: false
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)


    const getUsers = async (name: string) => {
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
    const getRepos = async (name: string) => {
        const params = new URLSearchParams({
            sort: "created",
            per_page: "10",

        })

        const repos = await fetch(`${GITHUB_UL}/users/${name}/repos?${params}`, {
            headers: {
                Authorization: `token${GITHUB_TOKEN}`
            }
        })

        const data = await repos.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data
        })

    }

    const getUser = async (name: string) => {
        const user = await fetch(`${GITHUB_UL}/users/${name}`, {
            headers: {
                Authorization: `token${GITHUB_TOKEN}`
            }
        })
        if (user.status === 404) {

            <Navigate to="/notfound" />
        } else {

            const data = await user.json()
            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }

    }

    const clearUser = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    return (
        <GithubContext.Provider value={{ users: state.users, getRepos, repos: state.repos, user: state.user, loader: state.loader, getUsers, clearUser, getUser }}>
            {children}
        </GithubContext.Provider >
    )


}
export default GithubContext



