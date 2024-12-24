import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import bell from '../../assets/bell.svg'
import profile from '../../assets/profile.svg'
import arrow from '../../assets/arrow.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="logo" width={100} height={100} />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse By Language</li>
        </ul>
        </div>
      <div className='navbar-right'>
        <img src={search} alt="bar"/>
        <p>Chrildren </p>
        <img src={bell} className ='bell'/>
        <div className="navbar-profile">
        <img src={profile} className ='profile' width={100} height={100}/>
        <img src={arrow} className ='arrow' width={20} height={20}/>
        <div className="dropdown">
          <p>sign in and sign out by Christian Arena</p>
        </div>


        </div>
        
        
    
        
      </div>

      </div>
      
  )
}

export default Navbar
