import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";

import {SocialList} from "../../social/SocialList.tsx";

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