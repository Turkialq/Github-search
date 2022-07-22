import { useState, createContext } from "react";

const GithubContext = createContext({})

const GITHUB_UL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_KEY

export const GithubProvider = ({ children }: any) => {
    const [users, setUsers] = useState<any[]>([])
    const [loader, setLoader] = useState(true)

    const fetchUsers = async () => {

        const response = await fetch(`${GITHUB_UL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        setUsers(data)
        setLoader(false)
    }

    return (
        <GithubContext.Provider value={{ users, loader, fetchUsers }}>
            {children}
        </GithubContext.Provider >
    )


}

export default GithubContext



