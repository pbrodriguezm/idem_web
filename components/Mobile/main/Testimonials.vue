<template>
  <div
    class="testimoniosMobile container-fluid d-flex flex-column px-0"
    style="height:90vh;min-height:480px;position:relative;"
  >
    <TheNavbarMobile
      mySidebarId="TestimoniosNavbar"
      title="Testimonios"
      fontColor="#280071"
      backgroundColor="white"
    />
    <div
      id="example"
      style="height:70vh;min-height:384px;display:flex;flex-direction:column;justify-content:center;margin-top:20vh"
    >
      <div class="container screen1 h-100 pb-0 d-flex justify-content-center">
        <div class="texto h-100 text-left d-flex justify-content-center">
          <div class="d-flex justify-content-center flex-column h-100">
            <div class="text-container d-flex flex-column justify-content-center h-100">
              <p class="comillas m-0 p-0" style="height:54px">“</p>
              <p
                class="hero-title"
              >Me alegró saber que al capacitarme, personas con menores recursos obtendrían beneficios"</p>
              <p class="normal-text nombre pt-2">-Christian Paredes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
.testimoniosMobile{
  .screen1 {
    z-index: -4;
    background-image: url("/Donaciones/testimonio_1_bg.png");
    background-size: cover;
    max-width: 5000px;
    .text-container {
      @media screen and (min-width: $t) {
        max-width: 500px;
      }
      .nombre{
        color:$color-secondary;
      }
      .comillas {
        color: #43398a;
        font-family: TIEMPO;
        font-size: 75px;
        @media screen and (min-width: $ds) {
          font-size: 55px;
        }
        @media screen and (min-width: $dm) {
          font-size: 60px;
        }
        @media screen and (min-width: $r) {
          font-size: 80px;
        }
        @media screen and (min-width: $r2) {
          font-size: 100px;
        }
      }
    }
  }
}
</style>
