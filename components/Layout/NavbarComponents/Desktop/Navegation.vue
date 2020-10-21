<template>
<div :id="mySidebarId" ref="this.mySidebar" class="Navigation">
    <!--<a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>-->
    <ul class="w-100 h-100" style="list-style-type: none;">
        <li class="Navigation-option-block" @click="closeNav()">
            <nuxt-link class="link" to="/">
                <div v-if="appearWords" class="Navigation-option d-flex justify-content-center">
                    Inicio
                </div>
            </nuxt-link>
        </li>
        <li class="Navigation-option-block" @click="closeNav()">
            <nuxt-link class="link" to="/Nosotros">
                <div v-if="appearWords" class="Navigation-option d-flex justify-content-center">
                    Nosotros
                </div>
            </nuxt-link>
        </li>
        <li class="Navigation-option-block" @click="closeNav()">
                    <nuxt-link :to="{path: '/', hash: '#page_3'}">
                 <div v-if="appearWords" class="Navigation-option d-flex justify-content-center">
                    Cursos Presenciales
                </div>
            </nuxt-link>
           <!-- <nuxt-link class="link" to="/cursos_online">
                <div v-if="appearWords" class="Navigation-option d-flex justify-content-center">
                    Cursos Online
                </div>
            </nuxt-link>-->
        </li>
        <li class="Navigation-option-block" @click="closeNav()">
       
        </li>
        <li class="Navigation-option-block" @click="closeNav()">
      
        </li>
    </ul>
</div>
</template>

<script>
import {
    responsiveMixin
} from '~/utils/responsive'
export default {
    name: 'TheNavbar',
    mixins: [responsiveMixin],
    props: {
        mySidebarId: {
            type: String,
            default: '0'
        },
        appearWords: {
            type: Boolean,
        }
    },
    watch: {
        appearWords() {
            if (this.appearWords == true) {
                let id = this.mySidebarId
                document.getElementById(id).style.width = "100%";
            } else if (this.appearWords == false) {
                let id = this.mySidebarId
                document.getElementById(id).style.width = "0%";
            }
        }
    },
    methods: {
        closeNav() {
            this.$emit('appearWord', false);
        },
    }
}
</script>

<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';

.Navigation {
    position: absolute;
    left: 0;
    width: 0;
    position: fixed;
    z-index: 500000;
    top: 0;
    left: 0;
    color: white;
    background-color: $color-primary;
    overflow-x: hidden;
    transition: 0.5s;

    .Navigation-option-block {
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;

        .link:hover {
            color: white;
        }
    }

    .Navigation-option {
        color: white;
        font-size: 2.4em;
    }

    .Navigation a:hover {
        color: red;
    }

    .Navigation .closebtn {
        position: absolute;
        top: 0;
        color: white;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
}
</style>
