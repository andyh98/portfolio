import React from 'react';
import { AiFillGithub, AiOutlineAudit, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:647-927-6093">647-927-6093</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:andyhameed@outlook.com">andyhameed@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Enjoying the journey</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/andyh98">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/andyhameed/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1WGpmibtmjWe1j8478D-guJ2exs5sQRBi/view?usp=sharing">
        <AiOutlineAudit  size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
