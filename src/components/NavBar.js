import React, { useState } from "react";
import { SettingsIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Nav>
        <Textlogo>
          <Span>Najam</Span>
          Typing
        </Textlogo>
        <MenuIcon onClick={handleMenuToggle}>
          <SettingsIcon />
          {isMenuOpen && (
            <DropDown>
              <DropDownItem>High Score</DropDownItem>
              <DropDownItem>Settings</DropDownItem>
            </DropDown>
          )}
        </MenuIcon>
      </Nav>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #d5cdcd;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   padding: 0 2rem;

  color: #d5cdcd;
  height: 4rem;
`;

const Textlogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;

  color: #fff;
  width: 10rem;
  border-radius: 0.5rem;
  //   border-bottom: 1px solid #d5cdcd;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const DropDownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #d5cdcd;
  &:hover {
    background: #1a1d24;
  }
`;

const Span = styled.span`
  color: #61dafb;
`;
