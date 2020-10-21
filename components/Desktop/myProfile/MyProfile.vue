<!-- eslint-disable -->
<template>
  <div
    class="container-fluid mi_perfil p-0"
    style="height:100vh; width:100%;">

     <div class=" modal fade m-0 p-0" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="registro modal-content">
          <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          </div>
          <div class="modal-body pt-0">
            <div class="container">
              <div class="row">
                <div class="column col-4 p-5">
                  <div class="rectangle"/>
                   <div class="action text-center pt-2">Agregar foto</div>
                </div>
                <div class="column col-8 p-5">
                  <div class="d-flex justify-content-between">
                    <div class="name">Alonso Acosta</div>
                    <div class="action">Editar</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="e-mail pt-2">AlonsoAcosta@gmail.com</div>
                    <div class="action">Cambiar Correo</div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div class="address pt-2 pb-4">AlonsoAcosta@gmail.com</div>
                    <div class="action">Editar</div>
                  </div>
                  <div class="card">
                    <label class="checkbox-label d-flex">
                        <input type="checkbox">
                        <span class="checkbox-custom rectangular"></span>
                    </label>
                    <div class="input-title">Recibír correo de publicidad</div>
                  </div>
                </div>
              </div>
              <div class="row w-100 d-flex justify-content-center">
                <div class="button pb-4">Guardar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class=" row h-100 w-100 m-0">
          <div class="column dos h-100 col-7 p-0">
            <div class="screen2 h-100 b-100 p-5">
              <div class="user-content text w-100  d-flex justify-content-start pb-4 pt-5">
                <div class="user_photo px-2"></div>
                <div class="user_name d-flex justify-content-center flex-column px-2">Ricardo Acosta</div>
                <div class="edit_button user_name d-flex justify-content-center flex-column  px-2"  data-toggle="modal" data-target="#exampleModal2">Editar Perfil</div>
              </div>
              <div class="container" style="height:60%;max-width: 500000px;">
                <div class="row h-100 pl-5">
                  <div class="column col-6 d-flex flex-column justify-content-start">
                    <div class="title text-start pb-4">Mis Clases</div>
                  <div class="w-100 h-100 d-flex flex-column justify-content-start mt-4">
                    <div class="list_container">
                      <div id="item_direction" class="d-flex flex-column justify-content-center px-2" style="margin-top:0px;">
                        <div class="percentage text-center">Curso al 30%</div>
                        <div class="title text-center">Curso de Derecho Financiero</div>
                      </div>
                      <div id="item_direction" class="d-flex flex-column justify-content-center  px-2">
                        <div class="percentage text-center">Curso al 30%</div>
                        <div class="title text-center">Curso de Derecho Financiero</div>
                      </div>
                      <div id="item_direction" class="d-flex flex-column justify-content-center  px-2">
                        <div class="percentage text-center">Curso al 30%</div>
                        <div class="title text-center">Curso de Derecho Financiero</div>
                      </div>
                      <div id="item_direction" class="d-flex flex-column justify-content-center  px-2">
                        <div class="percentage text-center">Curso al 30%</div>
                        <div class="title text-center">Curso de Derecho Financiero</div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="column col-6 d-flex flex-column justify-content-start">
                    <div class="title text-start pb-4">Notificaciones</div>
                    <div class="list_container_notifications h-100">
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                      <div class="d-flex justify-content-center align-content-center" id="item_direction_notification" style="margin-top:0px;">
                        <div class="icon-wrapper d-flex flex-column justify-content-center p-3">
                          <div class="icon"/>
                        </div>
                        <div class="text d-flex justify-content-center flex-column">Tienes hasta las 13:00 para subir el ensayo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column uno h-100 col-5 p-0" style="padding-right:250px;">
            <div class="container p-5 screen1 d-flex flex-column h-100 p-0 d-flex justify-content-end">


            </div>
          </div>
        </div>
  </div>
      <!-- Text slides with image -->


