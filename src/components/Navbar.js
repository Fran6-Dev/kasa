import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between mx-10 mt-5 align-items'>
                <img src="../logo/logo.svg" alt="logo" className='w-20 lg:w-40' />
                <div>
                    <ul className='flex'>
                        <li className='text-red-500 mx-6 hover:underline lg:text-4xl'>Accueil</li>
                        <li className='text-red-500 hover:underline lg:text-4xl'> A Propos</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar