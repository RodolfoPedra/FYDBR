import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

// const [dstate, setDstate] = React.useState(null);

// React.useEffect(() => {
//   console.log("state nav: ", dstate);
// }, [dstate]);

const Nav = ({ state }) => (
  <DivExtContainer>
    <DivContainer>
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
    </DivContainer>
  </DivExtContainer>
);

export default connect(Nav);

const DivExtContainer = styled.div`
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
`;

const DivContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  /* max-width: 1598px; */
  height: 68px;
  box-sizing: border-box;
  cursor: pointer !important;
  /* padding: 0 24px; */
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
    width: 60%;
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
