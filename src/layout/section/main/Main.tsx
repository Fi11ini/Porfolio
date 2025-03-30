import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <MainText>
                        Hi 👋, <br/>
                        My name is <br/>
                        <Name>Andrey Krish</Name> <br/>
                        I build things for web
                    </MainText>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const MainText = styled.h1`
  text-align: left;
  font-family: 'DM', sans-serif;
  font-size: 58px;
  font-weight: 700;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, #13b0f5 0%, #e70faa 100%);
    border-radius: 50%;
    z-index: 0;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  align-items: center;
`
const Name = styled.h2`
  background: linear-gradient(90deg, #13b0f5 0%, #e70faa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'DM', sans-serif;
  font-size: 58px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
`

