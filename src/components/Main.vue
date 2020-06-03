<template>
  <div>
    <main id="main">
      <about-section></about-section>
      <facts-section></facts-section>
      <skills-section></skills-section>
      <resume-section></resume-section>
      <portfolio-section></portfolio-section>
      <servicies-section></servicies-section>
      <testimonials-section></testimonials-section>
      <contact-section></contact-section>
    </main>
  </div>
</template>

<script>
    export default {
        name: "Main"
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
