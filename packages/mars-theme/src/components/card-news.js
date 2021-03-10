import React from "react";
import { connect, styled } from "frontity";
import Link from "../components/link";
import FeaturedMedia from "../components/featured-media";
import { Container } from "../assets/css-in-js/GlobalStyles";

const cardnews = ({ state, item }) => {
  const [src, setSrc] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  React.useEffect(() => {
    (async () => {
      const resFeature = await fetch(
        `https://fakeyourdeathbr.com/wp-json/wp/v2/media/${item.featured_media}`
      );
      const jsonFeature = await resFeature.json();

      const resCategory = await fetch(
        `https://fakeyourdeathbr.com/wp-json/wp/v2/categories`
      );
      const jsonCategory = await resCategory.json();
      const myCategory = jsonCategory.filter(
        (category) => category.id == item.categories[0]
      );
      setCategory(myCategory);
      setSrc(jsonFeature.guid.rendered);
    })();
  }, [item]);

  return (
    <>
      <ExtContainer>
        <ContainerCard>
          {state.theme.featured.showOnList && (
            <Link link={item.link}>
              <TumbCard srcImg={src} />
            </Link>
          )}
          {category && (
            <TypeCard link={`/${category[0].taxonomy}/${category[0].slug}`}>
              {category[0].name}
            </TypeCard>
          )}
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
  width: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 20px 0;
  margin: 0 auto;
`;

const ContainerCard = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: none;
`;

const TumbCard = styled.div`
  width: 300px;
  height: 236px;
  min-height: 236px;
  background: url(${(props) => props.srcImg}) no-repeat center;
  background-size: cover;
  border: none;
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
  margin-top: 5px;
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
