import React from 'react'
import Logo from './img/logo.png'

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
        {/* desktop & tablet */}
        <div className="hidden md:flex w-full h-full">
            <div className="flex items-center gap-2">
                <img src={Logo} className= "w-50 h-50 object-fill" alt="logo"/>
                <p className="text-headingColor text-xl font-bold">City</p>
            </div>
        </div>
        
        
        
        {/* mobile */}
        <div className="flex md:hidden w-full h-full">

        </div>
    </div>
  )
}

export default Header