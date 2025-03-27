import React  from 'react';
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import { SocialList} from "../social/SocialList.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
               <FlexWrapper justify={"space-between"} align={"center"}>
                   <Logo/>
                   <Menu/>
                   <SocialList/>
               </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: #afd0c5;
`


