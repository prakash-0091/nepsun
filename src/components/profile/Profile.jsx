import React from 'react'
import {

    Link
} from 'react-router-dom';

// import {use}

const Profile = () => {
  return (
    <div className='profile'>
        <Link to='/'>Home</Link>
        <h1>
          Profile
        </h1>
    </div>
  )
}

export default Profile