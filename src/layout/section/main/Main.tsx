import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";



export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={""}>
                <h1>
                    Hi 👋,
                    My name is
                    <Name>Andrey Krish</Name>
                    I build things for web
                </h1>
                <Photo src={photo} alt=""/>

            </FlexWrapper>
        </StyledMain>
    );
};

 const Photo = styled.img `
   width: 350px;
   height: 350px;
   object-fit: cover;
 `

const StyledMain = styled.div `
  
`
const Name = styled.h2 `
  color: aqua;
`