<template>
<div class="BlogDesktop container-fluid w-100 px-6" fluid="alt">
    <div class="row h-100">
        <div class="column col-2 d-flex justify-content-center h-100">
            <div class="column d-flex flex-column justify-content-center">
                <h4 class="section-title blog_tittle">Blog</h4>
            </div>
        </div>
        <div class="column col-10 flex-column justify-content-center">
            <b-carousel id="carousel1" :interval="4000" controls class="carr h-100">
                <!-- Text slides with image -->
                <b-carousel-slide class=" carr asda h-100" img-src="/noticias/1.jpg" style="background-size:cover;max-height:250px;" v-for="page in blogNews">
                    <div class="row h-100">
                        <b-col v-for="New in page.content" class="col-4 d-flex flex-column justify-content-center ">
                            <div class="card d-flex flex-column justify-content-start pt-0 text-center">
                                <div class="card-image ci1 w-100 pt-0 d-flex flex-column justify-content-end">
                                    <div class="w-100 d-flex justify-content-start">
                                        <div class="small-text cursos-button px-2 py-0 w-50">{{New.title}}</div>
                                    </div>
                                </div>
                                <div class="card-text w-100 d-flex flex-column justify-content-start pt-0">
                                    <p class="small-text cursos-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan dui eget tincidunt tristique Duis.</p>
                                </div>
                            </div>
                        </b-col>
                    </div>
                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        blogNews() {
            return this.$store.state.contenido.main.blogNews
        },
        // numberOfBlogNews() {
        //     return this.$store.state.contenido.main.blogNews.length
        // },
        // pages(){
        //   var x = this.$store.state.contenido.main.blogNews.length
        //   var y = (x.length%3)
        //   console.log(y > 0? (x/3)+1 :  (x/3))
        //   return y > 0? (x/3)+1 :  (x/3)
        // },
    },
    methods: {}
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.BlogDesktop {
    height: 250px;
    background-color: $color-secondary;
    font-family: 'Merriweather', serif;
    color: white;
    font-size: 12px;

    @media screen and (min-width: $dm) {
        height: 300px;
    }

    @media screen and (min-width: $r) {
        height: 400px;
    }

    @media screen and (min-width: $r2) {
        height: 500px;
    }

    .blog_tittle {
        color: $color-terceary;
    }

    .img-fluid {
        height: 100%;
        visibility: hidden;
        border-color: transparent;
    }

    .card {
        height: 100%;
        width: 100%;
        background-color: $color-secondary;
        border: none;
    }

    .card-image {
        min-height: 100px;

        @media screen and (min-width: $dm) {
         min-height: 120px;
        }

        @media screen and (min-width: $r) {
             min-height: 150px;
        }

        @media screen and (min-width: $r2) {
              min-height: 180px;
        }

    }

    .ci1 {
        background-image: url(/noticias/1.jpg);
        background-size: cover;
        background-position: right;
    }

    .ci2 {
        background-image: url(/noticias/2.jpg);
        background-size: cover;
        background-position: right;
    }

    .ci3 {
        background-image: url(/noticias/3.jpg);
        background-size: cover;
        background-position: right;
    }

    .cursos-title {
        color: white;
        font-size: 18px;
        padding-right: 15%;
        line-height: 19px;
    }

    .cursos-button {
        font-size: 9px;
        background-color: $color-secondary;
        color: white;
        font-family: FABRIK;
    }

    .cursos-text {
        padding-top: 5px;
        color: $color-terceary;
        opacity: 0.8;
        text-align: left;

    }

    .icon1 {
        height: 40px;
        width: 40px;
        background-image: url(/FooterXX/American.png);
        background-size: cover;
    }

    .icon2 {
        height: 40px;
        width: 40px;
        background-image: url(/FooterXX/Dinner.png);
        background-size: cover;
    }

    .icon3 {
        height: 40px;
        width: 40px;
        background-image: url(/FooterXX/PayPal.png);
        background-size: cover;
    }

    .icon4 {
        height: 40px;
        width: 40px;
        background-image: url(/FooterXX/VISA.png);
        background-size: cover;
    }

    .icon5 {
        height: 40px;
        width: 40px;
        background-image: url(/FooterXX/CARTA.png);
        background-size: cover;
    }

    .carousel-caption{

    }
    .carousel-item {}

    .carr {
        min-height: 230px;

        @media screen and (min-width: $dm) {
            min-height: 290px;
        }

        @media screen and (min-width: $r) {
            min-height: 360px;
        }

        @media screen and (min-width: $r2) {
            min-height: 420px;
        }

    }
}
</style>
