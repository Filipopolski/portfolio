<template>

  <section id="facts" class="facts">
    <div class="container">
      <div class="section-title"><h2>{{ title }}<!--::after--></h2>
        <p>{{ text }}</p></div>

      <div class="row no-gutters">
        <div v-for="fact in facts" class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch aos-init aos-animate"
             data-aos="fade-up" :data-aos-delay=" fact.delay ">
          <div class="count-box"><i :class=" fact.icon "><!--::before--></i><span data-toggle="counter-up">{{ fact.number }}</span>
            <p><strong>{{ fact.job }}</strong> {{ fact.about }}</p></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

    export default {
        name: "FactsSection",
        data() {
            return {
                title: 'Facts',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                facts: [
                    {
                        icon: 'icofont-simple-smile',
                        number: '232',
                        job: 'Happy Clients',
                        about: ' consequuntur quae'
                    },
                    {
                        delay: '100',
                        icon: 'icofont-document-folder',
                        number: '521',
                        job: 'Projects',
                        about: ' adipisci atque cum quia aut'
                    },
                    {
                        delay: '200',
                        icon: 'icofont-live-support',
                        number: '1,463',
                        job: 'Hours Of Support',
                        about: ' aut commodi quaerat'
                    },
                    {
                        delay: '300',
                        icon: 'icofont-users-alt-5',
                        number: '15',
                        job: 'Hard Workers',
                        about: ' rerum asperiores dolor'
                    }
                ]
            }
        }
    }

</script>

<style scoped>

  .facts {
    padding-bottom: 30px;
  }

  .facts .count-box {
    padding: 30px;
    width: 100%;
  }

  .facts .count-box i {
    display: block;
    font-size: 44px;
    color: #149ddd;
    float: left;
  }

  .facts .count-box span {
    font-size: 48px;
    line-height: 40px;
    display: block;
    font-weight: 700;
    color: #050d18;
    margin-left: 60px;
  }

  .facts .count-box p {
    padding: 15px 0 0 0;
    margin: 0 0 0 60px;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: #122f57;
  }

  .facts .count-box a {
    font-weight: 600;
    display: block;
    margin-top: 20px;
    color: #122f57;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    transition: ease-in-out 0.3s;
  }

  .facts .count-box a:hover {
    color: #1f5297;
  }

</style>
