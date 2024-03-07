import React, {useState} from 'react'

function NavBar() {
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                    Codetor  <i className='fab fa-typo3'></i>
                </Link>  
            </div>
        </nav>
    </>   
  )
}

export default NavBar