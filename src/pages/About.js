import React from 'react'
import Footer from '../components/Footer'
import IsAbout from '../components/IsAbout'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <>
            <div className='mx-8'>
                <Navbar />
                <IsAbout />
            </div>
            <Footer />


        </>
    )
}

export default About