import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardImg, CardBody, CardSubtitle, CardText, Col } from 'reactstrap';
import axios from 'axios';



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

    if (!photo) return (
        <Col>
            <Card >
            <CardTitle>{photo.date}</CardTitle>
            <CardSubtitle>{photo.title}</CardSubtitle>
            <iframe src={photo.hdurl} alt={photo.title}/>
            <CardSubtitle>{photo.title} &copy;{photo.copyright}</CardSubtitle>
            <CardText>{photo.explanation}</CardText>
            </Card>
        </Col>
    ) 

    return (
      <Col>
        <Card >
          <CardTitle >{photo.date}</CardTitle>
          <CardImg src={photo.hdurl} alt={photo.title}/>
         <CardBody>
          <CardSubtitle>{photo.title} &copy;{photo.copyright}</CardSubtitle>
          <CardText>{photo.explanation}</CardText>
         </CardBody>
        </Card>
      </Col>
    );
}
