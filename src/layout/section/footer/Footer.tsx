import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";

import {SocialList} from "../../social/SocialList.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialFooter>
                <Logo/>
                <Contacts>
                    <PhoneNumber href={"#"}>
                        +375333861697
                    </PhoneNumber>
                    <Email href={"#"}>
                        andreymdm@gmail.com
                    </Email>
                </Contacts>
                <SocialList/>
            </SocialFooter>
            <BottomFooterMenu>
                <Menu/>
                <TextFooter>
                    Designed and built by Pavan MG with Love & Coffee
                </TextFooter>
            </BottomFooterMenu>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  min-height: 30vh;
  background-color: #f1d4cc;

`

const SocialFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const PhoneNumber = styled.a`
  display: inline-block;
  padding-right: 10px;
`

const Email = styled.a`
  display: inline-block;
`

const Contacts = styled.div`

`

const BottomFooterMenu = styled.span `
  display: flex;
  justify-content: space-between;
`

const TextFooter = styled.span `
  display: flex;
  align-items: center;
`