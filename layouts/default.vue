<template>
<div style="overflow-x: hidden;">
    <!-- import CSS -->
    <meta name="theme-color" content="#280071" />
    <!-- import JavaScript -->
    <div v-if="screenType === 'desktop'">
        <TheNavbar class="todo" />
    </div>
    <nuxt class="nuxt" />
    <!--<TheFooter/>-->
    <div v-if="screenType === 'desktop'">
        <TheFooter />
    </div>
    <div v-if="screenType !== 'desktop'">
        <TheFooterMobile />
    </div>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
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
                case screenWidth <= 768 && screenWidth > 425:
                    this.screenType = 'tablet'
                    break;
                case screenWidth > 768:
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
$mm:375px;
$ml:425px;
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;

.nuxt {
    @media screen and (min-width: $ds + 1) and (min-height: 425px) {
        padding-right: 35px;
    }
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}
</style>
