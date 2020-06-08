<template>

  <section id="about" class="about">
    <div class="container">
      <div class="section-title"><h2>{{ title }}<!--::after--></h2><p>{{ textOne }}</p></div>
      <div class="row">
        <div class="col-lg-4 aos-init" data-aos="fade-right"><img :src=" image " class="img-fluid" alt=""></div>
        <div class="col-lg-8 pt-4 pt-lg-0 content aos-init" data-aos="fade-left">
          <h3>{{ textTwo }}</h3><p class="font-italic">{{ textThree }}</p>

          <div class="row">
            <div :class=" column ">
              <ul><li v-for="about in aboutPerson"><i :class=" about.icon "><!--::before--></i><strong>{{ about.strong }}</strong>{{ about.text }}</li></ul></div>

            <div :class=" column ">
              <ul><li v-for="aboutTwo in aboutPersonTwo"><i :class=" aboutTwo.icon "><!--::before--></i><strong>{{ aboutTwo.strong }}</strong>{{ aboutTwo.text }}</li></ul></div>
          </div>

          <p>{{ textFour }}</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

    export default {
        name: "AboutSection",
        data() {
            return {
                title: 'About',
                image: '../static/img/profile-img.jpg',
                textOne: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                textTwo: 'UI/UX Designer & Web Developer.',
                textThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                textFour: 'Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.',
                column: 'col-lg-6',
                aboutPerson: [
                    {icon: 'icofont-rounded-right', strong: 'Birthday:', text: ' 1 May 1995'},
                    {icon: 'icofont-rounded-right', strong: 'Website:', text: ' www.example.com'},
                    {icon: 'icofont-rounded-right', strong: 'Phone:', text: ' +123 456 7890'},
                    {icon: 'icofont-rounded-right', strong: 'City:', text: ' City: New York, USA'},
                ],
                aboutPersonTwo: [
                    {icon: 'icofont-rounded-right', strong: 'Age:', text: ' 30'},
                    {icon: 'icofont-rounded-right', strong: 'Degree:', text: ' Master'},
                    {icon: 'icofont-rounded-right', strong: 'PhEmailone:', text: ' email@example.com'},
                    {icon: 'icofont-rounded-right', strong: 'Freelance:', text: ' Available'}
                ]
            }
        }
    }

</script>

<style scoped>

  .about .content h3 {
    font-weight: 700;
    font-size: 26px;
    color: #173b6c;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    padding-bottom: 10px;
  }

  .about .content ul i {
    font-size: 20px;
    padding-right: 2px;
    color: #149ddd;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }

</style>
