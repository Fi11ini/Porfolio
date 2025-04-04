import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {c} from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P";
import {theme} from "../../../styles/Theme.tsx";



export const Question = () => {
    return (
        <StyledQuestion>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <Mail>andreymdm@gmail.com</Mail>
        </StyledQuestion>
    );
};


const StyledQuestion = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${theme.colors.primaryBg};
  padding-bottom: 210px;
  
  ${SectionTitle} {
    font-family: 'DM Sans', sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    padding-bottom: 9px;
  }
`

const Mail = styled.span `
  background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
  -webkit-background-clip:
          text;
  -webkit-text-fill-color:
          transparent;
  background-clip:
          text;
  text-fill-color:
          transparent;
  font-family: 'DM Sans',sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: center;
`




