import React from 'react'
import { useParams, Link } from 'react-router-dom'

const User = ({onRemoveUser}) => {
    const { userId } = useParams();
    return (
        <>
        <span>User {userId}</span>
        <button onClick={() => onRemoveUser(userId)}>Remove User</button>
        <br />
        <Link to="/users">Back to Users</Link>
        </>
    )
}

export default User;