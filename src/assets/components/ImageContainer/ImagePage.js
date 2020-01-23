import React from "react";
import {Button} from "reactstrap";
import Header from "./Header";
import styled from "styled-components";

const NasaImg = styled.img`
  width: 50%;
  height: 50%;
  object-fit: scale;
  flex-shrink: 2;
  border-radius: 10%;
`;

const ImagePage = props => {
    return (
        <div>
            <Header />
            <NasaImg src={props.url} alt={props.explanation}/>
                <blockquote class="blockquote text-center">
                    <p class="mb-0">{props.explanation}</p>
                    <footer class="blockquote-footer">{props.copyright} | <cite title="Source Title">NASA</cite></footer>
                </blockquote>
            {console.log("props", props.url)}
            <Button color="danger"> Learn More</Button>
        </div>
    );
};
export default ImagePage;