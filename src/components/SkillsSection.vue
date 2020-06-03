<template>
  <section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title">
        <h2>
          Skills
          ::after
        </h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row skills-content">

        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">

          <div class="progress">
            <span class="skill">HTML <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                   style="width: 100%;"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                   style="width: 90%;"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">75%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                   style="width: 75%;"></div>
            </div>
          </div>

        </div>

        <div class="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="100">

          <div class="progress">
            <span class="skill">PHP <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                   style="width: 80%;"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">WordPress/CMS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                   style="width: 90%;"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Photoshop <i class="val">55%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"
                   style="width: 55%;"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "skills-section"
    }
</script>

<style scoped>

  .skills .progress {
    height: 50px;
    display: block;
    background: none;
  }

  .skills .progress .skill {
    padding: 0;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #050d18;
  }

  .skills .progress .skill .val {
    float: right;
    font-style: normal;
  }

  .skills .progress-bar-wrap {
    background: #dce8f8;
  }

  .skills .progress-bar {
    width: 1px;
    height: 10px;
    transition: .9s;
    background-color: #149ddd;
  }

</style>
