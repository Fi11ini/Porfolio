import React  from 'react';
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import { SocialList} from "../social/SocialList.tsx";
import {Logo} from "../../components/logo/Logo.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <SocialList/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: aquamarine;
  display: flex;
  justify-content: space-between;
`


