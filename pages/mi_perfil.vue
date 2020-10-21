<template>
  <div id="container app">
    <MyProfileMobile/>
  </div>
</template>

<script>
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import MyProfile from '~/components/Desktop/myProfile/MyProfile'
import MyProfileMobile from '~/components/Mobile/myProfile/MyProfile'
export default {
  components: {
    MyProfile,
    MyProfileMobile
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
