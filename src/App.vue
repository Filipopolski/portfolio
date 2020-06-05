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

</style>
