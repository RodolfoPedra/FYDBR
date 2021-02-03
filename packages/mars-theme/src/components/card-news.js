import React from "react";
import { connect, styled } from "frontity";
import Link from "../components/link";
import FeaturedMedia from "../components/featured-media";
import { Container } from "../assets/css-in-js/GlobalStyles";

const cardnews = ({ state, item }) => {
  // console.log("log do cardnews: ", state, item);
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const category = state.source.category[item.categories];

  return (
    <>
      <ExtContainer>
        <ContainerCard>
          <TumbCard>
            {state.theme.featured.showOnList && (
              <Link link={item.link}>
                <FeaturedMedia id={item.featured_media} />
              </Link>
            )}
          </TumbCard>
          <TypeCard link={category.link}>{category.name}</TypeCard>
          <Link link={item.link}>
            <TittleNews>{item.title.rendered}</TittleNews>
          </Link>
          <DateNews>{date.toDateString()}</DateNews>
        </ContainerCard>
      </ExtContainer>
    </>
  );
};

export default connect(cardnews);

const ExtContainer = styled.div`
  width: 90%;
  box-sizing: border-box;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCard = styled.article`
  width: 18.69vw;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TumbCard = styled.div`
  width: 100%;
  height: 236px;
  min-height: 236px;
  background: #dbdbdb;
`;

const TypeCard = styled(Link)`
  height: 20px;
  background: #c10000;
  border-radius: 20px;
  color: #fff !important;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 3px 8px 2px 8px;
  margin-top: 2px;
`;

const TittleNews = styled.p`
  font-family: DINProCondBold;
  width: 100%;
  font-size: 28px;
  line-height: 33px;
  text-align: inherit;
  text-transform: uppercase;
`;

const DateNews = styled.span`
  font-size: 16px;
  color: #aaaaaa;
`;
