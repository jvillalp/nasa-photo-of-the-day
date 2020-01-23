import React from "react";

const ImagePage = props => {
    return (
        <div className ='image-of-day'>
            <h2>NASA Photo</h2>
            <img src={props.url} alt={props.explanation}/>
            {console.log("props", props.url)}
        </div>
    );
};
export default ImagePage;