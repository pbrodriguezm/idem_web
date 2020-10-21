export const state = () => ({
  Docents:[
    {
      id:1,
      name:"Lourdes Flores Nano",
      subtitle:"Abogada y política peruana",
      description:"m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imageUrl:"/docentes/1.png"
    },
    {
      id:2,
      name:"Esteban Chong",
      subtitle:"Contador y Exsocio Principal de Pwc Perú ",
      description:" m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everg",
      imageUrl:"/docentes/2.png"
    },
    {
      id:3,
      name:"María Tereza Quiñonez",
      subtitle:"Abogada y socia del estudio Rodrigo,Elias & Medrano Abogados",
      description:"  m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      imageUrl:"/docentes/3.png"
    },
    {
      id:4,
      name:"Samuel Abad",
      subtitle:"Abogado y Socio del estudio Echecopar",
      description:" m is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra",
      imageUrl:"/docentes/5.png"
    },
  ],

})
export const getters = {
getDocents (state) {
  return state.Docents
},
}
