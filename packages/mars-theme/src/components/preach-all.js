import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const PreachAll = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  console.log("preach state: ", data);
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
    getComments();
  }, [totalPosts]);

  async function getComments() {
    const response = await fetch(
      "https://fakeyourdeathbr.com/wp-json/wp/v2/comments"
    );
    const jsonComments = await response.json();
    // console.log("resj ", jsonComments);

    const commentFilter = jsonComments.filter((item, index) => index <= 2);
    // console.log("comment filter: ", commentFilter);

    const postsReduce = commentFilter.reduce((acc, { post }) => {
      return {
        ...acc,
        [post]: state.source.post[post],
      };
    }, {});
    console.log("dentro do getC: ", postsReduce);
    setPosts(postsReduce);
    setNames(commentFilter);
    // setPosts(postComment);
  }

  console.log("posts reduce ext: ", names, posts);
  return (
    <>
      {names &&
        names.map(({ author_name, author_avatar_urls, post }, index) => (
          <>
            <ContainerInfoWeapon>
              <Avatar src={author_avatar_urls[96]} />
              <ContainerInfos>
                <h1>{author_name}</h1>
                <Link link={posts[post].link}>
                  <p>{`${posts[post].title.rendered.substring(0, 30)}...`}</p>
                </Link>
              </ContainerInfos>
            </ContainerInfoWeapon>
          </>
        ))}
    </>
  );
};

export default connect(PreachAll);

const ContainerInfoWeapon = styled.div`
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

const ContainerInfos = styled.div`
  width: 23vw;
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
    width: 72px;
    height: 72px;
  }
  width: 3.75vw;
  height: 3.75vw;
  min-width: 46px;
  min-height: 46px;
  border-radius: 50%;
`;
