import { useContext } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const Users = ({users}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { token } = useContext(AuthContext);
    const searchTerm = searchParams.get('name') || '';

    const handleSearch = (event) => {
        const userName = event.target.value;

        if (userName) {
            setSearchParams({ name: userName });
        } else {
            setSearchParams({});
        }
    };

    console.log('re-render');

    return (
        <>
            <h2>Users (Protected)</h2>
            <div>Authenticated as {token}</div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder='type a user name'
            />
            <ul>
                {users
                    .filter((user) =>
                        user.fullName
                            .toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                    )
                    .map((user) => (
                        <li key={user.id}>
                            <Link to={user.id}>
                                {user.fullName}
                            </Link>
                        </li>
                    ))}
            </ul>
            <Outlet />
        </>
    );
};
//* Outlet is where we want to render Child routes (e.g. component <User /> on route: users/userId)
export default Users;