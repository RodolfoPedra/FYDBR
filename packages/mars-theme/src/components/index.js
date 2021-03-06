import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import { globalStyles } from "../assets/css-in-js/GlobalStyles";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./pages/home";
import FontFace from "../assets/css-in-js/FontFace";
import Footer from "./footer";
import Manifesto from "./pages/manifesto";
import Sobre from "./pages/sobre";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log("data data: ", data);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="pt-Br" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <FontFace />
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.link == "/"}></Home>
          <Manifesto when={data.link == "/manifesto/"}></Manifesto>
          <Sobre when={data.link == "/about/"}></Sobre>
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
        {/* <Switch>
          <List when={data.isArchive} />
        </Switch> */}
      </Main>

      <Footer />
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px #000;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;
