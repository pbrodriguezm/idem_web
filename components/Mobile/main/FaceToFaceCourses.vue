<template>
  <div
    class="cursosPresencialesMobile container-fluid d-flex flex-column justify-content-end px-0"
    style="height:90vh;min-height:480px;max-height:600px;position:relative"
  >
    <TheNavbarMobile
      mySidebarId="cursosPrecesncialesNavbar"
      id="123"
      title="Cursos presenciales"
      fontColor="#280071"
      backgroundColor="white"
    />
    <a href="/cursos_presenciales_selectos">
    <div
      id="example"
      style="height:70vh;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh"
    >
      <div class="container screen1 h-100 p-5 pb-0 d-flex justify-content-center">
           <a href="/cursos_presenciales_selectos">
        <div class="h-100 text-left d-flex flex-column justify-content-center">
          <div class="small-text">(*)Próximamente</div>
          <div class="small-text d-flex">
            <div class="mr-1"/>Arequipa / Set 28-29
          </div>
          <div class="my-2 hero-title">Seminario de derecho tributario*</div>
            <div class="d-flex">
              <div
                class="d-flex flex-column justify-content-center"
                style="height:10px;margin-top:5px;"
              >
                <div class="flecha"/>
              </div>
              <div class="px-2 flecha-text small-text">Ver mas</div>
            </div>
        </div>
          </a>

      </div>
    </div>
    </a>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";

.cursosPresencialesMobile {
  .screen1 {
    z-index: -4;
    font-size: 30px;
    max-width: 5000px;
    background-image: url(/Home/Fotos-IDEM--08.png);
    background-size: cover;
  }
  .flecha-text {
    color: $color-secondary;
  }

  .cursos-title {
    opacity: 1;
    color: #280071;
    font-weight: 100;
    text-decoration: none;
    font-family: TIEMPO;

    @media screen and (min-width: $ds) {
      font-size: 32px;
      line-height: 34px;
    }

    @media screen and (min-width: $dm) {
      font-size: 34px;
      line-height: 36px;
    }

    @media screen and (min-width: $r) {
      font-size: 45px;
      line-height: 47px;
    }

    @media screen and (min-width: $ds2) {
      font-size: 32px;
      line-height: 34px;
    }

    @media screen and (min-width: $dm2) {
      font-size: 35px;
      line-height: 37px;
    }

    @media screen and (min-width: $r2) {
      font-size: 50px;
      line-height: 52px;
    }
  }

  .screen2 {
    z-index: -4;
    background-color: #dbebeb;
  }

  .img-fluid {
    z-index: -5;
    height: 100%;
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 15;
    top: 67.5%;
    background-color: #270071;
    max-height: 35px;
    max-width: 50px;
    opacity: 1;
  }

  .carousel-control-prev {
    left: calc(67% + 100px);
  }

  .carousel-control-next {
    left: calc(67% + 150px);
  }

  .text2 {
    opacity: 1;
    color: #280071;
    min-width: 400px;
    text-align: left;
    font-size: 15px;
    font-weight: 100;
    position: absolute;
    margin-left: -200px;
    background-color: white;
    z-index: 35;
    height: 35%;
    width: 35%;
  }
  .hero-title {
    text-decoration: underline #280071;
    font-size: 36px;
    line-height: 40px;
    @media screen and (min-width: $mm) {
      font-size: 36px;
      line-height: 40px;
    }
    //mobile
    @media screen and (min-width: $ml) {
      font-size: 36px;
      line-height: 40px;
    }

    @media screen and (min-width: $t) {
      font-size: 46px;
      line-height: 52px;
    }
    @media screen and (min-width: $t2) {
      font-size: 46px;
      line-height: 52px;
    }
    //iphnoe4
    @media only screen and (min-width: 425px) and (max-height: 320px) {
      font-size: 36px;
      line-height: 40px;
    }
    //iphnoe5
    @media only screen and (min-width: 568px) and (max-height: 320px) {
      font-size: 46px;
      line-height: 52px;
    }

    //iphnoe 6/7/8
    @media only screen and (min-width: 736px) and (max-height: 414px) {
      font-size: 46px;
      line-height: 52px;
    }

    //iphnoe x
    @media only screen and (min-width: 811px) and (max-height: 375px) {
      font-size: 46px;
      line-height: 52px;
    }
  }
  .pin-icon {
    height: 15px;
    width: 15px;
    background-image: url(/pin.png);
    background-size: cover;
  }
  .flecha {
    height: 12px;
    width: 19px;
    background-image: url(/cursoSelect/flechaRoja.png);
    background-size: cover;
  }
}
</style>
