export const state = () => ({
  heroOnlineCoursesSlides:[
    {
      text:"Capacitate con los mejores profesores, sin horarios, sin límites.",
      imageUrl:"/CursosOnline/Fotos-IDEM--13.png"
    },
  ],
})
export const getters = {
  getheroOnlineCoursesSlides(state) {
    return state.heroOnlineCoursesSlides
  },

}
