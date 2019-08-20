import React from 'react'

const User = ({user}) => {
    return (
        <div className="user">
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User