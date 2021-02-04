import React from "react";
import { connect, styled } from "frontity";
import { Container } from "../../assets/css-in-js/GlobalStyles";
// import Pagination from "../list/pagination";
import CardNews from "../card-news";
import ArtWeapon from "../art-weapon";

const Home = ({ state, libraries }) => {
  const [posts, setPosts] = React.useState(null);
  const [pagination, setPagination] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState([]);
  // console.log("home state: ", state);

  const data = state.source.get(state.router.link);
  // console.log("home data: ", data.items);
  React.useEffect(() => {
    pag4(libraries);
  }, [pagination]);

  async function pag4(lib) {
    const per_page = 4;
    const page = pagination;
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page,
        page,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    const pages = getTotalPages(response);
    setTotalPages(pages);
    setPosts(firstItems);
  }

  if (posts === null) return null;
  return (
    <>
      <StyledContainer>
        <BlockCards>
          {posts.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <CardNews key={item.id} item={item} />;
          })}
        </BlockCards>
        <BlockPagination>
          {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11).map((page) => (
            <BtnPagination
              index={pagination}
              key={page}
              onClick={() => setPagination(page)}
            >
              {page}
            </BtnPagination>
          ))}
        </BlockPagination>
        <h1>{totalPages}</h1>
      </StyledContainer>
      <ArtWeapon />
    </>
  );
};

export default connect(Home);

const StyledContainer = styled(Container)`
  padding: 60px 24px 28px 24px;
  display: flex;
  flex-direction: column;
`;

const BlockCards = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

const BlockPagination = styled.div`
  display: flex;
  width: 100%;
`;

const BtnPagination = styled.button`
  background: #dbdbdb;
  width: 2.03125vw;
  height: 2.03125vw;
  border-radius: 50%;
  color: #fff;
  font-family: DINProCondBold;
  font-size: 25px;
  margin: 1rem;
  outline: none;
  cursor: pointer;

  &:nth-of-type(${(props) => props.index}) {
    background: #c10000;
  }
`;

const ContainerList = styled.section`
  width: 100%;
  margin: 0;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
