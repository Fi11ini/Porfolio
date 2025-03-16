import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";

export const TechStack = () => {
    return (
        <StyledTechStack>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription> Technologies I’ve been working with recently</SectionDescription>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

            </FlexWrapper>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section `
  background-color: aqua;
`


