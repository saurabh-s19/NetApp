import React from 'react'
import myImage from "../Images/logo.png"

const Header = props => {
  return (
    <div className='HeaderDiv'>
        <img className='img-container' src={myImage} alt="Logo"   />
    </div>
  )
}



export default Header