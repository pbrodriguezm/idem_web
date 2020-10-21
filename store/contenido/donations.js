export const state = () => ({
  heroDontaionsSlides:[
    {
      text:"Somos más que una entidad caritativa.",
      imageUrl:"/Donaciones/hero_1_bg.png"
    },
    {
      text:"¡Gracias por hacer posible que lleguemos a más estudiantes llevando educación de calidad!",
      imageUrl:"/Donaciones/Fotos-IDEM--12.png"
    },
  ],
})
export const getters = {
  getheroDontaionsSlides(state) {
    return state.heroDontaionsSlides
  },

}
