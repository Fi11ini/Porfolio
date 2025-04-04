import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ProjectLinksType = {
    src: string
    text: string
}


export const ProjectLinksBlock = (props: ProjectLinksType) => {
    return (
        <LinkBlock>
            <IconWrapper>
                <Icon width="20" height="20" viewBox="0 0 20 20" iconId={props.src}/>
            </IconWrapper>
            <Link href="">{props.text}</Link>
        </LinkBlock>

    );
};

const LinkBlock = styled.div`
  padding: 28px 48px 22px 28px;
  display: flex;
  align-items: center; 

  & + div {
    padding-left: 0;
  }
`;

const Link = styled.a`
  padding-left: 12px;
  width: 96px;
  height: 26px;
  white-space: nowrap;
`
const IconWrapper = styled.div`
  
`