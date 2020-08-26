import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoDis from './PhotoDis';


export default function NasaPhoto() {
    const [photo, setPhoto] = useState([]);


useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=5WpADO5JTrQSV2VJqheqq90fRbEyfMagbdbWSIgj`)
    .then((res) => {
        console.log('Response: ', res);
        setPhoto(res.data);
    })
    .catch((err) => {
        console.log("An Error has occured: ", err );
    });
}, []);

return(
    <div>
        {photo.map((image) => {
            return ( 
                <PhotoDis
                copy={image.copywright}
                title={image.title}
                about={image.description}
                date={image.date}
                />
            )
        })}
    </div>
)
}