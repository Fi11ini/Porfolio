import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {ProjectLinksBlock} from "./ProjectLinksBlock.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ProjectPropsType = {
    title: string
    text: string
    src: string
    discription: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src}/>
            </ImageWrapper>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectText>{props.text}</ProjectText>
            <ProjectDiscription>{props.discription}</ProjectDiscription>
            <FlexWrapper >
                <ProjectLinksBlock src={'link'} text={"Live Preview"} />
                <ProjectLinksBlock src={'gitLink'} text={"Code Preview"}/>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 375px;
  height: 568px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.projectBG};
  border-radius: 20px;
  overflow: hidden;
`

const ProjectTitle = styled.h2`
  color: ${theme.colors.font};
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  padding: 28px 0 18px;
`

const ProjectText = styled.p`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  text-align: left;
  padding: 0 30px 12px;
`

const ImageWrapper = styled.div`
  width: 375px;
  height: 260px;
  //border-radius: 20px 20px 0 0;
  //overflow: hidden;
`

const Image = styled.img`
  max-width: 100%;
  width: 375px;
  height: 260px;
  object-fit: cover;
`
const ProjectDiscription = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  padding: 0 30px 0;
`




