<template>

  <footer id="footer">
    <div class="container">
      <div class="copyright">© Copyright <strong><span>iPortfolio</span></strong></div>
      <div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
    </div>
  </footer>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

  #footer {
    padding: 15px;
    color: #f4f6fd;
    font-size: 14px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 300px;
    z-index: 9999;
    background: #040b14;
  }

  #footer .copyright {
    text-align: center;
  }

  #footer .credits {
    padding-top: 5px;
    text-align: center;
    font-size: 13px;
    color: #eaebf0;
  }

  @media (max-width: 1199px) {
    #footer {
      position: static;
      width: auto;
      padding-right: 20px 15px;
    }
  }

</style>
