import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import { data } from '../data';



const Housing = () => {


    return (
        <>
            <div className='mx-8'>
                <Navbar />
                <Slider />
            </div>
        </>
    )
}

export default Housing