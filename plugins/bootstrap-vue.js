import Vue from 'vue'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bCarousel from 'bootstrap-vue/es/components/carousel/carousel'
import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bImg from 'bootstrap-vue/es/components/image/img'
import bForm from 'bootstrap-vue/es/components/form/form'
import bFormTextArea from 'bootstrap-vue/es/components/form-textarea/form-textarea'
import bFormInvalidFeedback from 'bootstrap-vue/es/components/form/form-invalid-feedback'
import bButton from 'bootstrap-vue/es/components/button/button'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import vBToggle from 'bootstrap-vue/es/directives/toggle/toggle'

Vue.component('b-carousel', bCarousel)
Vue.component('b-carousel-slide', bCarouselSlide)
Vue.component('b-container', bContainer)
Vue.component('b-row', bRow)
Vue.component('b-col', bCol)
Vue.component('b-img', bImg)
Vue.component('b-form', bForm)
Vue.component('b-form-textarea', bFormTextArea)
Vue.component('b-form-invalid-feedback', bFormInvalidFeedback)
Vue.component('b-button', bButton)
Vue.component('b-input', bFormInput)
Vue.component('b-collapse', bCollapse)
Vue.directive('b-toggle', vBToggle)
