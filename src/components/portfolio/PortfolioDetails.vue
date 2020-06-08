<template>

  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="portfolio-details-container">
        <div class="owl-carousel portfolio-details-carousel owl-loaded owl-drag">

          <div class="owl-stage-outer">
            <div class="owl-stage" style="transform: translate3d(-2220px, 0px, 0px); transition: all 0.25s ease 0s; width: 7770px;">
              <div v-for="item in carousel" :class=" item.class " style="width: 1110px;">
                <img :src=" item.img " class="img-fluid" alt=""></div>
              <!--::after-->
            </div>
          </div>

          <div class="owl-nav disabled">
            <button v-for="nav in owlNav" type="button" role="presentation" :class=" nav.class "><span :aria-label=" nav.aria ">{{ nav.sign }}</span></button>
          </div>

          <div class="owl-dots">
            <button v-for="dots in owlDots" role="button" :class=" dots.class "><span></span></button>
          </div>
        </div>

        <div class="portfolio-info">
          <h3>{{ titleOne }}</h3>
          <ul><li v-for="info in portfolioInfo"><strong>{{ info.title }}</strong>: <a :href=" info.link "> {{ info.text }}</a></li></ul>
        </div>

      </div>

      <div class="portfolio-description"><h2>{{ titleTwo}}</h2><p>{{ text }}</p></div>

    </div>
  </section>

</template>

<script>
    export default {
        name: "PortfolioDetails",
        data() {
            return {
                carousel: [
                    {class: 'owl-item cloned', img: '../../../static/img/portfolio-details-2.jpg'},
                    {class: 'owl-item cloned', img: '../../../static/img/portfolio-details-3.jpg'},
                    {class: 'owl-item active', img: '../../../static/img/portfolio-details-1.jpg'},
                    {class: 'owl-item', img: '../../../static/img/portfolio-details-2.jpg'},
                    {class: 'owl-item', img: '../../../static/img/portfolio-details-3.jpg'},
                    {class: 'owl-item cloned', img: '../../../static/img/portfolio-details-1.jpg'},
                    {class: 'owl-item cloned', img: '../../../static/img/portfolio-details-2.jpg'},
                ],
                owlNav: [
                    {class: 'owl-prev', aria: 'Previous', sign: '<'},
                    {class: 'owl-next', aria: 'Next', sign: '>'}
                ],
                owlDots: [
                    {class: 'owl-dot active'},
                    {class: 'owl-dot'},
                    {class: 'owl-dot'}
                ],
                titleOne: 'Project information',
                portfolioInfo: [
                    {title: 'Category:', text: ' Web design'},
                    {title: 'Client:', text: ' ASU Company'},
                    {title: 'Project date:', text: ' 01 March, 2020'},
                    {title: 'Project URL:', link: '#', text: ' www.example.com'}
                ],
                titleTwo: 'This is an example of portfolio detail',
                text: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.'
            }
        }
    }
</script>

<style scoped>

  .portfolio-details {
    padding-top: 0;
  }

  .portfolio-details .portfolio-details-container {
    position: relative;
  }

  .portfolio-details .portfolio-details-carousel {
    position: relative;
    z-index: 1;
  }

  .portfolio-details .portfolio-details-carousel .owl-nav, .portfolio-details .portfolio-details-carousel .owl-dots {
    margin-top: 5px;
    text-align: left;
  }

  .portfolio-details .portfolio-details-carousel .owl-dot {
    display: inline-block;
    margin: 0 10px 0 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd !important;
  }

  .portfolio-details .portfolio-details-carousel .owl-dot.active {
    background-color: #149ddd !important;
  }

  .portfolio-details .portfolio-info {
    padding: 30px;
    position: absolute;
    right: 0;
    bottom: -70px;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }

  .portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
  }

  .portfolio-details .portfolio-info ul li + li {
    margin-top: 10px;
  }

  .portfolio-details .portfolio-description {
    padding-top: 50px;
  }

  .portfolio-details .portfolio-description h2 {
    width: 50%;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .portfolio-details .portfolio-description p {
    padding: 0;
  }

  @media (max-width: 768px) {
    .portfolio-details .portfolio-description h2 {
      width: 100%;
    }

    .portfolio-details .portfolio-info {
      position: static;
      margin-top: 30px;
    }
  }

</style>
