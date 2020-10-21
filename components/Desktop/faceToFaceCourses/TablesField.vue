
<template>
  <el-container class=" fluid-container" style="width:100vh;height:100vh;">
    <!--HEADER-->
    <el-header class="filters new-header-dash" stye="height:auto;" >
      <div class="filters-main-container">
        <div class="filters-row-container">
          <div class="filters__title">Solicitud de Entrada</div>
          <div class="separation"/>
          <div class="filters__title">Bandeja Principal</div>
        </div>
      </div>
    </el-header>
    <!--MAIN-->
    <el-main >
       <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
    </el-main>
  </el-container>

</template>

<script>
 export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
/*eslint-disable */
//import 'devextreme/dist/css/dx.light.compact.css'

</script>
<style lang="scss" scoped>
//HEADER
.new-header-dash,.filters {
  min-height:70px;
  grid-area: filters;
  background-color: #006476;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 0;
  .filters-main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .filters-row-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px;
  }
  .filters-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0px;
  }
  .filters-container-percent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
  }
  .filters__title {
    font-family: Roboto;
    color: white;
    font-size: 1.2rem;
    margin: 0px 30px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .filters__slot {
    display: flex;
    flex-direction: column;
    color: white;
    font-family: Roboto;
    font-weight: 500;
    .title-filters__slot {
      color: rgb(250, 118, 74);
      margin: 0px;
    }
    .dropdown__title {
      color: #00c4d8;
      font-size: 15px;
      font-weight: 500;
      font-family: Roboto;
    }
  }
  .separation {
    border-right: 1px solid white;
    width: 1px;
    height: 30px;
    margin: auto 20px;
  }
}
//BODY
.tabs{
    width: 100%;
    height: 100%;
}
.tab-item{
    width: 100%;
    height: 100%;
  .cm-custom, .cm-custom-title {
    color: white;
    background-color: #00C4DC;
    border-radius: 10px 10px 0px 0px;
    padding: 5px 15px 5px 15px;
    background-image: linear-gradient(to right, #3a89c7 , #00C4DC);
    width: 100%;
    height: 100%;
    font-family: Roboto;
    border-bottom: 1px solid rgb(180, 180, 180);
    .cm-custom p {
      font-weight: normal;
      margin:0px;
    }
  }
  .rowtable{
    padding: {
      top:20px;
      right: 20px;
      left: 20px;
    };
    background-color: white;
    min-height: 800px;
    border-radius: 10px;
    border: 1px rgb(212, 212, 212) solid;
  }
}
/////////////////////////////////

// #gridPrincipal.nice-scroll-bar .dx-scrollbar-horizontal .dx-scrollable-scroll {
//     height: 20px !important;
// }
// #gridPrincipal {
//       height: 471px;
// }
// #gridPrincipal.nice-scroll-bar .dx-scrollable-scroll-content {
//     background-color:#3b8ac7 !important;
// }
// #gridPrincipal .dx-datagrid-rowsview td {
//     white-space: normal;
//     word-break: break-word;
// }
// .bandeja-almacen.el-table .cell {
//     word-break: break-word;
//     /*min-width: 100px;*/
// }
// .bandeja-almacen .el-table__fixed-right-patch {
//     position: absolute;
//     top: -1px;
//     right: 0;
//     background-color: #45a5b8;
// }
</style>

<!--<style lang="scss" scoped>
// .el-pagination {
//     white-space: nowrap;
//     padding: 10px 5px;
//     color: #303133;
//     font-weight: 700;
//     text-align: center;
// }
/*
*************
   MAIN
*************
*/
// .app-main {
//     background-color: #f1f2f7;
// }
// .cm-custom p {
//     color: white;
//     background-color: #00C4DC;
//     background-image: linear-gradient(to right, #3a89c7 , #00C4DC);
//     width: 100%;
//     font-weight: normal;


// }
// .sol-rapida-box {
//     align-self: flex-end;
// }

/*
************
  GRID
*************
*/

// .gridDash {
//   background-color: #f7f7f7;
//   grid-gap: 1.2rem;
//   font-family: Roboto,serif;
//   display: grid;
//   width: 100%;
//   min-height: 100vh;
//   padding-bottom: 20px;
//   grid-template-rows: 70px auto;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-areas:
//     "filters filters filters"
//     "rowtable rowtable rowtable";
// }

/*
****************
  GRID AREAS
****************
*/
/*
****************
    GRID AREAS FILTERS
****************
*/

// .filters {
//   grid-area: filters;
//   background-color: #006476;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   border-radius: 0 0 20px 0;
//   .filters-main-container {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
//   .filters-row-container {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     padding: 0px 20px;
//   }
//   .filters-container {
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: space-evenly;
//     padding: 10px 0px;
//   }
//   .filters-container-percent {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     align-items: center;
//   }
//   .filters__title {
//     font-family: Roboto;
//     color: white;
//     font-size: 1.2rem;
//     margin: 0px 30px 0px 0px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
//   .filters__slot {
//     display: flex;
//     flex-direction: column;
//     color: white;
//     font-family: Roboto;
//     font-weight: 500;
//     .title-filters__slot {
//       color: rgb(250, 118, 74);
//       margin: 0px;
//     }
//     .dropdown__title {
//       color: #00c4d8;
//       font-size: 15px;
//       font-weight: 500;
//       font-family: Roboto;
//     }
//   }
//   .separation {
//     border-right: 1px solid white;
//     width: 1px;
//     height: 30px;
//     margin: auto 20px;
//   }
// }

/*
***********************************
      ROW DE BOTONES EN TABLA
***********************************
// */
// .jsb-custom {
//   justify-content: space-between !important;
// }

// .l-custom {
//   width: 50%;
//   display: flex;
//   align-items: center;
// }



/**
***********************************
    PROCESOS
***********************************
**/

// ol {
// 	counter-reset:li; /* Initiate a counter */
// 	margin-left:0; /* Remove the default left margin */
// 	padding-left:0; /* Remove the default left padding */
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// }

// ol > li {
// 	position:relative; /* Create a positioning context */
// 	margin: 5px;
// 	list-style:none; /* Disable the normal item numbering */
//   height: 60px;
//   width: 200px;
//   display: flex;
//   flex-wrap: nowrap;
//   background-color: #F0F0F7;
//   border-radius: 5px;
//   align-items: center;
//   font-family: Roboto;
//   line-height: 1rem;
//   border: 1px solid rgb(210, 210, 212);
// }

// ol > li:before {
// 	content:counter(li); /* Use the counter as content */
// 	counter-increment:li; /* Increment the counter by 1 */
// 	/* Position and style the number */
// 	position:relative;
//   padding: 10px;
//   font-size: 2rem;
//   font-weight: bold;
//   color: rgb(32, 25, 25);
// }

// li ol,
// li ul {margin-top:6px;}
// ol ol li:last-child {margin-bottom:0;}

// .processDiv {
//   height: 60px;
//   width: 200px;
//   display: flex;
//   flex-wrap: nowrap;
//   background-color: #F0F0F7;
//   border-radius: 5px;
//   align-items: center;
//   font-family: Roboto;
//   border: 1px solid rgb(210, 210, 212);
// }

// .procNumber {
//  padding: 10px;
//  font-size: 2rem;
//  font-weight: bold;
//  color: rgb(32, 25, 25);
// }

// .procDescrip {
//   padding: 10px 5px 10px 0px;
//   color: rgb(121, 123, 129);
//   font-size: 0.9rem;
// }

/**
***********************************
    CUSTOM DIALOG
***********************************
**/

// .custom-dialog__body {
//       display: flex;
//       flex-direction: column;
//       padding: 20px;
//       font-size: 14px;
//     }

// .custom-dialog__header {
//       display: flex;
//       justify-self: flex-start;
//       background-color: #006476;
//       border-radius: 10px 10px 0 0;
//       padding: 15px;
//       width: 100%;
//       color: white;
//       justify-content: center;
//       font-size: 1rem;
//     }

// .scale-up-center {
// 	-webkit-animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// 	        animation: scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// }

// @-webkit-keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }
// @keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }

// .custom-dialog__footer {
//       display: flex;
//       justify-self: flex-end;
//       justify-content: flex-end;
//       border-top: 1px solid #f7f7f7;
//       border-radius: 0 0 10px 10px;
//       padding: 15px;
//       width: 100%;
//       color: rgb(27, 27, 27);
//       font-family: Roboto;
//       justify-content: flex-end;
//       font-size: 1rem;
//     }

// .fondo-dialog2 {
//     display: block; /* Hidden by default */
//     position: fixed; /* Stay in place */
//     z-index: 2000; /* Sit on top */
//     padding-top: 100px; /* Location of the box */
//     left: 0;
//     top: 0;
//     width: 100%; /* Full width */
//     height: 100%; /* Full height */
//     overflow: auto; /* Enable scroll if needed */
//     background-color: rgb(0,0,0); /* Fallback color */
//     background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
// }

// .custom-dialog2 {
//     display: flex;
//     flex-direction: column;
//     background-color: #fefefe;
//     margin: auto;
//     border: 1px solid #888;
//     width: 40%;
//     border-radius: 10px;
//     font-family: Roboto;
//     margin-bottom: 8%;
// }
// </style>
