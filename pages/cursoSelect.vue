<template>
<div id="container app">
    <div v-if="screenType === 'desktop'">
        <TheHero />
        <Information />
        <Syllable />
        <Teachers />
        <PriceActions />
    </div>
    <div v-if="screenType === 'tablet'">
        <TheHeroMobile />
        <InformationMobile />
        <SyllableMobile />
        <TeachersMobile />
        <PriceActionsMobile />
    </div>
    <div v-if="screenType === 'mobile'">
        <TheHeroMobile />
        <InformationMobile />
        <SyllableMobile />
        <TeachersMobile />
        <PriceActionsMobile />
    </div>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Information from '~/components/Desktop/selectCourse/Information'
import Syllable from '~/components/Desktop/selectCourse/Silabo'
import TheHero from '~/components/Desktop/selectCourse/TheHero'
import Teachers from '~/components/Desktop/selectCourse/Teachers'
import Payment from '~/components/Desktop/selectCourse/Payment'
import PriceActions from '~/components/Desktop/selectCourse/PriceActions'

import InformationMobile from '~/components/Mobile/selectCourse/Information'
import InformationTextMobile from '~/components/Mobile/selectCourse/InformationText'
import SyllableMobile from '~/components/Mobile/selectCourse/Silabo'
import TheHeroMobile from '~/components/Mobile/selectCourse/TheHero'
import TeachersMobile from '~/components/Mobile/selectCourse/Teachers'
import PaymentMobile from '~/components/Mobile/selectCourse/Payment'
import PriceActionsMobile from '~/components/Mobile/selectCourse/PriceActions'

export default {
    components: {
        Information,
        Syllable,
        TheHero,
        Teachers,
        Payment,
        PriceActions,

        InformationMobile,
        InformationTextMobile,
        SyllableMobile,
        TheHeroMobile,
        TeachersMobile,
        PaymentMobile,
        PriceActionsMobile,
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
    font-family: FABRIKBOLD;
    src: url(/fonts/FABRIK-BOLD_0.OTF) format("opentype");
}

@font-face {
    font-family: FABRIK;
    src: url(/fonts/FABRIK-REGULAR_0.OTF) format("opentype");
}

@font-face {
    font-family: TIEMPO;
    src: url(/fonts/TIEMPOSHEADLINE-BLACK.OTF) format("opentype");
}
</style>
