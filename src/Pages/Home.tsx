import UserList from "../Components/Users/UserList"
import UserSearch from "../Components/Users/UserSearch"

function Home() {
    return (
        <>
            <UserSearch />
            <UserList />
        </>
    )
}

export default Home