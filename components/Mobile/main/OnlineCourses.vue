<template>
  <div
    class="cursos-3d container-fluid d-flex flex-column px-0"
    style="height:100vh;min-height:480px;max-height:600px;position:relative"
  >
    <TheNavbarMobile
      title="Cursos online"
      mySidebarId="CursosOnlineNavbar"
      mySidebarSearchId="CursosOnlineSearch"
      fontColor="#280071"
      backgroundColor="white"
      iconsColor="orange"
    />
    <div
      id="example"
      class="px-2"
      style="height:80vh;min-height:392px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh;"
    >
      <carousel-3d
        :space="carousel3d.space"
        :width="carousel3d.width"
        :height="carousel3d.height"
        :slide-border="0"
      >
        <slide
          v-for="(curso , index) in courses"
          :key="index"
          :index="curso.id"
          style="min-height:425px;"
        >
          <div class="d-flex flex-column justify-content-start pt-0 text-center h-100">
            <div class="ci1 pt-0 d-flex flex-column justify-content-end" style="position:relative;">
              <div class="w-100 d-flex justify-content-start"/>
              <div
                class="subtitle px-4 py-1 d-flex justify-content-center"
                style="position:absolute;left:0;bottom:0;"
              >{{curso.type}}</div>
            </div>
            <div
              class="card-text w-100 d-flex justify-content-end pb-4 px-4 h-50"
              style="padding-top:%;"
            >
              <a href="/cursoSelect" class="d-flex flex-column justify-content-center">
                <div class="title-wrapper d-flex flex-column justify-content-end">
                  <div class="text-left cursos-title px-0">{{curso.name}}</div>
                </div>
                <div class="d-flex flex-column justify-content-end" style="position:relative">
                  <div class="small-text text-left pt-0 pl-lg-1">{{curso.text}}</div>
                  <a href="/cursoSelect">
                    <div class="flecha"/>
                  </a>
                </div>
              </a>
            </div>
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
      },
      courses: [
        {
          id: 0,
          type: "NEGOCIOS",
          name: "Curso de derecho Concursal",
          text:
            "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
        },
        {
          id: 1,
          type: "NEGOCIOS",
          name: "Curso de derecho Financiero",
          text:
            "El Curso de Derecho Financiero abordará en 5 módulos los siguientes temas: contratación con un banco de inversión, operaciones de financiamiento directo y cobertura de riesgo, operaciones de financiamiento mediante mercado de capitales, instituciones de inversión colectiva y fondos de pensiones y project finance."
        },
        {
          id: 2,
          type: "NEGOCIOS",
          name: "Nosotoros",
          text:
            "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
        }
      ]
    };
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
        this.carousel3d.height = 400;
        this.carousel3d.width = 180;
        this.carousel3d.space = 220;
      }
      if (screenWidth >= 320 && screenWidth < 375) {
        this.screenWidth = "mm";
        this.carousel3d.height = 500;
        this.carousel3d.width = 220;
        this.carousel3d.space = 270;
      }
      if (screenWidth >= 375 && screenWidth < 425) {
        this.screenWidth = "ml";
        this.carousel3d.height = 400;
        this.carousel3d.width = 255;
        this.carousel3d.space = 320;
      }
      if (screenWidth >= 425 && screenWidth < 768) {
        this.screenWidth = "t";
        this.carousel3d.height = 400;
        this.carousel3d.width = 320;
        this.carousel3d.space = 410;
      }
      //landscape
      //iphone5
      if (screenWidth >= 568 && screenWidth >= 320) {
        this.carousel3d.height = 400;
        this.carousel3d.width = 340;
        this.carousel3d.space = 430;
      }
      //iphone6/7/8
      if (screenWidth >= 667 && screenWidth >= 375) {
        this.carousel3d.height = 400;
        this.carousel3d.width = 500;
        this.carousel3d.space = 500;
      }
      //iphoneX
      if (screenWidth >= 812 && screenWidth >= 375) {
        this.carousel3d.height = 400;
        this.carousel3d.width = 500;
        this.carousel3d.space = 600;
      }

    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$mm: 320px;
