import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoFydMorcegos from "../assets/svg/Logo_final_morcego.svg";

const Header = ({ state }) => {
  return (
    <>
      <Nav />
      <Container>
        <MobileMenu />
        <LogoFYD src={logoFydMorcegos}></LogoFYD>
        <DescriptionSite>
          <p>
            Sua fonte oficial de notícias do My Chemical Romance no Brasil
            reconhecida pela Warner Music BR.
            <br />
            Nos acompanhe nas redes sociais e fique ligado nas novidades da
            banda.
          </p>
        </DescriptionSite>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 90%;
  box-sizing: border-box;
  padding: 24px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoFYD = styled.img`
  width: 28.75vw;
  max-width: 552px;
  min-width: 260px;
`;

const DescriptionSite = styled.div`
  width: 987px;
  max-width: 987px;

  p {
    font-family: DINProCondMedium;
    color: #000;
    font-size: 31px;
    line-height: 36px;
  }
`;