</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      switch1:true
    }
  },
  methods: {
   changeStatus: function($event,num){
        this.switch1=!this.switch1
        let content = document.querySelector('#style-2');
        var width = content.offsetWidth;
        if(this.switch1){
          content.scrollLeft =0;
        }else{
          content.scrollLeft  += width;
        }
			},
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- eslint-disable -->
<style lang="scss">
@import 'assets/scss/variables';
@import 'node_modules/bootstrap/scss/mixins/breakpoints';
$ds:768px;
$dm:1024px;
$r:1440px;
$ds2:896px;
$dm2:1232px;
$r2:2000px;
.mi_perfil {
  .carousel-caption {
    font-family: 'Merriweather', serif;
    position: absolute;
    padding: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    text-shadow: none;
  }
  .screen1 {
    z-index: -4;
    background-size:cover;
    background-image:url(/Profile/Fotos-IDEM--09.png);
    max-width: 5000px;
    font-size: 30px;
    .text{
      opacity: 1;
      color: #F8433C;
      text-align: left;
      font-size: 35px;
      font-weight: 100;
      z-index: 3;
      text-shadow: none;
      text-decoration: underline #F8433C;

    }
  }
  .screen2 {
    z-index: -4;
    background-color:#DCEBEC;
    .user_photo{
      background-color: #280071;
      height: 60px;
      width: 60px;
    }
    .user_name{
     color:#280071;
     font-size: 28px;
     font-family: TIEMPO;
    }
    .edit_button{
      color:#280071;
      text-decoration:underline #280071;
      font-size: 12px;
      font-family: FABRIK;
    }
  }
  .carousel-control-prev,
  .carousel-control-next {
    z-index: 15;
    top: 93%;
    background-color: #F8433C;
    height: 7%;
    max-width: 5%;
    opacity: 1;
  }
  .carousel-control-prev {
    left: 33%;
  }
  .carousel-control-next {
    right: 57%;
  }
  .overflow{
    overflow-x:hidden;
    width: 400px;
    display:flex;
    justify-content: end;
     @media screen and (min-width: $ds2) {
      width: 500px;
    }
     @media screen and (min-width: $dm) {
      width: 500px;
    }
     @media screen and (min-width: $dm2) {
      width: 600px;
    }
     @media screen and (min-width: $r) {
      width: 700px;
    }
     @media screen and (min-width: $r2) {
      width: 800px;
    }
    .card{
      .image{
       background: url(/Cursos_presenciales_selectos/grupo.png) no-repeat;
      background-size: 80% ;

      }
      .image2{
        background: url(/Cursos_presenciales_selectos/mano.png) no-repeat;
        background-size: 80% ;
      }
      .image3{
        background: url(/Cursos_presenciales_selectos/check.png) no-repeat;
        background-size: 75% ;
      }
      .text-container{
        .title{
          font-family: FABRIK;
          font-size: 14px;
            color: #F8433C;
        }
        .text{
          font-family: FABRIK;
          font-size: 10px;
          color: #280071;
          text-decoration: transparent;
        }
      }
    }
  }
  .indicator-container{
    max-width: 5000px;
    min-width: 500px;;
  }
  #style-2::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;

}

#style-2::-webkit-scrollbar
{
	height: 7px;
	background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #280071;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: calc(60px + 240px);
  height: calc(10px + 0px);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 3px;
  width: 50%;
  left: 4px;
  bottom: 4px;
  background-color: #280071;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: white;
}

input:focus + .slider {
  box-shadow: 0 0 1px white;
}

input:checked + .slider:before {
  -webkit-transform: translateX(250px);
  -ms-transform: translateX(26px);
  transform: translateX(95%);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
}


.title{
font-size:22px;
padding-left:10%;
padding-top:5%;
color:#280071;
font-family:FABRIKBOLD;
}

.list_container {
  direction: rtl;
  overflow:auto;
  height: 85%;
  width: 90%;
  padding-left:10px;
}
.list_container_notifications{
  direction: rtl;
  overflow:auto;
  max-height: 100%;
  width: 100%;
  padding-left:10px;

}
.list_container::-webkit-scrollbar {
    width: 5px;
}
.list_container_notifications::-webkit-scrollbar {
    width: 0px;
}
.list_container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius:5px;
}
.list_container::-webkit-scrollbar-thumb {
  background-color: #280071;
  outline: 1px solid slategrey;
  border-radius:5px;
}


