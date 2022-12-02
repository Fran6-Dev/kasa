import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { data } from '../data';
import "./slider.css";


const Slider = () => {

    const { id } = useParams();
    let detailsLogement = data.find((logement) => (logement.id === id));

    if (detailsLogement !== undefined) {

        let imageSlider = detailsLogement.pictures;

        console.log(imageSlider)

        return (
            <>
                <Carousel className='my-10'>
                    {imageSlider.map((image) => <img src={image} alt={image} key={image} className='slider-image' />)}

                </Carousel>
            </>
        )
    }

}


export default Slider
