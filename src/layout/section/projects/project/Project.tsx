import React from 'react';
import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectText>{props.text}</ProjectText>
        </StyledProject>
    );
};

const StyledProject = styled.div `
  background-color: #a670d7;
  max-width: 33%;
`

const ProjectTitle = styled.h2 `

`

const ProjectText = styled.p `

`

const Image = styled.img `
  max-width: 100%;
  width: 375px;
  height: 260px;
  object-fit: cover;
`



