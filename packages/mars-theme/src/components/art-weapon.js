import React from "react";
import { connect, styled, useConnect } from "frontity";
import { Container } from "../assets/css-in-js/GlobalStyles";

const InfoWeapon = ({ id, link }) => {
  const [postAuthor, setPostAuthor] = React.useState(null);
  const [title1, setTitle1] = React.useState(null);
  const [subtitle1, setSubtitle1] = React.useState(null);
  const [title2, setTitle2] = React.useState(null);
  const [subtitle2, setSubtitle2] = React.useState(null);

  const {state, libraries} = useConnect();
  const author = state.source.author[id].name;
  const post1 = state.source.post[id];
  // const post2 = state.source.post[id];

  window.post = state.source;
  console.log('id post: ', id);

  React.useEffect(async () => {
    const { api, populate } = libraries.source;
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
    console.log("posts per author: ", postsPerAuthor);
    setPostAuthor(postsPerAuthor);
  }, []);

  React.useEffect(() => {
    if(postAuthor) {
      const resTitle1 = state.source.post[postAuthor[0].id].title.rendered;
      const resTitle2 = state.source.post[postAuthor[1].id].title.rendered;
      setTitle1(resTitle1.split(':')[0]);
      setSubtitle1(resTitle1.split(':')[1]);
      setTitle2(resTitle2.split(':')[0]);
      setSubtitle2(resTitle2.split(':')[1]);

      const postLink = state.source.post[postAuthor[0].id];
      console.log('post link', );
    }
  },[postAuthor])

  // if(title1 == null || subtitle1 == null) return null;
  return (
    <>
      <ContainerInfoWeapon>
          <Avatar src={state.source.author[id].avatar_urls[96]}/>
        <ContainerInfos>
          <h2>{author}</h2>
          <h3>{title1}:</h3>
          <p>
            {subtitle1}
          </p>
          <h3>{title2}:</h3>
          <p>
            {subtitle2}
          </p>
        </ContainerInfos>
      </ContainerInfoWeapon>
    </>
  );
};

const ArtWeapon = ({ state, libraries }) => {
  const [arrAuthors, setArrAuthors] = React.useState(null);
  console.log("state weapon: ", state);

  React.useEffect(async () => {
    const { api, populate } = libraries.source;
    const response = await api.get({
      endpoint: "users",
    });
    const firstItems = await populate({
      response,
      state,
    });
    setArrAuthors(firstItems);
  }, []);

  React.useEffect(() => {
    if (arrAuthors) {
      console.log("users: ", arrAuthors);
    }
  }, [arrAuthors]);

  return (
    <>
      <ExtContainer>
        <StyledContainer>
          <TittleArtWeapon>Art is the weapon</TittleArtWeapon>
          {arrAuthors &&
            arrAuthors.map((author) => (
              <InfoWeapon
                id={author.id}
                link={author.link}
              />
            ))}
        </StyledContainer>
      </ExtContainer>
    </>
  );
};

export default connect(ArtWeapon);

const ExtContainer = styled(Container)`
  width: 100%;
  /* height: 500px; */
  background: #000;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  position: relative;
  height: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TittleArtWeapon = styled.h1`
  position: absolute;
  top: 30px;
  left: 24px;
  font-family: DINProCondBold;
  font-size: 35px;
`;

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

// const BorderAvatar = styled.div`
//     box-shadow: 0 0 0 -5px #000;
// `;
