import React from "react";
import { connect, styled, decode } from "frontity";
import { Container } from "../../assets/css-in-js/GlobalStyles";
import CardNews from "../card-news";

const home = () => {
  return (
    <>
      <StyledContainer>
        <BlockCards>
          <CardNews></CardNews>
          <CardNews></CardNews>
          <CardNews></CardNews>
          <CardNews></CardNews>
          {/* <CardNews></CardNews> */}
        </BlockCards>
      </StyledContainer>
    </>
  );
};

export default connect(home);

const StyledContainer = styled(Container)`
  padding: 60px 24px;
`;

const BlockCards = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
