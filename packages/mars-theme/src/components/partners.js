import React from "react";
import { connect, css, styled } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Warner from "../assets/svg/parceiros/warner.svg";
import Frank from "../assets/svg/parceiros/frank.svg";
import Rocknbold from "../assets/svg/parceiros/rocknbold.svg";
import Diario from "../assets/svg/parceiros/diario.svg";
import MorcegoG from "../assets/svg/morcego_g.svg";
import MorcegoP from "../assets/svg/morcego_p.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Partners = () => {
  const classes = useStyles();
  return (
    <>
      <StyledContainer maxWidth="lg">
        <Parceiros>Parceiros</Parceiros>
        <Grid container>
          <ContainerParcerio item xs={6} md={6} lg={3}>
            <ImgPartiner key="1" src={Warner} />
          </ContainerParcerio>
          <ContainerParcerio item xs={6} md={6} lg={2}>
            <ImgPartiner key="2" src={Frank} />
          </ContainerParcerio>
          <ContainerParcerio item xs={6} md={6} lg={3}>
            <ImgPartiner key="3" src={Rocknbold} />
          </ContainerParcerio>
          <ContainerParcerio item xs={6} md={6} lg={3}>
            <ImgPartiner key="4" src={Diario} />
          </ContainerParcerio>
          <GridMorcegos item xs={12} md={12} lg={1}>
            <ImgMorcegos>
              <ImgPartiner key="1" src={MorcegoP} />
              <ImgPartiner key="2" src={MorcegoG} />
            </ImgMorcegos>
          </GridMorcegos>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default connect(Partners);

const StyledContainer = styled(Container)`
  position: relative;
  padding: 60px 0 40px 0;
`;

const ContainerParcerio = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 521px) and (max-width: 1260px) {
    justify-content: center;
  }
`;

const Parceiros = styled.h1`
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: DINProCondBold;
  font-size: 35px;
  text-transform: uppercase;
`;

const ImgPartiner = styled.img`
  @media (max-width: 520px) {
    width: 150px;
  }

  @media (min-width: 521px) {
    width: 230px;
  }
`;

const GridMorcegos = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgMorcegos = styled.div`
  display: flex;
  flex-direction: column;
  img:first-child {
    width: 90px;
    height: 70px;
  }

  img:last-child {
    width: 221px;
    margin: 20px;
  }
`;
