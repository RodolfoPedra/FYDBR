const settings = {
  name: "fydbr",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Início", "/"],
            ["Manifesto", "/manifesto/"],
            ["Sobre nós", "/about/"],
            ["Equipe", "/equipe/"],
            ["Contato", "/contact/"],
            ["Look Alive Sunshine", "/look-alive-sunshine/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://fakeyourdeathbr.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
