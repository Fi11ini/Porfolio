import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Project} from "./project/Project.tsx";
import projectImg1 from "../../../assets/images/proj-1.webp"
import projectImg2 from "../../../assets/images/proj-2.webp"
import projectImg3 from "../../../assets/images/proj-3.webp"
import projectImg4 from "../../../assets/images/proj-4.webp"
import projectImg5 from "../../../assets/images/proj-5.webp"
import projectImg6 from "../../../assets/images/proj-6.webp"

export const Projects = () => {
    return (
        <StyledProject>
            <SectionTitle>Projects</SectionTitle>
            <SectionDescription>Things I’ve built so far</SectionDescription>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Project title={"ProjectPropsType"}
                         src={projectImg1}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"ProjectPropsType"}
                         src={projectImg2}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"ProjectPropsType"}
                         src={projectImg3}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"ProjectPropsType"}
                         src={projectImg4}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"ProjectPropsType"}
                         src={projectImg5}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"ProjectPropsType"}
                         src={projectImg6}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div `
  background-color: #dfc9e5;
`

