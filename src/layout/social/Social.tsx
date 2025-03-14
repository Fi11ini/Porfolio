import React from 'react';
import styled from "styled-components";

export const Social = () => {
    return (
        <StyledSocial>
                <li>
                    <a href="">one</a>
                </li>
                <li>
                    <a href="">two</a>
                </li>
                <li>
                    <a href="">three</a>
                </li>
        </StyledSocial>
    );
};

const StyledSocial = styled.ul `
 display: flex;
  gap: 20px;
`




