import React from "react";
import { connect, styled, decode } from "frontity";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <StyledContainer maxWidth="lg">
      <StyledGrid container>
        {data.items.map(({ type, id }, index) => {
          const item = state.source[type][id];
          const xs = index == 0 || index == 1 ? 6 : "auto";
          return (
            <Grid item xs={12} sm={12} md={xs}>
              <Item key={item.id} item={item} index={index} />
            </Grid>
          );
        })}
      </StyledGrid>
      <Pagination />
    </StyledContainer>
  );
};

export default connect(List);

const StyledContainer = styled(Container)``;

const StyledGrid = styled(Grid)`
  justify-content: space-between;

  @media (max-width: 520px) {
    justify-content: center;
  }
`;
