import React from 'react'

const UserProfile = ({params}: any) => {
  return (
    <div>
      <h1>
        User Profile {params.id}
      </h1>
    </div>
  )
}

export default UserProfile
