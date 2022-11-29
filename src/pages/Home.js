import React from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <div className='mx-8'>
                <Navbar />
                <Background />
                <Card />
            </div>
        </>
    )
}

export default Home