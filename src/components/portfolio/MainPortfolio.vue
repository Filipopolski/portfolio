<template>

  <main id="main">

    <breadcrumbs></breadcrumbs>
    <portfolio-details></portfolio-details>

  </main>

</template>

<script>

    import Breadcrumbs from "./Breadcrumbs";
    import PortfolioDetails from "./PortfolioDetails";

    export default {
        name: "Main",
        components: {
            breadcrumbs: Breadcrumbs,
            portfolioDetails: PortfolioDetails
        }
    }

</script>

<style scoped>

  #main {
    margin-left: 300px;
  }

  @media (max-width: 1199px) {
    #main {
      margin-left: 0;
    }
  }

</style>
