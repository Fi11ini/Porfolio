import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const SocialList = () => {
    return (
            <StyledSocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 15px 15px"} iconId={"linkIdn"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 15px 15px"} iconId={"twitter"}/>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height={"30px"} width={"30px"} viewBox={"0 0 15px 15px"} iconId={"linkIdn"}/>
                    </SocialLink>
                </SocialItem>
            </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
    display: flex;

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`


