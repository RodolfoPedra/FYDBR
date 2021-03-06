import React from "react";
import { connect, css, styled } from "frontity";
import { Container } from "../assets/css-in-js/GlobalStyles";
import Warner from "../assets/svg/parceiros/warner.svg";
import Frank from "../assets/svg/parceiros/frank.svg";
import Rocknbold from "../assets/svg/parceiros/rocknbold.svg";
import Diario from "../assets/svg/parceiros/diario.svg";
import MorcegoG from "../assets/svg/morcego_g.svg";
import MorcegoP from "../assets/svg/morcego_p.svg";

const Partners = () => {
  return (
    <>
      <StyledContainer>
        <Parceiros>Parceiros</Parceiros>
        <ImgPartiner key="1" src={Warner} />
        <ImgPartiner key="2" src={Frank} />
        <ImgPartiner key="3" src={Rocknbold} />
        <ImgPartiner key="4" src={Diario} />
        <ImgMorcegos>
          <ImgPartiner key="1" src={MorcegoP} />
          <ImgPartiner key="2" src={MorcegoG} />
        </ImgMorcegos>
      </StyledContainer>
    </>
  );
};

export default connect(Partners);

const StyledContainer = styled(Container)`
  position: relative;
  margin: 40px 0;
`;

const Parceiros = styled.h1`
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: DINProCondBold;
  font-size: 35px;
`;

const ImgPartiner = styled.img`
  flex-wrap: wrap;
  width: 200px;
`;

const ImgMorcegos = styled.div`
  img::first-child {
    width: 90px;
  }

  img::last-child {
    width: 207px;
    margin: 20px;
  }
`;
