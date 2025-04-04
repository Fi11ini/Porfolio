import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {TechLogo} from "./TechLogo.tsx";
import {Container} from "../../../components/Container.tsx";

export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription> Technologies I’ve been working with recently</SectionDescription>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"70px 100px"}>
                    <TechLogo iconId={"html"}/>
                    <TechLogo iconId={"css"}/>
                    <TechLogo iconId={"js"}/>
                    <TechLogo iconId={"react"}/>
                    <TechLogo iconId={"redux"}/>
                    <TechLogo iconId={"bootStrap"}/>
                    <TechLogo iconId={"tailwind"}/>
                    <TechLogo iconId={"sass"}/>
                    <TechLogo iconId={"git"}/>
                    <TechLogo iconId={"greenSock"}/>
                    <TechLogo iconId={"vscode"}/>
                    <TechLogo iconId={"gitHub"}/>
                </FlexWrapper>
            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  margin-bottom: 210px;
`


