import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { Container } from "../assets/css-in-js/GlobalStyles";

const PreachAll = ({ state, libraries }) => {

  window.statePreach = state;
  const [totalPosts, setTotalPosts] = React.useState(null);
  const [names, setNames] = React.useState(null);
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    getTotalPost();
  }, []);

  async function getTotalPost() {
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        per_page: 100,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    setTotalPosts(firstItems);
  }

  React.useEffect(() => {
    setTimeout(() => {
      getComments();
    },2000)
  }, [totalPosts]);

  async function getComments() {
    const response = await fetch(
      "https://fakeyourdeathbr.com/wp-json/wp/v2/comments"
    );
    const jsonComments = await response.json();

    const commentFilter = jsonComments.filter((item, index) => index <= 2);

    const postsReduce = commentFilter.reduce((acc, { post }) => {
      return {
        ...acc,
        [post]: state.source.post[post],
      };
    }, {});
    setPosts(postsReduce);
    setNames(commentFilter);
  }

  return (
    <>
    <Container>
      {names &&
        names.map(({ author_name, author_avatar_urls, post }, index) => (
          <>
            <ContainerInfo key={author_name}>
              <Avatar key={post} src={author_avatar_urls[96]} />
              <ContainerPost key={author_name}>
                <h1>{author_name}</h1>
                <Link link={posts[post].link}>
                  <p>{`${posts[post].title.rendered.substring(0, 30)}...`}</p>
                </Link>
              </ContainerPost>
            </ContainerInfo>
          </>
        ))}
    </Container>
    </>
  );
};

export default connect(PreachAll);

const StyledContainer = styled(Container)``;

const ContainerInfo = styled.div`
  flex-grow: 1;
  width: 33%;
  max-width: 33%;
  height: 66px;
  display: flex;
  &:nth-of-type(-n + 3) {
    padding-top: 60px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 1550px) {
    &:nth-of-type(-n + 3) {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 1020px) {
    &:nth-of-type(-n + 3) {
      width: 50%;
      max-width: 50%;
      margin-bottom: 100px;
    }
  }
`;

const ContainerPost = styled.div`
  width: 100%;
  padding-left: 14px;
  font-size: 21px;
  h1 {
    font-family: DINProCondBold;
    color: #c10000;
    text-transform: uppercase;
    padding-bottom: 4px;
  }

  h3 {
    font-family: DINProCondBold;
    text-transform: uppercase;
  }

  p {
    font-family: DINProLight;
    padding-top: 4px;
    padding-bottom: 12px;
  }
`;

const Avatar = styled.img`
  @media screen and (min-width: 1900px) {
    width: 42px;
    height: 42px;
  }
  width: 2vw;
  height: 2vw;
  min-width: 26px;
  min-height: 26px;
  border-radius: 50%;
`;
