import React from 'react';
import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

type TechLogoProps = {
    iconId: string

}

export const TechLogo = (props: TechLogoProps) => {
    return (
        <StyledTechLogo>
            <Icon iconId={props.iconId}/>
        </StyledTechLogo>
    );
};

const StyledTechLogo = styled.div `
  width: 16%;
  display: flex;
  justify-content: center;
`

