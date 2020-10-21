<template>
  <div class="Footer container-fluid w-100">
    <div class="d-flex">
      <div class="footer-content-wrapper">
        <div class="info-wrapper">
          <div class="help normal-text">¿Necesitas ayuda? Comunicate con nosotros.</div>
          <div class="options">
            <div class="column" v-for="OptionsRow in OptionRows">
              <div v-for="Option in OptionsRow">
                <nuxt-link :to="Option.linkUrl">
                  <div class="option normal-text">{{Option.name}}</div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="info-wrapper2">
          <div class="mail normal-text">informes@idem.org.pe</div>
          <div class="paymentMethods">
            <div class="paymentMethodWrapper" v-for="method in paymentMethod">
              <div class="paymentMethod" :style="{backgroundImage:`url(${method.imageUrl})`}"/>
            </div>
          </div>
          <div class="conditions normal-text">Terminos y condiciones</div>
        </div>
      </div>
      <div class="icon-container">
        <div class="icon"/>
      </div>
    </div>
    <div class="derechos small-text">2019 - IDEM Derechos Reservados</div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    OptionRows() {
      let allOptions = this.$store.state.contenido.layout.footer.footerLinks;
      let OptionRowElmNumber = Math.ceil(allOptions.length / 2);
      let OptionsRow = [];
      let OptionsRows = [];
      for (let i = 0; i < allOptions.length; i++) {
        let elm = JSON.stringify(allOptions[i]);
        elm = JSON.parse(elm);
        OptionsRow.push(elm);
        if (OptionsRow.length == OptionRowElmNumber) {
          let elm2 = JSON.stringify(OptionsRow);
          elm2 = JSON.parse(elm2);
          OptionsRows.push(OptionsRow);
          OptionsRow = [];
        }
        if (i == allOptions.length - 1 && OptionsRow.length > 0) {
          let elm3 = JSON.stringify(OptionsRow);
          elm3 = JSON.parse(elm3);
          OptionsRows.push(OptionsRow);
        }
      }
      // return OptionsRows
      console.log("aca" + OptionsRows.length);
      return OptionsRows;
    },
    paymentMethod() {
      let paymentMethods = this.$store.state.contenido.layout.footer.paymentM;
      return paymentMethods;
    }
  },
  methods: {
    getLink(link) {
      let localUrl = window.location.pathname;
      let cutPoint = 99999999;
      let seconUrl = "";
      let firstUrl = "";
      let compareUrl = "";
      //extraes las palabras
       for (let index = 1; index < link.length; index++) {
         if (link[index] == "/") {
           cutPoint = index;
         } else {
           if(cutPoint < index) {
             seconUrl = seconUrl + link[index];
           } else if(cutPoint > index) {
             firstUrl = firstUrl + link[index];
           }
         }
       }
      //extraes la primera palabra del link
        for (let i = 1; i <= firstUrl.length; i++) {
             compareUrl = compareUrl + localUrl[i];
      }
      console.log("el link q apunto es: " + link);
      console.log("aca carajo:" + firstUrl);
      console.log("aca carajo2:" + seconUrl);
      console.log("aca carajo3:" + compareUrl);
      console.log(localUrl)
      console.log(cutPoint)
      //   comparas
      if(compareUrl == firstUrl){
        console.log("retornare: " + seconUrl)
        return seconUrl;
      }else{
        console.log("retornare: " + link)
        return link;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/mixins/breakpoints";
$mm: 375px;
$ml: 425px;
$ds: 768px;
$dm: 1024px;
$r: 1440px;
$ds2: 896px;
$dm2: 1232px;
$r2: 2000px;

.Footer {
  background-color: $color-primary;
  font-family: FABRIK;
  position: relative;
  color: white;
  padding: 50px 100px 30px 60px;
  font-size: 14px;

  @media screen and (min-width: $dm) {
    padding: 80px 140px 50px 100px;
  }

  @media screen and (min-width: $r) {
    padding: 100px 190px 70px 150px;
  }

  @media screen and (min-width: $r2) {
    padding: 120px 260px 90px 200px;
  }

  .footer-content-wrapper {
    display: flex;
    width: 60%;

    .info-wrapper {
      display: flex;
      flex-direction: column;
      min-width: 50%;

      .normal-text {
        color: $color-terceary;
      }

      .help {
      }

      .options {
        display: flex;
        padding-top: 30px;

        .column {
          width: 50%;
          display: flex;
          flex-direction: column;

          .option {
            padding: 5px;
          }
        }
      }
    }

    .info-wrapper2 {
      display: flex;
      flex-direction: column;
      min-width: 50%;
      padding-left: 30px;

      .normal-text {
        color: $color-terceary;
      }

      .mail {
      }

      .paymentMethods {
        display: flex;
        padding-top: 20px;

        .paymentMethodWrapper {
          padding: 10px;

          .paymentMethod {
            width: 40px;
            height: 40px;
            background-size: cover;

            @media screen and (min-width: $dm) {
              width: 50px;
              height: 50px;
            }

            @media screen and (min-width: $r) {
              width: 70px;
              height: 70px;
            }

            @media screen and (min-width: $r2) {
              width: 80px;
              height: 80px;
            }
          }
        }
      }

      .conditions {
        padding-top: 30px;

        text-decoration: underline $color-terceary;

        @media screen and (min-width: $dm) {
          padding-top: 30px;
        }

        @media screen and (min-width: $r) {
          padding-top: 30px;
        }

        @media screen and (min-width: $r2) {
          padding-top: 30px;
        }
      }
    }
  }

  .icon-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 40%;
    min-height: 100%;

    .icon {
      height: 65px;
      width: 65px;
      background-image: url(/LogoBlanco.png);
      background-size: cover;

      @media screen and (min-width: $dm) {
        height: 80px;
        width: 80px;
      }

      @media screen and (min-width: $r) {
        height: 90px;
        width: 90px;
      }

      @media screen and (min-width: $r2) {
        height: 120px;
        width: 120px;
      }
    }
  }

  .derechos {
    width: 100%;
    text-align: center;
    padding-top: 20px;
  }

  .small-text {
    color: $color-terceary;
  }
}
</style>
