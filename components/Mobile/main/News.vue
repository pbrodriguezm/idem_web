<template>
  <div class="NoticiasMobile container-fluid d-flex flex-column  justify-content-end px-0" style="height70vh;min-height:480px;max-height:600px;position:relative">
    <TheNavbarMobile mySidebarId="NoticiasNavbar" title="Noticias" fontColor="#280071" backgroundColor="white" />
    <div id="example" class="" style="height:60vh;min-height:400px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh">
      <carousel-3d :space="carousel3d.space" :width="carousel3d.width" :height="carousel3d.height" class="d-flex justify-content-center flex-column m-0 h-100" :slide-border="0">
        <slide v-for="curso in courses" :index="curso.id" >
          <div class="card d-flex flex-column justify-content-center pt-0 text-center h-100">
            <div class="card-image ci2 w-100 pt-0 d-flex flex-column justify-content-end">
              <div class="w-100 d-flex justify-content-start">
                <div class="cursos-button px-2 py-0 w-50">Negocios</div>
              </div>
            </div>
            <div class="card-text w-100 d-flex flex-column justify-content-start pt-0 px-2">
              <span class="cursos-text text-left pt-2 p-0 pt-2">
                    Lorem ipsum dolor sit amet,asdsad asdasd asd asd consectetur adipiscing elit.
                </span>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
  </div>
</template>

<script>
  import {
    Carousel3d,
    Slide
  } from 'vue-carousel-3d';
  export default {
    components: {
      Carousel3d,
      Slide,
    },
    data: function() {
      return {
        screenWidth: 40,
        carousel3d: {
          height: 0,
          width: 0,
          space: 0,
        },
        slides: 7,
        courses: [{
            id: 0,
            type: 'NEGOCIOS',
            name: 'Curso de derecho Concursal',
            text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
          },
          {
            id: 1,
            type: 'NEGOCIOS',
            name: 'Curso de derecho Financiero',
            text: "El Curso de Derecho Financiero abordará en 5 módulos los siguientes temas: contratación con un banco de inversión, operaciones de financiamiento directo y cobertura de riesgo, operaciones de financiamiento mediante mercado de capitales, instituciones de inversión colectiva y fondos de pensiones y project finance."
          },
          {
            id: 2,
            type: 'NEGOCIOS',
            name: 'Nosotoros',
            text: "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A."
          }
        ]
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        var screenWidth = window.innerWidth;
        if (screenWidth < 320) {
          this.screenWidth = 'ms'
          this.carousel3d.height = 400
          this.carousel3d.width = 180
          this.carousel3d.space = 220
        }
        if (screenWidth >= 320 && screenWidth < 375) {
          this.screenWidth = 'mm'
          this.carousel3d.height = 400
          this.carousel3d.width = 190
          this.carousel3d.space = 250
        }
        if (screenWidth >= 375 && screenWidth < 425) {
          this.screenWidth = 'ml'
          this.carousel3d.height = 400
          this.carousel3d.width = 220
          this.carousel3d.space = 290
        }
        if (screenWidth >= 425 && screenWidth < 768) {
          this.screenWidth = 't'
          this.carousel3d.height = 400
          this.carousel3d.width = 300
          this.carousel3d.space = 390
        }
        if (screenWidth >= 768 && screenWidth < 1024) {
          // this.screenWidth = 'ds'
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 1024 && screenWidth < 1440) {
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 1440 && screenWidth < 2560) {
          this.screenWidth = 'nm'
        }
        if (screenWidth >= 2560) {
          this.screenWidth = 'nm'
        }
        console.log('asda' + this.screenWidth)
      },
      // changeCarouselProperties() {
      //   switch (this.screenWidth) {
      //     case 'ms':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 170
      //       this.carousel3d.space = 190
      //       break;
      //     case 'mm':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 500
      //       break;
      //     case 'ml':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 100
      //       break;
      //     case 't':
      //       this.carousel3d.height = 700
      //       this.carousel3d.width = 400
      //       this.carousel3d.space = 500
      //       break;
      //       defalut: break;
      //   }
      // }
      // $mm:375px;
      // $ml:425px;
      // $ds:768px;
      // $dm:1024px;
      // $r:1440px;
      // $ds2:896px;
      // $dm2:1232px;
      // $r2:2000px;
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/variables";
  @import "node_modules/bootstrap/scss/mixins/breakpoints";
  $ds:768px;
  $dm:1024px;
  $r:1440px;
  $ds2:896px;
  $dm2:1232px;
  $r2:2000px;
  .NoticiasMobile {
    .carousel-3d-container {
      background-color: #FB4030;
      .carousel-3d-slide {
        background-color: #FB4030;
        border: none;
      }
    }
    .Noticias-title {
      font-size: 35px;
      font-family: TIEMPO;
    }
    .img-fluid {
      height: 100%;
      visibility: hidden;
      border-color: transparent;
    }
    .card {
      height: 100%;
      width: 100%;
      background-color: #fb4030;
      border: none;
    }
    .card-image {
      min-height: 100px;
    }
    .ci1 {
      background-image: url(/noticias/1.jpg);
      background-size: cover;
      background-position: right;
    }
    .ci2 {
      background-image: url(/noticias/2.jpg);
      background-size: cover;
      background-position: right;
    }
    .ci3 {
      background-image: url(/noticias/3.jpg);
      background-size: cover;
      background-position: right;
    }
    .cursos-title {
      color: white;
      font-size: 18px;
      padding-right: 15%;
      line-height: 19px;
      opacity:0.6;
    }
    .cursos-button {
      font-size: 9px;
      background-color: #fb4030;
      color: white;
      font-family: FABRIK;
    }
    .cursos-text {
      color: white;
      font-size: 10px;
      line-height: 10px;
      font-family: FABRIK;
      opacity:0.6;
    }
    .icon1 {
      height: 40px;
      width: 40px;
      background-image: url(/FooterXX/American.png);
      background-size: cover;
    }
    .icon2 {
      height: 40px;
      width: 40px;
      background-image: url(/FooterXX/Dinner.png);
      background-size: cover;
    }
    .icon3 {
      height: 40px;
      width: 40px;
      background-image: url(/FooterXX/PayPal.png);
      background-size: cover;
    }
    .icon4 {
      height: 40px;
      width: 40px;
      background-image: url(/FooterXX/VISA.png);
      background-size: cover;
    }
    .icon5 {
      height: 40px;
      width: 40px;
      background-image: url(/FooterXX/CARTA.png);
      background-size: cover;
    }
    .carousel-caption {
      height: 100%;
    }
    .carr {}
  }
</style>
