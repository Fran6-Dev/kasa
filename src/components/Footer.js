import React from 'react'

const Footer = () => {

    let date = new Date().getFullYear();

    return (
        <>
            <div className='bg-black '>
                <div className='flex justify-center py-6'>
                    <img src="../logo/logo-white.svg" alt="logo" />
                </div>
                <p className='text-white flex justify-center pb-4'>© {date} Kasa. All rights reserved</p>
            </div>
        </>
    )
}

export default Footer