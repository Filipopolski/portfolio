<template>

  <div id="portfolio">

    <mobile-nav-portfolio></mobile-nav-portfolio>
    <header-portfolio></header-portfolio>
    <main-portfolio></main-portfolio>
    <footer-portfolio></footer-portfolio>
    <back-to-top-portfolio></back-to-top-portfolio>

  </div>

</template>

<script>

    import MobileNavPortfolio from "./components/portfolio/MobileNavPortfolio";
    import HeaderPortfolio from "./components/portfolio/HeaderPortfolio";
    import MainPortfolio from "./components/portfolio/MainPortfolio";
    import FooterPortfolio from "./components/portfolio/FooterPortfolio";
    import BackToTopPortfolio from "./components/portfolio/BackToTopPortfolio";

    export default {
        components: {
            mobileNavPortfolio: MobileNavPortfolio,
            headerPortfolio: HeaderPortfolio,
            mainPortfolio: MainPortfolio,
            footerPortfolio: FooterPortfolio,
            backToTopPortfolio: BackToTopPortfolio
        }
    }
</script>

<style scoped>

  body {
    font-family: "Open Sans", sans-serif;
    color: #272829;
  }

  a {
    color: #149ddd;
  }

  a:hover {
    color: #37b3ed;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
  }

  section {
    padding: 60px 0;
    overflow: hidden;
  }

</style>
