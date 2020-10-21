<template>
<div id="container app">
    <div v-if="screenType === 'desktop'">
        <TheHero />
        <OurVision id="ourVision"/>
        <OurPhilosophy id="ourPhilosophy"/>
        <OurTeam id="ourTeam"/>
    </div>
    <div v-if="screenType === 'tablet'">
             <TheHeroMobile id="TheHeroOurs"/>
        <OurVisionMobile id="ourVision"/>
        <OurPhilosophyMobile id="ourPhilosophy"/>
        <OurTeamMobile id="ourTeam"/>
    </div>
    <div v-if="screenType === 'mobile'">
        <TheHeroMobile id="TheHeroOurs"/>
        <OurVisionMobile id="ourVision"/>
        <OurPhilosophyMobile id="ourPhilosophy"/>
        <OurTeamMobile id="ourTeam"/>
    </div>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheHero from '~/components/Desktop/we/TheHero'
import OurVision from '~/components/Desktop/we/OurVision'
import OurPhilosophy from '~/components/Desktop/we/OurPhilosophy'
import OurTeam from '~/components/Desktop/we/OurTeam'
import TheHeroMobile from '~/components/Mobile/we/TheHero'
import OurVisionMobile from '~/components/Mobile/we/OurVision'
import OurPhilosophyMobile from '~/components/Mobile/we/OurPhilosophy'
import OurTeamMobile from '~/components/Mobile/we/OurTeam'

export default {
    components: {
        TheHero,
        OurVision,
        OurPhilosophy,
        OurTeam,
        TheHeroMobile,
        OurVisionMobile,
        OurPhilosophyMobile,
        OurTeamMobile,
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
</style>
