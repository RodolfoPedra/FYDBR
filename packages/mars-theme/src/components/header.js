import React from "react";
import { connect, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logoFydMorcegos from "../assets/svg/Logo_final_morcego.svg";

const Header = ({ state }) => {
  return (
    <>
      <Nav />
      <StyledContainer maxWidth="lg">
        <Grid container alignItems="center" justify="space-between">
          <Grid item xs={12} md={3} md={4}>
            <LogoFYD src={logoFydMorcegos}></LogoFYD>
          </Grid>
          <Grid item xs={12} md={9} lg={8}>
            <DescriptionSite>
              <p>
                Sua fonte oficial de notícias do My Chemical Romance no Brasil
                reconhecida pela Warner Music BR.
                <br />
                Nos acompanhe nas redes sociais e fique ligado nas novidades da
                banda.
              </p>
            </DescriptionSite>
          </Grid>
        </Grid>
        <MobileMenu />
      </StyledContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledContainer = styled(Container)`
  box-sizing: border-box;
  margin-top: 68px;
  padding: 24px 0;
  color: #000;
`;

const LogoFYD = styled.img`
  width: 100%;
  max-width: 550px;
`;

const DescriptionSite = styled.div`
  p {
    font-family: DINProCondMedium;
    color: #000;
    font-size: 31px;
    line-height: 36px;
  }
`;