$ml: 375px;
$t: 425px;
$ds: 768px;
$dm: 1024px;
$r: 1440px;
$ds2: 896px;
$dm2: 1232px;
$r2: 2000px;

.carousel-3d-container {
  background-color: white;

  .carousel-3d-slide {
    background-color: white;
    border: none;
  }
}

.cursos-3d {
  font-family: "Merriweather", serif;
  text-shadow: none;

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    max-width: 1800px;
  }

  .subtitle {
    color: #280071;
    font-family: FABRIK;
    background-color: #dcebec;
    font-size: 10px;

    @media screen and (min-width: $r) {
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: $r2) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  .title-text {
    .text {
      color: #280071;
      font-family: FABRIK;
      line-height: 20px;
    }

    .title {
      color: #280071;
      font-family: TIEMPO;
      font-size: 25px;

      @media screen and (min-width: $dm) {
        font-size: 35px;
      }

      @media screen and (min-width: $r) {
        font-size: 45px;
      }

      @media screen and (min-width: $r2) {
        font-size: 55px;
      }
    }
  }

  .text_container {
    height: 55%;
  }

  .ci1 {
    background-image: url(/Home/Fotos-IDEM--15.png);
    height: 40%;
    background-size: cover;
    background-position: center;
  }

  .title-wrapper {
    min-width: 150px;

    @media screen and (min-width: $r) {
      min-width: 200px;
      padding-right: 20px;
    }

    @media screen and (min-width: $r2) {
      min-width: 240px;
      padding-right: 20px;
    }

    .cursos-title {
      color: #fb4030;
      font-size: 12px;
      padding-right: 15%;
      line-height: 15px;
      text-shadow: none;
      font-family: TIEMPO;

      @media screen and (min-width: $t) {
        font-size: 16px;
        line-height: 20px;
      }

      @media screen and (min-width: $r) {
        font-size: 20px;
        line-height: 25px;
      }

      @media screen and (min-width: $r2) {
        font-size: 25px;
        line-height: 30px;
      }
    }
  }

  .card-text {
    padding-right: 15%;
    padding-top: 5%;
    height: 55%;
    background-color: #dcebec;
    font-family: FABRIK;
    //iphnoe4
    @media only screen and (min-width: 425px) and (max-height: 320px) {
      padding-top: 0%;
    }
    //iphnoe5
    @media only screen and (min-width: 568px) and (max-height: 320px) {
      padding-top: 0%;
    }

    //iphnoe 6/7/8
    @media only screen and (min-width: 667px) and (max-height: 414px) {
      padding-top: 0%;
    }

    //iphnoe x
    @media only screen and (min-width: 811px) and (max-height: 375px) {
      padding-top: 0%;
    }

    .flecha {
      position: absolute;
      left: 90%;
      top: 100%;
      background-image: url(/cursoSelect/flechaRoja.png);
      background-size: cover;
      cursor: pointer;
      height: 12px;
      width: 20px;

      @media screen and (min-width: $ml) {
        top: 90%;
        height: 17px;
        width: 28px;
      }

      //landscape iphnoe4 and 5
      @media only screen and (min-width: 425px) and (max-height: 425px) {
        top: 90%;
        height: 17px;
        max-width: 28px;
      }
    }
  }

  .cursos-text {
    color: #43398a;
    font-size: 8px;
    line-height: 10px;
    text-shadow: none;
    padding-bottom: 10%;

    @media screen and (min-width: $dm) {
      font-size: 10px;
      line-height: 12px;
    }

    @media screen and (min-width: $r) {
      font-size: 15px;
      line-height: 20px;
    }

    @media screen and (min-width: $r2) {
      font-size: 18px;
      line-height: 23px;
    }
  }
}
</style>
