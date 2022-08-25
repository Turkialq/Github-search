import RepoItem from "./RepoItem"
function RepoList({ repos }: any) {
    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    Repos
                </h2>
                {repos.map((repo: any) => (
                    <RepoItem key={repo.id} name={repo.name} />
                ))}
            </div>
        </div>
    )
}

export default RepoList