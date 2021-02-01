import React from "react";
import { connect, styled } from "frontity";
import { Container } from "../assets/css-in-js/GlobalStyles";

const cardnews = () => {
  return (
    <>
      <ExtContainer>
        <ContainerCard>
          <TumbCard></TumbCard>
          <TypeCard>Matérias</TypeCard>
          <TittleNews>
            especial influências musicais #4 Gerard way e a equação criativa De
            quadrinhos x música que criaram O frontman de mil faces
          </TittleNews>
          <DateNews>Novembro 5, 2020</DateNews>
        </ContainerCard>
      </ExtContainer>
    </>
  );
};

export default connect(cardnews);

const ExtContainer = styled.div`
  width: 90%;
  box-sizing: border-box;
  /* padding-right: 27px; */
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCard = styled.div`
  width: 270px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TumbCard = styled.img`
  width: 100%;
  height: 171px;
  background: #dbdbdb;
`;

const TypeCard = styled.span`
  height: 20px;
  background: #c10000;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 3px 8px 2px 8px;
  margin-top: 2px;
`;

const TittleNews = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  text-align: inherit;
  font-weight: bold;
  text-transform: uppercase;
`;

const DateNews = styled.span`
  font-size: 16px;
  color: #aaaaaa;
`;
