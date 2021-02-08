import React from "react";
import { connect, styled, useConnect } from "frontity";
import { Container } from "../assets/css-in-js/GlobalStyles";
import InfoWeapon from "./info-weapon";

const ArtWeapon = ({ state, libraries }) => {
  const [arrAuthors, setArrAuthors] = React.useState(null);

  React.useEffect(() => {
    getUsersPost();
  }, []);

  async function getUsersPost() {
    const { api, populate } = libraries.source;
    const response = await api.get({
      endpoint: "users",
    });
    const firstItems = await populate({
      response,
      state,
    });
    setArrAuthors(firstItems);
  }

  return (
    <>
      <ExtContainer>
        <StyledContainer>
          <TittleArtWeapon>Art is the weapon</TittleArtWeapon>
          {arrAuthors &&
            arrAuthors.map((author) => (
              <InfoWeapon key={author.id} id={author.id} link={author.link} />
            ))}
        </StyledContainer>
      </ExtContainer>
    </>
  );
};

export default connect(ArtWeapon);

const ExtContainer = styled(Container)`
  width: 100%;
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
