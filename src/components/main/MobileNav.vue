<template>

  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"><!--:before--></i></button>

</template>

<script>
    export default {
        name: "MobileNav"
    }
</script>

<style scoped>

  .mobile-nav-toggle {
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }

  .mobile-nav-toggle i {
    color: #149ddd;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active #header {
    left: 0;
  }

  .mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
  }

</style>
