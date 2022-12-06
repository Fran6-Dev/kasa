import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Description from '../components/Description';
import Infos from '../components/Infos';
import Footer from '../components/Footer';



const Housing = () => {


    return (
        <>
            <div className='mx-8'>
                <Navbar />
                <Slider />
                <Description />
                <Infos />
            </div>
            <Footer />
        </>
    )
}

export default Housing