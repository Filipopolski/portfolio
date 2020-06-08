<template>
  <section id="services" class="services">
    <div class="container">

      <div class="section-title"><h2>{{ title }}<!--::after--></h2><p>{{ text }}</p></div>

      <div class="row">
        <div v-for="service in services" class="col-lg-4 col-md-6 icon-box aos-init" data-aos="fade-up" :data-aos-delay=" service.data ">
          <div class="icon"><i :class=" service.icon "><!--::before--></i></div>
          <h4 class="title"><a href="">{{ service.title }}</a></h4>
          <p class="description">{{ service.description}}</p></div>
      </div>

    </div>
  </section>
</template>

<script>
    export default {
        name: "ServicesSection",
        data () {
            return {
                title: 'Services',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                services: [
                    {icon: 'icofont-computer', title: 'Lorem Ipsum', description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'},
                    {data: '100', icon: 'icofont-chart-bar-graph', title: 'Dolor Sitema', description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'},
                    {data: '200', icon: 'icofont-earth', title: 'Sed ut perspiciatis', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'},
                    {data: '300', icon: 'icofont-image', title: 'Magni Dolores', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
                    {data: '400', icon: 'icofont-settings', title: 'Nemo Enim', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque'},
                    {data: '500', icon: 'icofont-tasks-alt', title: 'Eiusmod Tempor', description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi'},
                ]
            }
        }
    }
</script>

<style scoped>

  .services .icon-box {
    margin-bottom: 20px;
  }

  .services .icon {
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    background: #149ddd;
    border-radius: 50%;
    transition: 0.5s;
    border: 1px solid #149ddd;
  }

  .services .icon i {
    color: #fff;
    font-size: 24px;
  }

  .services .icon-box:hover .icon {
    background: #fff;
  }

  .services .icon-box:hover .icon i {
    color: #149ddd;
  }

  .services .title {
    margin-left: 80px;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
  }

  .services .title a {
    color: #343a40;
  }

  .services .title a:hover {
    color: #149ddd;
  }

  .services .description {
    margin-left: 80px;
    line-height: 24px;
    font-size: 14px;
  }

</style>
