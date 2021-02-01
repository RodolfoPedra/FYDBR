import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoFydMorcegos from "../assets/svg/Logo_final_morcego.svg";
import Carousel from "./carousel";

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
      <Carousel></Carousel>
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
  width: 25vw;
  max-width: 550px;
  min-width: 260px;
  /* height: 20vh;
  max-height: 20vh;
  min-height: 8vh; */
`;

const DescriptionSite = styled.div`
  width: 816px;
  max-width: 816px;
  height: 70px;

  p {
    color: #000;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
`;

// const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 16px;
// `;

// const Description = styled.h4`
//   margin: 0;
//   color: rgba(255, 255, 255, 0.7);
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
