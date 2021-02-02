import React from "react";
import { connect, styled } from "frontity";
import { Container } from "../../assets/css-in-js/GlobalStyles";
import CardNews from "../card-news";
import Pagination from "../list/pagination";

const home = ({ state, libraries }) => {
  console.log("home state: ", state);

  const data = state.source.get(state.router.link);

  console.log("home data: ", data);
  return (
    <>
      <StyledContainer>
        <BlockCards>
          {/* {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <CardNews key={item.id} item={item} />;
          })} */}
          <h1>HOME 4</h1>
        </BlockCards>
        <Pagination />
      </StyledContainer>
    </>
  );
};

export default connect(home);

const StyledContainer = styled(Container)`
  padding: 60px 24px;
  margin-bottom: 60px;
`;

const BlockCards = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContainerList = styled.section`
  width: 100%;
  margin: 0;
  /* padding: 24px; */
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
