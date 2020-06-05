<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>
          About
<!--          ::after-->
        </h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 aos-init" data-aos="fade-right">
          <img src="../assets/img/profile-img.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content aos-init" data-aos="fade-left">
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p class="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Birthday:</strong>
                  1 May 1995
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Website:</strong>
                  www.example.com
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Phone:</strong>
                  +123 456 7890
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i> <strong>City:</strong>
                  City : New York, USA
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Age:</strong>
                  30
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Degree:</strong>
                  Master
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>PhEmailone:</strong>
                  email@example.com
                </li>
                <li>
                  <i class="icofont-rounded-right">
<!--                    ::before-->
                  </i>
                  <strong>Freelance:</strong>
                  Available
                </li>
              </ul>
            </div>
          </div>
          <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
            Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "AboutSection"
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
