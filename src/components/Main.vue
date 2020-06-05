<template>
  <div id="main">

      <about-section></about-section>
      <facts-section></facts-section>
      <skills-section></skills-section>
      <resume-section></resume-section>
      <portfolio-section></portfolio-section>
      <services-section></services-section>
      <testimonials-section></testimonials-section>
      <contact-section></contact-section>

  </div>
</template>

<script>

  import AboutSection from "./AboutSection";
  import FactsSection from "./FactsSection";
  import SkillsSection from "./SkillsSection";
  import ResumeSection from "./ResumeSection";
  import PortfolioSection from "./PortfolioSection";
  import ServicesSection from "./ServicesSection";
  import TestimonialsSection from "./TestimonialsSection";
  import ContactSection from "./ContactSection";

  export default {
      name: "Main",
      components:
          {
              AboutSection: AboutSection,
              factsSection: FactsSection,
              skillsSection: SkillsSection,
              resumeSection: ResumeSection,
              portfolioSection: PortfolioSection,
              servicesSection: ServicesSection,
              testimonialsSection: TestimonialsSection,
              contactSection: ContactSection
          }
  }

</script>

<style scoped>

  #main {
    margin-left: 300px;
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
