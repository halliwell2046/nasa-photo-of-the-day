import React from 'react';

const PhotoDis = (props) => {
    return (
        <div>
            <p>&copy; {props.copyright}</p>
            <p>Date: {props.date}</p>
            <p>About: {props.explanation}</p>
            <p>Title: {props.title}</p>
        </div>
    );
};

export default PhotoDis;