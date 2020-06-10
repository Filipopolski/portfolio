<template>

  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile"><img :src=" profileImg " alt="" class="img-fluid rounded-circle"><h1 class="text-light"><a :href=" index ">{{ author }}</a></h1>
        <div class="social-links mt-3 text-center"><a v-for="social in socials" href="#" :class=" social.name "><box-icon type="logo" color="white" :name=" social.icon "><!--::before--></box-icon></a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul><li v-for="item in items"><a :href=" item.way "><box-icon :name=" item.icon " color="#6f7180"><!--::before--></box-icon><span>{{ item.text }}</span></a></li></ul>
      </nav>

      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"><!--::before--></i></button>
    </div>
  </header>

</template>

<script>

    export default {
        name: "Header",
        data() {
            return {
                author: 'Alex Smith',
                index: '../index.html',
                profileImg: '../static/img/profile-img.jpg',
                socials: [
                    {name: 'twitter', icon: 'twitter'},
                    {name: 'facebook', icon: 'facebook'},
                    {name: 'instagram', icon: 'instagram'},
                    {name: 'google-plus', icon: 'skype'},
                    {name: 'linkedin', icon: 'linkedin'}
                ],
                items: [
                    {way: '../index.html', icon: 'home', text: 'Home'},
                    {way: '#about', icon: 'user', text: 'About'},
                    {way: '#resume', icon: 'file-blank', text: 'Resume'},
                    {way: '#portfolio', icon: 'book-content', text: 'Portfolio'},
                    {way: '#services', icon: 'server', text: 'Services'},
                    {way: '#contact', icon: 'envelope', text: 'Contact'}
                ],
            }
        }
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

  @media (max-width: 1199px) {
    #header {
      left: -300px;
    }
  }

</style>
