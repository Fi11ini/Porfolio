import React  from 'react';
import styled from "styled-components";
import { SocialList} from "../social/SocialList.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
               <FlexWrapper justify={"space-between"} align={"center"}>
                   <Logo/>
                   <HeaderMenu/>
                   <SocialList/>
               </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`


