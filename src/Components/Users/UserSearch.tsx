import { useState, useContext } from "react"
import GithubContext from "../../Context/github/GitHubContext"
import UserList from "./UserList"

function UserSearch() {

    const [user, setUser] = useState<string>("")
    const { users, getUser, clearUser }: any = useContext(GithubContext)

    const handleChange = (e: any) => {
        setUser(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault()

        if (user === '') {
            alert("Enter a user name")
        }
        else {
            // send to an API
            getUser(user)
            setUser("")
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 '>
            <div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-control '>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                                placeholder='Search'
                                value={user}
                                onChange={(e) => handleChange(e)}
                            />
                            <button
                                type='submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {users.length > 0 &&
                <div>
                    <button
                        className='btn btn-ghost btn-lg' onClick={clearUser}
                    >
                        Clear
                    </button>
                </div>
            }
        </div>
    )
}

export default UserSearch