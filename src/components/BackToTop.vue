<template>

  <a href="#" class="back-to-top" style="display: none;"><i class="icofont-simple-up"><!--:before--></i></a>

</template>

<script>
    export default {
        name: "BackToTop"
    }
</script>

<style scoped>

  .back-to-top {
    position: fixed;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    right: 15px;
    bottom: 15px;
    background: #149ddd;
    color: #fff;
    transition: display 0.5s ease-in-out;
    z-index: 99999;
  }

  .back-to-top i {
    font-size: 24px;
    position: absolute;
    top: 7px;
    left: 8px;
  }

  .back-to-top:hover {
    color: #fff;
    background: #2eafec;
    transition: background 0.2s ease-in-out;
  }

</style>
