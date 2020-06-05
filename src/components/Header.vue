<template>

  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="../assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="../../index.html">Alex Smith</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter">
            <i class="bx bxl-twitter">
<!--              ::before-->
            </i>
          </a>
          <a href="#" class="facebook">
            <i class="bx bxl-facebook">
<!--              ::before-->
            </i>
          </a>
          <a href="#" class="instagram">
            <i class="bx bxl-instagram">
<!--              ::before-->
            </i>
          </a>
          <a href="#" class="google-plus">
            <i class="bx bxl-skype">
<!--              ::before-->
            </i>
          </a>
          <a href="#" class="linkedin">
            <i class="bx bxl-linkedin">
<!--              ::before-->
            </i>
          </a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li class="active">
            <a href="../../index.html">
              <i class="bx bx-home">
<!--                ::before-->
              </i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
            <i class="bx bx-user">
<!--              ::before-->
            </i>
            <span>About</span>
          </a>
          </li>
          <li>
            <a href="#resume">
              <i class="bx bx-file-blank">
<!--                ::before-->
              </i>
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i class="bx bx-book-content">
<!--                ::before-->
              </i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services">
              <i class="bx bx-server">
<!--                ::before-->
              </i>
              Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <i class="bx bx-envelope">
<!--                ::before-->
              </i>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <!-- .nav-menu -->
      <button type="button" class="mobile-nav-toggle d-xl-none">
        <i class="icofont-navigation-menu">
<!--          ::before-->
        </i>
      </button>
    </div>
  </header>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

  #header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transition: all ease-in-out 0.5s;
    z-index: 9997;
    transition: all 0.5s;
    padding: 0 15px;
    background: #040b14;
    overflow-y: auto;
  }

  #header .profile img {
    margin: 15px auto;
    display: block;
    width: 120px;
    border: 8px solid #2c2f3f;
  }

  #header .profile h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: 600;
    -moz-text-align-last: center;
    text-align-last: center;
    font-family: "Poppins", sans-serif;
  }

  #header .profile h1 a, #header .profile h1 a:hover {
    color: #fff;
    text-decoration: none;
  }

  #header .profile .social-links a {
    font-size: 18px;
    display: inline-block;
    background: #212431;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
  }

  #header .profile .social-links a:hover {
    background: #149ddd;
    color: #fff;
    text-decoration: none;
  }

  .nav-menu {
    padding-top: 30px;
  }

  .nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
  }

  .nav-menu a {
    display: flex;
    align-items: center;
    color: #a8a9b4;
    padding: 12px 15px;
    margin-bottom: 8px;
    transition: 0.3s;
    font-size: 15px;
  }

  .nav-menu a i {
    font-size: 24px;
    padding-right: 8px;
    color: #6f7180;
  }

  .nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
    text-decoration: none;
    color: #fff;
  }

  .nav-menu a:hover i, .nav-menu .active > a i, .nav-menu li:hover > a i {
    color: #149ddd;
  }

</style>
