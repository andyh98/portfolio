import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineAudit , AiFillLinkedin } from 'react-icons/ai';
import { DiTerminal  } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:"flex", alignItems:"center", color:'white'}}>
          <DiTerminal  size="3rem" /> <Span>Andy Hameed</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/andyh98">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/andyhameed/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://drive.google.com/file/d/1WBQGVJFu3Q4aRzt7pIjoV_G_d-E5GSZV/view?usp=sharing">
        <AiOutlineAudit  size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
