<template>

  <section id="testimonials" class="testimonials section-bg">
    <div class="container">

      <div class="section-title"><h2>{{ title }}<!--::after--></h2><p>{{ text }}</p></div>

      <div class="owl-carousel testimonials-carousel owl-loaded owl-drag">

        <div class="owl-stage-outer">
          <div class="owl-stage" style="transform: translate3d(-2550px, 0px, 0px); transition: all 0.25s ease 0s; width: 5610px;">

            <div v-for="testimonial in testimonials" :class=" testimonial.class " style="width: 510px;">
              <div class="testimonial-item aos-init" data-aos="fade-up" :data-aos-delay=" testimonial.data ">
                <p><i class="bx bxs-quote-alt-left quote-icon-left"><!--::before--></i> {{ testimonial.text }}
                  <i class="bx bxs-quote-alt-right quote-icon-right"><!--::before--></i><!--::after--></p>
                <img :src=" testimonial.src " class="testimonial-img" alt="">
                <h3>{{ testimonial.name }}</h3><h4>{{ testimonial.job }}</h4></div>
            </div>

          </div>
        </div>

        <div class="owl-nav disabled">
          <button v-for="nav in owlNav" type="button" role="presentation" :class=" nav.class ">
            <span :aria-label=" nav.aria ">{{ nav.sign }}</span></button>
        </div>

        <div class="owl-dots">
          <button v-for="dots in owlDots" role="button" :class=" dots.class "><span></span></button>
        </div>
      </div>

    </div>
  </section>

</template>

<script>

    import carousel from 'vue-owl-carousel'

    export default {
        name: "TestimonialsSection",

        data() {
            return {
                title: 'Testimonials',
                text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
                testimonials: [
                    {
                        class: 'owl-item cloned',
                        data: '200',
                        text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                        src: '../static/img/testimonials/testimonials-3.jpg',
                        name: 'Jena Karlis',
                        job: 'Store Owner'
                    },
                    {
                        class: 'owl-item cloned',
                        data: '300',
                        text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                        src: '../static/img/testimonials/testimonials-4.jpg',
                        name: 'Matt Brandon',
                        job: 'Freelancer'
                    },
                    {
                        class: 'owl-item cloned',
                        data: '400',
                        text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa abore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                        src: '../static/img/testimonials/testimonials-5.jpg',
                        name: 'John Larson',
                        job: 'Entrepreneur'
                    },
                    {
                        class: 'owl-item',
                        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                        src: '../static/img/testimonials/testimonials-1.jpg',
                        name: 'Saul Goodman',
                        job: 'Ceo & Founder'
                    },
                    {
                        class: 'owl-item',
                        data: '100',
                        text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                        src: '../static/img/testimonials/testimonials-2.jpg',
                        name: 'Sara Wilsson',
                        job: 'Designer'
                    },
                    {
                        class: 'owl-item active',
                        data: '200',
                        text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                        src: '../static/img/testimonials/testimonials-3.jpg',
                        name: 'Jena Karlis',
                        job: 'Store Owner'
                    },
                    {
                        class: 'owl-item',
                        data: '300',
                        text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                        src: '../static/img/testimonials/testimonials-4.jpg',
                        name: 'Matt Brandon',
                        job: 'Freelancer'
                    },
                    {
                        class: 'owl-item',
                        data: '400',
                        text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa abore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                        src: '../static/img/testimonials/testimonials-5.jpg',
                        name: 'John Larson',
                        job: 'Entrepreneur'
                    },
                    {
                        class: 'owl-item cloned',
                        text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                        src: '../static/img/testimonials/testimonials-1.jpg',
                        name: 'Saul Goodman',
                        job: 'Ceo & Founder'
                    },
                    {
                        class: 'owl-item cloned',
                        data: '100',
                        text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                        src: '../static/img/testimonials/testimonials-2.jpg',
                        name: 'Sara Wilsson',
                        job: 'Designer'
                    },
                    {
                        class: 'owl-item cloned',
                        data: '200',
                        text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                        src: '../static/img/testimonials/testimonials-3.jpg',
                        name: 'Jena Karlis',
                        job: 'Store Owner'
                    }
                ],
                owlNav: [
                    {class: 'owl-prev', aria: 'Previous', sign: '<'},
                    {class: 'owl-next', aria: 'Next', sign: '>'}
                ],
                owlDots: [
                    {class: 'owl-dot'},
                    {class: 'owl-dot active'}
                ]
            }
        },
        components: {carousel}
    }

</script>

<style scoped>

  .testimonials .testimonial-item {
    box-sizing: content-box;
    text-align: center;
    min-height: 320px;
  }

  .testimonials .testimonial-item .testimonial-img {
    width: 90px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .testimonials .testimonial-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
  }

  .testimonials .testimonial-item h4 {
    font-size: 14px;
    color: #999;
    margin: 0;
  }

  .testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
    color: #c3e8fa;
    font-size: 26px;
  }

  .testimonials .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }

  .testimonials .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }

  .testimonials .testimonial-item p {
    font-style: italic;
    margin: 0 15px 15px 15px;
    padding: 20px;
    background: #fff;
    position: relative;
    margin-bottom: 35px;
    border-radius: 6px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  .testimonials .testimonial-item p::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid #fff;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    position: absolute;
    bottom: -20px;
    left: calc(50% - 20px);
  }

  .testimonials .owl-nav, .testimonials .owl-dots {
    margin-top: 5px;
    text-align: center;
  }

  .testimonials .owl-dot {
    display: inline-block;
    margin: 0 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ddd !important;
  }

  .testimonials .owl-dot.active {
    background-color: #149ddd !important;
  }

  @media (max-width: 767px) {
    .testimonials {
      margin: 30px 10px;
    }
  }

</style>
