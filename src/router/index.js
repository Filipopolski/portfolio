import Vue from 'vue'
import Router from 'vue-router'
import MobileNav from "../components/MobileNav";
import Header from "../components/Header"
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import AboutSection from "../components/AboutSection";
import FactsSection from "../components/FactsSection";
import SkillsSection from "../components/SkillsSection";
import ResumeSection from "../components/ResumeSection";
import PortfolioSection from "../components/PortfolioSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
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
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'About Section',
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
      ]
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/',
      name: 'Back to top button',
      component: BackToTop
    }
  ]
})
