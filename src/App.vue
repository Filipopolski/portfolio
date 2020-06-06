<template>

  <div id="app">

    <mobile-nav></mobile-nav>
    <header-section></header-section>
    <hero-section></hero-section>
    <main-section></main-section>
    <footer-section></footer-section>
    <back-to-top></back-to-top>

  </div>

</template>

<script>

    import MobileNav from "./components/MobileNav";
    import Header from "./components/Header";
    import HeroSection from "./components/HeroSection";
    import Main from "./components/Main";
    import Footer from "./components/Footer";
    import BackToTop from "./components/BackToTop";

    export default {
        components: {
            mobileNav: MobileNav,
            headerSection: Header,
            heroSection: HeroSection,
            mainSection: Main,
            footerSection: Footer,
            backToTop: BackToTop
        }
    }

</script>

<style>

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

  .section-bg {
    background: #f5f8fd;
  }

  .section-title {
    padding-bottom: 30px;
  }

  .section-title h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #173b6c;
  }

  .section-title h2::after {
    content: '';
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #149ddd;
    bottom: 0;
    left: 0;
  }

  .section-title p {
    margin-bottom: 0;
  }

</style>
