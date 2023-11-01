import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {id} = useParams()
  return (
    <div className='p-4 bg-black text-white text-center text-3xl'>
      User : {id}
    </div>
  )
}

export default User
