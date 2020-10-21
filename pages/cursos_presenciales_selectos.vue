<template>
<div id="container app">
    <div v-if="screenType === 'desktop'">
        <TheHeroPrice />
        <Information />
        <Program />
        <Teachers />
        <Inscription />
    </div>
    <div v-if="screenType === 'tablet'">
        <TheHeroPriceMobile />
        <InformationMobile />
        <InformationTablesMobile />
        <ProgramMobile />
        <TeachersMobile />
        <InscriptionMobile />
    </div>
    <div v-if="screenType === 'mobile'">
        <TheHeroPriceMobile />
        <InformationMobile />
        <InformationTablesMobile />
        <ProgramMobile />
        <TeachersMobile />
        <InscriptionMobile />
    </div>

</div>
</template>

/faceToFaceCourses

<script>
//external imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//desktop components
import TheHeroPrice from '~/components/Desktop/faceToFaceCourses/TheHeroPrice'
import Inscription from '~/components/Desktop/faceToFaceCourses/Inscription'
import Information from '~/components/Desktop/faceToFaceCourses/Information'
import Teachers from '~/components/Desktop/faceToFaceCourses/Teachers'
import TablesField from '~/components/Desktop/faceToFaceCourses/TablesField'
import Program from '~/components/Desktop/faceToFaceCourses/Program'
//mobile components
import TheHeroPriceMobile from '~/components/Mobile/faceToFaceCourses/TheHeroPrice'
import InscriptionMobile from '~/components/Mobile/faceToFaceCourses/Inscription'
import InformationMobile from '~/components/Mobile/faceToFaceCourses/Information'
import InformationTablesMobile from '~/components/Mobile/faceToFaceCourses/InformationTables'
import TeachersMobile from '~/components/Mobile/faceToFaceCourses/Teachers'
import TablesFieldMobile from '~/components/Mobile/faceToFaceCourses/TablesField'
import ProgramMobile from '~/components/Mobile/faceToFaceCourses/Program'

export default {
    components: {
        //////desktop
        TheHeroPrice,
        Information,
        Teachers,
        Inscription,
        TablesField,
        Program,
        //////mobile
        TheHeroPriceMobile,
        InformationMobile,
        InformationTablesMobile,
        TeachersMobile,
        InscriptionMobile,
        TablesFieldMobile,
        ProgramMobile,
    },
    data: function () {
        console.log('entros: ');
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
