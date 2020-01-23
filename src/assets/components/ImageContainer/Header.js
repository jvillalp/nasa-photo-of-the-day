import React from "react";
import styled from "styled-components";

const Title = styled.h1`
color: #0066b2;
font-family: "Croissant One", serif;
`;
const SubTitle = styled.h3`
font-family: 'Varela Round', sans-serif;
`;


const Header= props => {
    return (
        <div>

            <Title>
            <h2 class="display-4">NASA</h2>
            </Title>
            <SubTitle>
            <h3 class="display-5">Photo of the Day</h3>
            </SubTitle>
        </div>
    );
};
export default Header;