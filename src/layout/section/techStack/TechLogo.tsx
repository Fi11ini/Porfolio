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
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
`

