import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
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
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`

`
