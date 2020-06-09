<template>

  <section id="portfolio" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>{{ title }}<!--::after--></h2><p>{{ text }}</p></div>

      <div class="row aos-init" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters"><li v-for="filter in portfolioFilters" :data-filter=" filter.data " :class=" filter.class ">{{ filter.name }}</li></ul>
        </div>
      </div>

      <div class="row portfolio-container aos-init" data-aos="fade-up" data-aos-delay="100" style="position: relative; height: 877.5px;">

        <div v-for="item in portfolioItems" :class=" item.class " :style=" item.style ">
          <div class="portfolio-wrap"><!--::before--><img :src=" item.src " class="img-fluid" alt="">
            <div class="portfolio-links">
              <a :href=" item.src " data-gall="portfolioGallery" class="venobox vbox-item" :title=" item.title ">
                <i class="bx bx-plus"><!--::before--></i></a>
              <a :href=" href.link " :title=" href.title ">
                <i class="bx bx-link"><!--::before--></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<script>

    // import isotope from 'vueisotope'
    // import $ from 'jquery';

    export default {

        name: "PortfolioSection",
        data () {
          return {
              title: 'Portfolio',
              text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
              portfolioFilters: [
                  {data: '*', class: 'filter-active', name: 'All'},
                  {data: '.filter-app', name: 'App'},
                  {data: '.filter-card', name: 'Card'},
                  {data: '.filter-web', name: 'Web'},
              ],
              portfolioItems: [
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-app', style: 'position: absolute; left: 0px; top: 0px', src: '../static/img/portfolio/portfolio-1.jpg', title: 'App 1',},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-web', style: 'position: absolute; left: 380px; top: 0px', src: '../static/img/portfolio/portfolio-2.jpg', title: 'Web 3'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-app', style: 'position: absolute; left: 760px; top: 0px', src: '../static/img/portfolio/portfolio-3.jpg', title: 'App 2'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-card', style: 'position: absolute; left: 0px; top: 292.5px', src: '../static/img/portfolio/portfolio-4.jpg', title: 'Card 2'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-web', style: 'position: absolute; left: 380px; top: 292.5px', src: '../static/img/portfolio/portfolio-5.jpg', title: 'Web 2'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-app', style: 'position: absolute; left: 760px; top: 292.5px', src: '../static/img/portfolio/portfolio-6.jpg', title: 'App 3'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-card', style: 'position: absolute; left: 0px; top: 585px', src: '../static/img/portfolio/portfolio-7.jpg', title: 'Card 1'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-card', style: 'position: absolute; left: 380px; top: 585px', src: '../static/img/portfolio/portfolio-8.jpg', title: 'Card 3'},
                  {class: 'col-lg-4 col-md-6 portfolio-item filter-web', style: 'position: absolute; left: 760px; top: 585px', src: '../static/img/portfolio/portfolio-9.jpg', title: 'Web 3'},
              ],
              href: {link: '../../../portfolio-details.html', title: 'More Details'}
          }
        },
        // components: {
        //     isotope,
        // },
        // methods: {
        //
        // }
        // mounted () {
        //     $('.venobox').venobox();
        // }
    }

    // $(window).on('load', function() {
    //     var portfolioIsotope = $('.portfolio-container').isotope({
    //         itemSelector: '.portfolio-item',
    //         layoutMode: 'fitRows'
    //     });
    //
    //     $('#portfolio-flters li').on('click', function() {
    //         $("#portfolio-flters li").removeClass('filter-active');
    //         $(this).addClass('filter-active');
    //
    //         portfolioIsotope.isotope({
    //             filter: $(this).data('filter')
    //         });
    //     });
    //
    //     // Initiate venobox (lightbox feature used in portofilo)
    //     $(document).ready(function() {
    //         $('.venobox').venobox();
    //     });
    // });


</script>

<style scoped>

  .portfolio .portfolio-item {
    margin-bottom: 30px;
  }

  .portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 35px auto;
    list-style: none;
    text-align: center;
    background: #fff;
    border-radius: 50px;
    padding: 2px 15px;
  }

  .portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px 8px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #272829;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
  }

  .portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
    color: #149ddd;
  }

  .portfolio #portfolio-flters li:last-child {
    margin-right: 0;
  }

  .portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .portfolio .portfolio-wrap::before {
    content: "";
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }

  .portfolio .portfolio-wrap .portfolio-links {
    opacity: 1;
    left: 0;
    right: 0;
    bottom: -60px;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: center;
  }

  .portfolio .portfolio-wrap .portfolio-links a {
    color: #fff;
    font-size: 28px;
    text-align: center;
    background: rgba(20, 157, 221, 0.75);
    transition: 0.3s;
    width: 50%;
  }

  .portfolio .portfolio-wrap .portfolio-links a:hover {
    background: rgba(20, 157, 221, 0.95);
  }

  .portfolio .portfolio-wrap .portfolio-links a + a {
    border-left: 1px solid #37b3ed;
  }

  .portfolio .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }

  .portfolio .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    bottom: 0;
  }

</style>
