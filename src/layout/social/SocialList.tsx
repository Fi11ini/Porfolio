import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";


export const SocialList = () => {
    return (
            <StyledSocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"gitHub1"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"twitter"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkIdn"}/>
                    </SocialLink>
                </SocialItem>
            </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
    display: flex;
    gap: 20px;

`
const SocialItem = styled.li`
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`

`


