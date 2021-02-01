import React from "react";
import { connect, styled } from "frontity";
import { Container } from "../../assets/css-in-js/GlobalStyles";
import CardNews from "../card-news";
import Pagination from "../list/pagination";

const ListHome = ({ state }) => {
  // console.log("state do list home: ", state);

  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  // console.log("data list home: ", data);
  return (
    <ContainerList>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <CardNews key={item.id} item={item} />;
      })}
      <Pagination />
    </ContainerList>
  );
};

// connect(ListHome);

const home = ({ state }) => {
  return (
    <>
      <StyledContainer>
        <BlockCards>
          <ListHome state={state} />
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
