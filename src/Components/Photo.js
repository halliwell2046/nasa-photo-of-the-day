import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoDis from './PhotoDis';


export default function NasaPhoto() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=5WpADO5JTrQSV2VJqheqq90fRbEyfMagbdbWSIgj`)
        .then((res) => {
            console.log('Res: ', res);
            setPhoto(res.data);
        })
        .catch((err) => {
            console.log('An error occurred: ', err);
        });
    }, []);

    return (
      <div>
          <img src={photo.hdurl} />
      </div>
    );
}