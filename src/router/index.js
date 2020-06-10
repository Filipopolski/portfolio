import Vue from 'vue'
import Router from 'vue-router'

// main

import MobileNav from "../components/main/MobileNav";
import Header from "../components/main/Header"
import HeroSection from "../components/main/HeroSection";
import Main from "../components/main/Main";
import AboutSection from "../components/main/AboutSection";
import FactsSection from "../components/main/FactsSection";
import SkillsSection from "../components/main/SkillsSection";
import ResumeSection from "../components/main/ResumeSection";
import PortfolioSection from "../components/main/PortfolioSection";
import ServicesSection from "../components/main/ServicesSection";
import TestimonialsSection from "../components/main/TestimonialsSection";
import ContactSection from "../components/main/ContactSection";
import Footer from "../components/main/Footer";
import BackToTop from "../components/main/BackToTop";

// portfolio

import MobileNavPortfolio from "../components/portfolio/MobileNavPortfolio";
import HeaderPortfolio from "../components/portfolio/HeaderPortfolio";
import MainPortfolio from "../components/portfolio/MainPortfolio";
import Breadcrumbs from "../components/portfolio/Breadcrumbs";
import PortfolioDetails from "../components/portfolio/PortfolioDetails";
import FooterPortfolio from "../components/portfolio/FooterPortfolio";
import BackToTopPortfolio from "../components/portfolio/BackToTopPortfolio";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Mobile nav toggle button',
      component: MobileNav
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Hero Section',
      component: HeroSection
    },
    {
      path: '',
      name: 'Main',
      component: Main,
    },
    {
      path: '',
      name: 'aboutSection',
      component: AboutSection
    },
    {
      path: '/',
      name: 'Fact Section',
      component: FactsSection
    },
    {
      path: '/',
      name: 'Skills Section',
      component: SkillsSection
    },
    {
      path: '/',
      name: 'Resume Section',
      component: ResumeSection
    },
    {
      path: '/',
      name: 'Portfolio Section',
      component: PortfolioSection
    },
    {
      path: '/',
      name: 'Services Section',
      component: ServicesSection
    },
    {
      path: '/',
      name: 'Testimonials Section',
      component: TestimonialsSection
    },
    {
      path: '/',
      name: 'Contact Section',
      component: ContactSection
    },
    {
      path: '',
      name: 'Footer',
      component: Footer
    },
    {
      path: '',
      name: 'Back to top button',
      component: BackToTop
    },

//             portfolio

    {
      path: '',
      name: 'Mobile nav portfolio',
      component: MobileNavPortfolio
    },
    {
      path: '',
      name: 'Header portfolio',
      component: HeaderPortfolio
    },
    {
      path: '',
      name: 'Main portfolio',
      component: MainPortfolio
    },
    {
      path: '',
      name: 'Breadcrumbs',
      component: Breadcrumbs
    },
    {
      path: '',
      name: 'Portfolio details',
      component: PortfolioDetails
    },
    {
      path: '',
      name: 'Footer portfolio',
      component: FooterPortfolio
    },
    {
      path: '',
      name: 'Back to top portfolio',
      component: BackToTopPortfolio
    }
  ]
})
