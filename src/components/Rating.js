import React from 'react';
import { data } from '../data'
import { useParams } from 'react-router-dom'

function StarRating({ count, value,
    inactiveColor = '#ddd',
    size = 14,
    activeColor = '#FF6060', }) {

    // short trick 
    const stars = Array.from({ length: count }, () => '★')

    // Internal handle change function


    return (
        <div>
            {stars.map((s, index) => {
                let style = inactiveColor;
                if (index < value) {
                    style = activeColor;
                }
                return (
                    <span className="text-red-500 text-2xl"
                        key={index}
                    >{s}</span>
                )
            })}
        </div>
    )
}


const Rating = () => {
    const { id } = useParams();
    let detailsLogement = data.find((logement) => (logement.id === id));

    if (detailsLogement !== undefined) {

        let rating = detailsLogement.rating;


        return (
            <div>

                <StarRating
                    count={5}
                    size={40}
                    value={rating}
                    activeColor={'red'}
                    inactiveColor={'#ddd'}
                />
            </div>
        )
    }
}

export default Rating 