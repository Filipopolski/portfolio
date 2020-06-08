<template>

  <section id="resume" class="resume">
    <div class="container">

      <div class="section-title"><h2>{{ title }}<!--::after--></h2><p>{{ text }}</p></div>

      <div class="row">
        <div class="col-lg-6 aos-init" data-aos="fade-up">
          <h3 class="resume-title">{{ sumeryTitle }}</h3>
          <div class="resume-item pb-0"><!--::before-->
            <h4>{{ author }}</h4>
            <p><em>{{ sumeryInfo }}</em></p>
            <ul><li v-for="list in lists">{{ list }}</li></ul></div>

          <h3 class="resume-title">{{ educationTitle }}</h3>
          <div class="resume-item" v-for="education in educations"><!--::before-->
            <h4>{{ education.speciality }}</h4>
            <h5>{{ education.years }}</h5>
            <p><em>{{ education.where }}</em></p>
            <p>{{ education.text }}</p></div>
        </div>

        <div class="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">{{ professionalExperienceTitle }}</h3>

          <div class="resume-item"><!--::before-->
            <h4>{{ professionalExperienceOne.speciality }}</h4>
            <h5>{{ professionalExperienceOne.years }}</h5>
            <p><em>{{ professionalExperienceOne.where }}</em></p>
            <ul><li v-for="profListOne in professionalListOne">{{ profListOne }}</li></ul></div>

          <div class="resume-item"><!--::before-->
            <h4>{{ professionalExperienceTwo.speciality }}</h4>
            <h5>{{ professionalExperienceTwo.years }}</h5>
            <p><em>{{ professionalExperienceTwo.where }}</em></p>
            <ul><li v-for="profListTwo in professionalListTwo">{{ profListTwo }}</li></ul></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

    export default {
        name: "ResumeSection",
        data() {
            return {
                title: 'Resume',
                author: 'Alex Smith',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                sumeryTitle: 'Sumary',
                sumeryInfo: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
                lists: ['Portland par 127,Orlando, FL', '(123) 456-7891', 'alice.barkley@example.com'],
                educationTitle: 'Education',
                educations: [
                    {
                        speciality: 'Master of Fine Arts & Graphic Design',
                        years: '2015-2016',
                        where: 'Rochester Institute of Technology, Rochester, NY',
                        text: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
                    },
                    {
                        speciality: 'Bachelor of Fine Arts & Graphic Design',
                        years: '2010-2014',
                        where: 'Rochester Institute of Technology, Rochester, NY',
                        text: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
                    }
                ],
                professionalExperienceTitle: 'Professional Experience',
                professionalExperienceOne:
                    {
                        speciality: 'Senior graphic design specialist',
                        years: '2019 - Present',
                        where: 'Experion, New York, NY'
                    },
                professionalExperienceTwo:
                    {
                        speciality: 'Graphic design specialist',
                        years: '2017 - 2018',
                        where: 'Stepping Stone Advertising, New York, NY'
                    },
                professionalListOne: ['Lead in the design, development, and implementation of the graphic, layout, and production communication materials', 'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project', 'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design', 'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'],
                professionalListTwo: ['Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).', 'Managed up to 5 projects or tasks at a given time while under pressure', 'Recommended and consulted with clients on the most appropriate graphic design', 'Created 4+ design presentations and proposals a month for clients and account managers']


            }
        }
    }

</script>

<style scoped>

  .resume .resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #050d18;
  }

  .resume .resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #1f5297;
    position: relative;
  }

  .resume .resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #050d18;
    margin-bottom: 10px;
  }

  .resume .resume-item h5 {
    font-size: 16px;
    background: #e4edf9;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .resume .resume-item ul {
    padding-left: 20px;
  }

  .resume .resume-item ul li {
    padding-bottom: 10px;
  }

  .resume .resume-item:last-child {
    padding-bottom: 0;
  }

  .resume .resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #1f5297;
  }

</style>
