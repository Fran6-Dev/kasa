import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <div className='mx-8'>
                <Navbar />
                <Background />
                <Card />
            </div>
            <Footer />
        </>
    )
}

export default Home