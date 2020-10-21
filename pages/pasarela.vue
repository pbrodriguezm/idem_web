<template>
  <div id="container app">
    <Payment/>
  </div>
</template>

<script>
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from '~/components/Desktop/selectCourse/Payment'
export default {
  components: {
    Payment
  },
   data: function () {
        return {
            screenWidth: 0,
            screenType: "",
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
            var screenHeight = window.innerHeight;
            switch (true) {
                case ((screenWidth <= 425) || (screenHeight <= 425)):
                    this.screenType = 'mobile'
                    break;
                case screenWidth <= 1024 && screenWidth > 425:
                    this.screenType = 'tablet'
                    break;
                case screenWidth > 1024:
                    this.screenType = 'desktop'
                    break;
                    defalut: break;
            }
            console.log('asda' + this.screenType)
        },
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
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$maximum-breakpoint-before-expand: ml;
$minimum-breakpoint-before-contract: t;
$minimum-breakpoint-to-xl: xl;
$isDesktop: dm;

$black-color: #212020;
$navbar-height: 110px;
$navbar-movile-height: 84px;

.opti-icon {
  width: 80px;
  height: 80px;
}
.cont,
.cr {
  min-height: 745px;
}
.spanto {
  text-align: center;
}
.tricond {
  min-height: 600px;
  background-image: url('/section-3-bg.jpg');
  background-size: cover;
}
.border-column {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
  @font-face {
  font-family:FABRIKBOLD;
  src: url(/fonts/FABRIK-BOLD_0.OTF) format("opentype");
  }
  @font-face {
  font-family:FABRIK;
  src: url(/fonts/FABRIK-REGULAR_0.OTF) format("opentype");
  }
  @font-face {
  font-family:TIEMPO;
  src: url(/fonts/TIEMPOSHEADLINE-BLACK.OTF) format("opentype");
  }
</style>
