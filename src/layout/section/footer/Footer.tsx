import React from 'react';
import styled from "styled-components";

import {SocialList} from "../../social/SocialList.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SocialFooter>
                    <Icon iconId={"fLogo"}/>
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
                        Designed and built by <Gradient> Andrey Krish </Gradient> with Love & Coffee
                    </TextFooter>
                </BottomFooterMenu>
            </Container>
        </StyledFooter>
    );
};



const StyledFooter = styled.section`
  min-height: 30vh;
  background-color: ${theme.colors.primaryBg};

`

const SocialFooter = styled.div`
  display: flex;
  justify-content: space-between;
  
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: rgb(66, 68, 110);
    opacity: 0.3;
    
    position: absolute;
    bottom: 0;
  }
`

const PhoneNumber = styled.a`
  display: inline-block;
  padding-right: 34px;
`

const Email = styled.a`
  display: inline-block;
  align-items: center;
`

const Contacts = styled.div`
  display: flex;
  align-items: center;
`

const BottomFooterMenu = styled.span`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`

const TextFooter = styled.span`
  display: flex;
  align-items: center;
`

const Gradient = styled.span `
  background: linear-gradient(90deg,
  rgb(167, 167, 167),
  rgb(19, 176, 245) 100%,
  rgb(231, 15, 170) 100%,
  rgb(167, 167, 167),
  rgb(19, 176, 245) 100%,
  rgb(231, 15, 170) 100%,
  rgb(167, 167, 167),
  rgb(19, 176, 245) 100%,
  rgb(231, 15, 170)
  );
  background-clip: text; /* Обрезает фон по тексту */
  -webkit-background-clip: text; /* Для поддержки в WebKit-браузерах */
  color: transparent; /* Делаем цвет текста прозрачным */
  font-weight: bold;
   /* Можно добавить жирный шрифт, если нужно */
`