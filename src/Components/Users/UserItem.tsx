import { Link } from "react-router-dom"


function UserItem({ user: { login, avatar_url } }: any) {
    return (
        <div className="card shadow-md compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div className="">
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img src={avatar_url} alt="profile picture" />
                        </div>
                    </div>

                </div>
                <div className="">
                    <h2 className="card-title">{login}</h2>
                    <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>
                        visit profile
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default UserItem