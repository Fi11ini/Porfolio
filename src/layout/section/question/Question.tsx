import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";



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
  background-color: #5f5f72;
`

const Mail = styled.span `
  background-color: aqua;
`
