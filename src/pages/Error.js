import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='my-5'>
                    <p className='text-red-500 text-9xl flex justify-center'>404</p>
                </div>
                <div className='my-5'>
                    <p className='text-red-500 flex justify-center'>Oups ! La page que vous demandez n'hesite pas</p>

                </div>
                <div className='my-5'>
                    <Link to='/'>
                        <p className='text-red-500 underline flex justify-center'>Retourner sur la page d'accueil</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Error