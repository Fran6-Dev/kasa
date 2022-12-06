import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between mx-10 mt-5 align-items'>
                <Link to="/">
                    <img src="../logo/logo.svg" alt="logo" className='w-20 lg:w-40' />
                </Link>
                <div>
                    <ul className='flex'>
                        <Link to='/'>
                            <button className='text-red-500 mx-6 focus:outline-none focus:underline text-sm lg:text-4xl'>Accueil</button>
                        </Link>
                        <Link to='/about'>
                            <button className='text-red-500 focus:outline-none focus:underline text-sm w-16 lg:text-4xl lg:w-full'> A Propos</button>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar