import { useEffect, useContext } from "react"
import Spiner from "../Layout/assets/Spiner"
import UserItem from "./UserItem"
import GithubContext from "../../Context/github/GitHubContext"


function UserList() {
    const { users, loader, fetchUsers }: any = useContext(GithubContext)

    useEffect(() => {
        fetchUsers()


    }, [])


    if (!loader) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
                {users.map((user: any) => (
                    <UserItem key={user.id} user={user}>
                    </UserItem>
                ))
                }
            </div >
        )
    } else {
        return <Spiner />
    }

}

export default UserList