/* optionally add id="item_direction to each item to change the direction of the text flow back, while preserving the container direction */
#item_direction {
  direction:ltr;
  height:40%;
  width: 100%;
  margin-top:10px;
  background-color: #280071;
  color:white;
  .title{
    color:white;
    font-size:20px;
    line-height:27px;
    margin:0px;
  }
  .percentage{
    font-size:12px;
    margin:0px;
  }
}
#item_direction_notification {
  direction:ltr;
  height:20%;
  width: 100%;
  margin-top:10px;
  background-color: transparent;
  .icon{
    height: 30px;
    width: 25px;
    background-size:cover;
    background-image: url(/bell.png);
  }
  .text{
    color:#F8433C;
    font-family: FABRIK;
    font-size: 19px;
    line-height: 22px;
  }
}
}
.logo{
display: none;
}
 .registro{
      min-height:400px;
      color:#DCEBEC;
      min-width: 800px;
      background-color: #280071;
     .name ,.e-mail, .address{
      font-size: 20px;
      font-family: FABRIK;
     }
     .action{
      font-family: FABRIK;
      font-size: 12px;
      opacity: 0.6;
      text-decoration:underline  #DCEBEC;
     }
     .button{
      font-family: FABRIK;
      font-size: 20px;
      text-decoration:underline  #DCEBEC;
     }
      .input{
        background-color: #280071;
        border-color: #DCEBEC;
        color:#DCEBEC;
        width: 100%;
        margin-bottom:7px;
        margin-top:7px;
        padding-left:5px;
        font-family: FABRIK;
      }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: 1px solid #DCEBEC;
      -webkit-text-fill-color: #DCEBEC;
      -webkit-box-shadow: 0 0 0px 1000px #280071 inset;
      transition: background-color 5000s ease-in-out 0s;
    }
      .Enter-button{
        font-size:25px;
        color: #F9423A;
        text-decoration: underline #F9423A;
      }
    }

    .card{
      /* width: 500px; */
    /* margin: 50px auto; */
    /* clear: both; */
    /* display: block; */
    /* padding: 0px 0px; */
    background-color: #270172;
    /* border-radius: 4px; */
    border: transparent;
    flex-direction: row;
    font-family: FABRIK;

}
.input-title {
    clear: both;
    padding: 15px 0px 0px 10px;
    font-size: 10px;
    margin: 0px;
    color: rgba(255,255,255,.6);
    font-weight: 300;
    text-decoration: underline rgba(255,255,255,.6);
}
/* Styling Checkbox Starts */
.checkbox-label {
    /* display: block; */
    /* position: relative; */
    /* margin: auto; */
    cursor: pointer;
    /* font-size: 22px; */
    line-height: 24px;
    height: 24px;
    width: 24px;
    /* clear: both; */
}

.checkbox-label input {

    opacity: 0;
    cursor: pointer;
}
.checkbox-label .checkbox-custom {
    position: absolute;
    top: 10px;
    left: 0px;
    height: 24px;
    width: 24px;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    border: 2px solid #FFFFFF;
}
.checkbox-label input:checked ~ .checkbox-custom {
    background-color: transparent;
    border-radius: 5px;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 2px solid #FFFFFF;
}
.checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    left: 12px;
    top: 12px;
    height: 0px;
    width: 0px;
    border-radius: 5px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity:1;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
}
.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity:1;
  left: 8px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}
/* For Ripple Effect */
.checkbox-label .checkbox-custom::before {
    position: absolute;
    content: "";
    left: 10px;
    top: 10px;
    width: 0px;
    height: 0px;
    border-radius: 5px;
    border: 2px solid #FFFFFF;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
}
.checkbox-label input:checked ~ .checkbox-custom::before {
    left: -3px;
    top: -3px;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3);
    opacity:0;
    z-index: 999;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
}
.rectangle{
  height:160px;
  width: 160px;
  background-color:  #DCEBEC;
}
.user-content{
  padding-left:12%;
}
 .modal-dialog{
    display: flex;
    justify-content: center;
    align-content: center;
    .modal-header {
    /* display: flex; */
    /* align-items: flex-start; */
    /* justify-content: space-between; */
    padding-right:1rem;
    padding-top:1rem;
    border-bottom: transparent;
    border-top-left-radius: .0rem;
    border-top-right-radius: .0rem;
      .close {
      float: right;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      color: white;
      text-shadow: 0 1px 0 #fff;
      opacity: .8;
      }
    }
 }
</style>
