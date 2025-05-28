import React from 'react'

function UserInfo({ user }) {
  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>IP Address: {user.ipAddress ? user.ipAddress : 'Default'}</p>
      <p>Country: {user.country}</p>
    </div>

  )
}

export default UserInfo
