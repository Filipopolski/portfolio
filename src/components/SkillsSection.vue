<template>

  <section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title"><h2>{{title}}<!--::after--></h2><p>{{text}}</p></div>

      <div class="row skills-content">

        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">
          <div class="progress" v-for="skillOne in skillsOne"><span class="skill">{{ skillOne.skill }}<i class="val">{{ skillOne.progress }}</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" :aria-valuenow=" skillOne.valuenow "
                   :aria-valuemin=" skillOne.valuemin " :aria-valuemax=" skillOne.valuemax "
                   :style=" skillOne.how "></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="progress" v-for="skillTwo in skillsTwo"><span class="skill">{{ skillTwo.skill }}<i class="val">{{ skillTwo.progress }}</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" :aria-valuenow=" skillTwo.valuenow "
                   :aria-valuemin=" skillTwo.valuemin " :aria-valuemax=" skillTwo.valuemax "
                   :style=" skillTwo.how "></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

</template>

<script>
    export default {
        name: "SkillsSection",
        data() {
            return {
                title: 'Skills',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                skillsOne: [
                    {
                        skill: 'HTML',
                        progress: '100%',
                        valuenow: '100',
                        valuemin: '0',
                        valuemax: '100',
                        how: 'width: 100%'
                    },
                    {skill: 'CSS', progress: '90%', valuenow: '90', valuemin: '0', valuemax: '100', how: 'width: 90%'},
                    {
                        skill: 'JAVASCRIPT',
                        progress: '75%',
                        valuenow: '75',
                        valuemin: '0',
                        valuemax: '100',
                        how: 'width: 75%'
                    },
                ],
                skillsTwo: [
                    {skill: 'PHP', progress: '80%', valuenow: '80', valuemin: '0', valuemax: '100', how: 'width: 80%'},
                    {
                        skill: 'WORDPRESS/CMS',
                        progress: '90%',
                        valuenow: '90',
                        valuemin: '0',
                        valuemax: '100',
                        how: 'width: 90%'
                    },
                    {
                        skill: 'PHOTOSHOP',
                        progress: '55%',
                        valuenow: '55',
                        valuemin: '0',
                        valuemax: '100',
                        how: 'width: 55%'
                    },
                ]
            }
        }
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
