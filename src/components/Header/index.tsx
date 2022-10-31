import React from 'react'

function Header() {
  return (
    <nav className='nav container '>
        <div className='brand-holder flex justify-between items-center'>
            <h1 className='text-primary text-5xl font-bold py-3'>A</h1>
            <button className='bg-primary'> Hire Me</button>
        </div>
    </nav>
  )
}

export default Header