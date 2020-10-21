<template>
<div id="container app">
    <div v-if="screenType === 'desktop'">
        <TheHero />
        <Courses />
        <OurTeachers id="ourTeachers"/>
        <Benefits />
        <HowItWorks />
        <Testimonials />
    </div>
    <div v-if="screenType === 'tablet'">
          <TheHeroMobile />
        <CoursesMobile />
        <OurTeachersMobile id="ourTeachers"/>
        <BenefitsMobile />
        <HowItWorksMobile />
        <TestimonialsMobile />
    </div>
    <div v-if="screenType === 'mobile'">
        <TheHeroMobile />
        <CoursesMobile />
        <OurTeachersMobile id="ourTeachers"/>
        <BenefitsMobile />
        <HowItWorksMobile />
        <TestimonialsMobile />
    </div>

    <!--<TheHero />
    <Courses />
    <OurTeachers />
    <Benefits />
    <HowItWorks />
    <Testimonials />-->

    <!--<TheHero/>
      <Cursos/>
      <NuestrosProfesores name="nuestrosProfesores" id="nuestrosProfesores"/>
      <Beneficios/>
      <ComoFunciona/>
      <Testimonios/>-->
</div>
</template>

<script>
//esternal imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//desktop imports
import Courses from '~/components/Desktop/onlineCourses/Courses'
import OurTeachers from '~/components/Desktop/onlineCourses/OurTeachers'
import Benefits from '~/components/Desktop/onlineCourses/Benefits'
import HowItWorks from '~/components/Desktop/onlineCourses/HowItWorks'
import Testimonials from '~/components/Desktop/onlineCourses/Testimonials'
import TheHero from '~/components/Desktop/onlineCourses/TheHero'
//desktop imports
import CoursesMobile from '~/components/Mobile/onlineCourses/Courses'
import OurTeachersMobile from '~/components/Mobile/onlineCourses/OurTeachers'
import BenefitsMobile from '~/components/Mobile/onlineCourses/Benefits'
import HowItWorksMobile from '~/components/Mobile/onlineCourses/HowItWorks'
import TestimonialsMobile from '~/components/Mobile/onlineCourses/Testimonials'
import TheHeroMobile from '~/components/Mobile/onlineCourses/TheHero'

export default {
    components: {
        //desktop
        TheHero,
        Courses,
        Benefits,
        HowItWorks,
        Testimonials,
        OurTeachers,
        //mobile
        TheHeroMobile,
        CoursesMobile,
        BenefitsMobile,
        HowItWorksMobile,
        TestimonialsMobile,
        OurTeachersMobile,
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
