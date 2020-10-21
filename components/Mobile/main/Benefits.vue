<template>
  <div
    class="beneficos-3d container-fluid d-flex flex-column px-0"
    style="height:100vh;position:relative"
  >
    <TheNavbarMobile
      mySidebarId="beneficiosNavbar"
      title="Beneficios"
      fontColor="white"
      backgroundColor="#FB4030"
      iconsColor="white"
    />
    <div
      id="example"
      class="d-flex flex-column w-100 px-2"
      style="height:100%;max-height:480px;margin-top:20vh;"
    >
      <carousel-3d
        :space="carousel3d.space"
        :width="carousel3d.width"
        :height="carousel3d.height"
        :slide-border="0"
      >
        <slide
          v-for="(Benefict,index) in Beneficts"
          :key="index"
          class="d-flex flex-column justify-content-center"
          :index="Benefict.id"
        >
          <div class="d-flex justify-content-center w-100 pb-2 p-lg-2">
            <div class="d-flex justify-content-center flex-column">
              <div class="icon1" :style="{backgroundImage:`url(${Benefict.imageUrl})`}"/>
            </div>
          </div>
          <div class="d-flex justify-content-center w-100 pb-2 p-lg-2">
            <span class="normal-text text-center px-lg-2 px-xl-3">{{Benefict.text}}</span>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data: function() {
    return {
      screenWidth: 40,
      carousel3d: {
        height: 0,
        width: 0,
        space: 0
      }
    };
  },
  computed: {
    Beneficts() {
      return this.$store.state.contenido.main.Beneficts;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;
      if (screenWidth < 320) {
        this.screenWidth = "ms";
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 180;
        this.carousel3d.space = 220;
      }
      if (screenWidth >= 320 && screenWidth < 375) {
        this.screenWidth = "mm";
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 220;
        this.carousel3d.space = 270;
      }
      if (screenWidth >= 375 && screenWidth < 425) {
        this.screenWidth = "ml";
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 240;
        this.carousel3d.space = 320;
      }
      if (screenWidth >= 425 && screenWidth < 768) {
        this.screenWidth = "t";
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 320;
        this.carousel3d.space = 410;
      }
      //landscape
      //iphone5
      if (screenWidth >= 568 && screenWidth >= 320) {
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 340;
        this.carousel3d.space = 430;
      }
      //iphone6/7/8
      if (screenWidth >= 667 && screenWidth >= 375) {
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 450;
        this.carousel3d.space = 500;
      }
      //iphoneX
      if (screenWidth >= 812 && screenWidth >= 375) {
        this.carousel3d.height = (window.innerHeight * 7) / 10;
        this.carousel3d.width = 450;
        this.carousel3d.space = 600;
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
.beneficos-3d {
  background-color: $color-secondary;
  .carousel-3d-container {
    background-color: $color-secondary;
    .carousel-3d-slide {
      background-color: $color-secondary;
      border: none;
      .normal-text {
        color: $color-terceary;
      }
    }
  }
  .icon1 {
    height: 120px;
    width: 120px;
    background-size: cover;
    @media screen and (min-width: $dm) {
      height: 40px;
      width: 40px;
    }
    @media screen and (min-width: $r) {
      height: 60px;
      width: 60px;
    }
    @media screen and (min-width: $r2) {
      height: 80px;
      width: 80px;
    }
  }
}
</style>
