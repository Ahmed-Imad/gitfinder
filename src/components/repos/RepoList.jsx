import PropTypes from 'prop-types'

function RepoList({ repos }) {
    return (
        <div className='rounded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h2 className="my-4 text-3xl font-bold card-title">
                    Top Repositories
                </h2>
                {repos.map(() => (
                    <h3>{repos.name }</h3>
                ))}
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default RepoList
