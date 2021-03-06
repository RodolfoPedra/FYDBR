import React from "react";
import { connect, styled, useConnect } from "frontity";
import Link from "./link";

const InfoWeapon = ({ state, libraries, id, link }) => {
  const [postAuthor, setPostAuthor] = React.useState(null);
  const [title1, setTitle1] = React.useState(null);
  const [subtitle1, setSubtitle1] = React.useState(null);
  const [title2, setTitle2] = React.useState(null);
  const [subtitle2, setSubtitle2] = React.useState(null);

  const { api, populate } = libraries.source;
  const author = state.source.author[id].name;

  React.useEffect(() => {
    getPostAuthor();
  }, []);

  async function getPostAuthor() {
    const response = await api.get({
      endpoint: "posts",
      params: {
        author: id,
        per_page: 2,
      },
    });
    const postsPerAuthor = await populate({
      response,
      state,
    });
    setPostAuthor(postsPerAuthor);
  }

  React.useEffect(() => {
    if (postAuthor) {
      const resTitle1 = state.source.post[postAuthor[0].id].title.rendered;
      const resTitle2 = state.source.post[postAuthor[1].id].title.rendered;
      setTitle1(resTitle1.split(":")[0]);
      setSubtitle1(resTitle1.split(":")[1]);
      setTitle2(resTitle2.split(":")[0]);
      setSubtitle2(resTitle2.split(":")[1]);
    }
  }, [postAuthor]);

  if (!postAuthor) return null;
  return (
    <>
      <ContainerInfoWeapon>
        <Avatar src={state.source.author[id].avatar_urls[96]} />
        <ContainerInfos>
          <h2>{author}</h2>
          <Link link={postAuthor[0].link}>
            <h3>{title1}:</h3>
            <p>{subtitle1}</p>
          </Link>
          <Link link={postAuthor[1].link}>
            <h3>{title2}:</h3>
            <p>{subtitle2}</p>
          </Link>
        </ContainerInfos>
      </ContainerInfoWeapon>
    </>
  );
};

export default connect(InfoWeapon);

const ContainerInfoWeapon = styled.div`
  flex-grow: 1;
  width: 33%;
  max-width: 33%;
  height: 240px;
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
  h2 {
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