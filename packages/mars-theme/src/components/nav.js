import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state }) => (
  <DivExtContainer>
    <StyledContainer maxWidth="lg">
      <NavContainer>
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;
          return (
            <NavItem key={name}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <Link
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {name}
              </Link>
            </NavItem>
          );
        })}
      </NavContainer>
      <LinksSocial>
        <IoLogoTwitter></IoLogoTwitter>
      </LinksSocial>
      <LookLoad>
        <p>Look and Load</p>
        <input type="text" />
      </LookLoad>
    </StyledContainer>
  </DivExtContainer>
);

export default connect(Nav);

const DivExtContainer = styled.div`
  width: 100%;
  background: #000;
  position: fixed;
  z-index: 10;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  height: 68px;
  box-sizing: border-box;
  cursor: pointer !important;
  margin: 0;
  overflow-x: auto;
`;

const LinksSocial = styled.div`
  width: 64px;
  height: 24px;
  background: #fff;

  IoLogoTwitter {
    width: 36px;
    height: 36px;
  }
`;

const LookLoad = styled.div`
  width: 369px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    background: #fff;
    width: 200px;
    height: 34px;
    border-radius: 19px;
    outline: none;
    padding: 0 0.7rem;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color: #c10000;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
