import React from "react";
import { connect, styled } from "frontity";
import { Container } from "../assets/css-in-js/GlobalStyles";

const InfoWeapon = () => {
  const [wAvatar, setWAvatar] = React.useState(null);

  React.useEffect(() => {
    setWAvatar(document.querySelector("#avatar").getBoundingClientRect().width);
  }, [wAvatar]);

  return (
    <>
      <ContainerInfoWeapon>
        <Avatar id="avatar" hAvatar={wAvatar} />
        <ContainerInfos>
          <h2>Fydbr </h2>
          <p>Especial danger days:</p>
          <span>
            fique por dentro do quadrinho “Killjoys” em nossa resenha exclusiva
          </span>
          <p>Especial danger days:</p>
          <span>
            fique por dentro do quadrinho “Killjoys” em nossa resenha exclusiva
          </span>
        </ContainerInfos>
      </ContainerInfoWeapon>
    </>
  );
};

const ArtWeapon = ({ state, libraries }) => {
  React.useEffect(async () => {
    const author = 45068819;
    const { api, populate, getTotalPages } = libraries.source;
    const response = await api.get({
      endpoint: "posts",
      params: {
        author,
      },
    });
    const firstItems = await populate({
      response,
      state,
    });
    console.log("api author: ", firstItems);
  }, []);

  console.log("art: ", state);
  const postAuthor = state.source.get(state.source.author[45068819].link);
  console.log("art post author: ", postAuthor);

  return (
    <>
      <ExtContainer>
        <StyledContainer>
          <TittleArtWeapon>Art is the weapon</TittleArtWeapon>
          <InfoWeapon></InfoWeapon>
        </StyledContainer>
      </ExtContainer>
    </>
  );
};

export default connect(ArtWeapon);

const ExtContainer = styled(Container)`
  width: 100%;
  height: 500px;
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
  flex-direction: column;
  align-items: flex-start;
`;

const TittleArtWeapon = styled.h1`
  position: absolute;
  top: 30px;
  left: 24px;
  font-family: DINProCondBold;
  font-size: 35px;
`;

const ContainerInfoWeapon = styled.div`
  display: flex;
  padding-top: 50px;
  max-width: 25vw;
`;

const ContainerInfos = styled.div`
  font-size: 21px;
  h2 {
    font-family: DINProCondBold;
    color: #c10000;
    text-transform: uppercase;
  }

  p {
    font-family: DINProCondBold;
    text-transform: uppercase;
  }

  span {
    font-family: DINProCondMedium;
  }
`;

const Avatar = styled.img`
  width: 3.75vw;
  height: 42px;
  min-width: 46px;
  min-height: 46px;
  max-width: 72px;
  max-height: 72px;
  background: #fff;
  border-radius: 50px;
`;
