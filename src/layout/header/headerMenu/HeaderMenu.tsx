import React from 'react';
import styled from "styled-components";

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <ListItem>
                    <Link href="">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="">About</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Tech Stack</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Projects</Link>
                </ListItem>
                <ListItem>
                    <Link href="">Contact</Link>
                </ListItem>
            </ul>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const ListItem = styled.li`

`

// const Link = styled.a`
//   color: rgb(167, 167, 167);
//   font-family: 'DM Sans', sans-serif;
//   font-size: 20px;
//   font-weight: 500;
//   text-align: center;
//
// `


const Link = styled.a`
    display: inline-block;
    padding: 10px 20px;
    color: rgb(167, 167, 167);
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        color: #fff;
        background: linear-gradient(90deg, #13b0f5 0%, #e70faa 100%);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
`;