import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const User = (props) => {
    return (
        <div className="user">
            <p>{props.user.name}</p>
            <p>{props.user.age}</p>
            <p>{props.user.email}</p>
            <button onClick={() => props.deleteUser(props.user.id)}>Delete friend</button>
        </div>
    )
}

export default User