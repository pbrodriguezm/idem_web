<template>
<div id="container app">
    <!--Desktop-->
    <div v-if="screenType === 'desktop'">
        <TheHero id="page_1" />
        <OnlineCourses id="page_2" />
        <FaceToFaceCourses id="page_3" />
        <Benefits id="page_4" />
        <Testimonials id="page_5" />
        <EstrategicAllies id="page_6" />
        <News id="page_7" />
    </div>
    <div v-if="screenType === 'tablet'">
        <TheHeroMobile id="page_1" />
        <OnlineCoursesMobile id="page_2" />
        <FaceToFaceCoursesMobile id="page_3" />
        <BenefitsMobile id="page_4" />
        <TestimonialsMobile id="page_5" />
        <NewsMobile id="page_7" />
    </div>
    <div v-if="screenType === 'mobile'">
        <TheHeroMobile id="page_1" />
        <OnlineCoursesMobile id="page_2" />
        <FaceToFaceCoursesMobile id="page_3" />
        <BenefitsMobile id="page_4" />
        <TestimonialsMobile id="page_5" />
        <NewsMobile id="page_7" />
    </div>
    <!--<Cursos name="cursosOnline" id="cursosOnline"/>
    <CursosPresenciales name="cursosPresenciales" id="cursosPresenciales"/>
    <Beneficios name="Beneficios" id="Beneficios"/>
    <Testimonios  name="Testimonios" id="Testimonios"/>
    <Aliados name="Aliados" id="Aliados"/>
    <News name="News" id="News"/>-->
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import OnlineCourses from '~/components/Desktop/main/OnlineCourses'
import FaceToFaceCourses from '~/components/Desktop/main/FaceToFaceCourses'
import Benefits from '~/components/Desktop/main/Benefits'
import Testimonials from '~/components/Desktop/main/Testimonials'
import News from '~/components/Desktop/main/News'
import TheHero from '~/components/Desktop/main/TheHero'
import EstrategicAllies from '~/components/Desktop/main/EstrategicAllies'

import OnlineCoursesMobile from '~/components/Mobile/main/OnlineCourses'
import FaceToFaceCoursesMobile from '~/components/Mobile/main/FaceToFaceCourses'
import BenefitsMobile from '~/components/Mobile/main/Benefits'
import TestimonialsMobile from '~/components/Mobile/main/Testimonials'
import NewsMobile from '~/components/Mobile/main/News'
import TheHeroMobile from '~/components/Mobile/main/TheHero'

export default {
    components: {
        OnlineCourses,
        FaceToFaceCourses,
        Benefits,
        Testimonials,
        News,
        TheHero,
        OnlineCoursesMobile,
        FaceToFaceCoursesMobile,
        BenefitsMobile,
        TestimonialsMobile,
        NewsMobile,
        TheHeroMobile,
        EstrategicAllies
    },
    data: function () {
        return {
            numberOfPages: 6,
            currentPage: 1,
            nextPage: 2,
            beforePage: 0,
            screenWidth: 0,
            screenType: "",
            pageActualY: 0,
            subiendo: 0,
            bajando: 0,
            scrollpos: 0,
            scrollfuture: 0,
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
        handleScroll(event) {
            // Any code to be executed when the window is scrolled
            var scrollf = window.pageYOffset
            console.log(scrollf)
            console.log(this.scrollpos)
            if (scrollf > this.scrollpos) {
                this.subiendo = this.subiendo + 1;
                if (this.bajando > 0) {
                    this.bajando--;
                }
                this.scrollpos = scrollf
            } else {
                if (this.subiendo > 0) {
                    this.subiendo--;
                }
                this.bajando++;
                this.scrollpos = scrollf
            }
            if (this.subiendo < 20 || this.subiendo < 20) {
                if (this)
                    var elmnt2 = document.getElementById("page_" + this.currentPage);
                elmnt2.scrollIntoView();

            }
            if (this.subiendo >= 15) {
                console.log("entro")
                var elmnt = document.getElementById('page_' + this.nextPage);
                elmnt.scrollIntoView({
                    behavior: 'smooth'
                });
                if (this.currentPage < this.numberOfPages) {
                    this.currentPage = this.currentPage + 1
                    this.nextPage = this.currentPage + 1
                    this.beforePage = this.beforePage + 1
                }
                this.subiendo = 0
            } else if (this.bajando >= 15) {
                if (this.currentPage > 1) {
                    var elmnt = document.getElementById('page_' + this.beforePage);
                    elmnt.scrollIntoView({
                        behavior: 'smooth'
                    });
                    this.currentPage = this.currentPage - 1
                    this.nextPage = this.currentPage - 1
                    this.beforePage - 1
                }
                this.bajando = 0
            }
        },
        handleResize() {
            var screenWidth = window.innerWidth;
            var screenHeight = window.innerHeight;
            switch (true) {
                case ((screenWidth <= 425) || (screenHeight <= 425)):
                    this.screenType = 'mobile'
                    break;
                case screenWidth <= 768 && screenWidth > 425:
                    this.screenType = 'tablet'
                    break;
                case screenWidth >= 769:
                    this.screenType = 'desktop'
                    break;
                    defalut: break;
            }
            console.log('asda' + this.screenType)
        },
    }
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
</style>
