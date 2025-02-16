import React from 'react'

const UserCard = (props) => {
  // console.log(props)
  return (
    <div>
      <img  className='user-image'/>
      <h3>Name: {props.data.name.first}</h3>
      <p>Phone No: {props.data.phone}</p>
      <p>{props.data.location.city},{props.data.location.state}</p>
    </div>
  )
}

export default UserCard;