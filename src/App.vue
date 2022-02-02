<template>

  <div class="content">
    <div class="header-bar-chargement" id="loadbar_conatainer">
      <div class="progress-container-chargement ">
        <div class="progress-bar-chargement " id="loadbar"></div>
      </div>
    </div>
    <header-top></header-top>
    <router-view class="page"></router-view>
  </div>
  <div>
    <footer-bottom class="footer"></footer-bottom>
  </div>

</template>

<script>

import header from "@/components/header/header-top";
import footerBottom from "@/components/footer-bottom/footer-bottom";
export default {
  name: 'App',
  components: {
    'header-top' : header,
    'footer-bottom' : footerBottom
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

html, body{
  -ms-overflow-style: none;
  scrollbar-width: none;
  /*background: linear-gradient(to bottom right,   #30134b  ,   #9b59b6  );*/
  background-image: url("./assets/backgound.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
}

body::-webkit-scrollbar{
  display: none;
}
.footer{
  bottom: 0;
}

.progress-container-chargement {
  width: 100%;
  height: 2px;
  background: transparent;
  transition-timing-function: ease-out;
}
.progress-bar-chargement  {
  height: 3px;
  background: rgb( 20, 143, 119);
  animation-duration: 2s;
  animation-name: bar-de-chargement;
  opacity: 0;
  border-radius: 12px;
  transition-timing-function: ease-in;
}
.header-bar-chargement  {
  position: fixed;
  top: 0;
  z-index: 6;
  width: 100%;
  background-color: transparent;
  transition-timing-function: ease-out;
}
@keyframes bar-de-chargement {
  1% { width: 0; opacity: 0; display: none; }
  2% { opacity: 1; display: block; }
  30% { opacity: 1; }
  75% { width: 75%; }
  76% { width: 76%; }
  77% { width: 77%; }
  78% { width: 78%; }
  79% { width: 79%; }
  80% { width: 80%; }
  81% { width: 81%; }
  83% { width: 82%; }
  82% { width: 83%; }
  84% { width: 84%; }
  85% { width: 85%; }
  86% { width: 86%; }
  87% { width: 87%; }
  96% { width: 96%; transition-timing-function: ease-out; opacity: 1;}
  100% { width: 100%; opacity: 0; display: none; }
}
.hidden{
  opacity: 0;
}

.content{
  min-height: calc(100vh - 60px);
  position: relative;
}


@media screen and (max-width: 650px) {
.page{
  margin-top: 70px;
}
}
/* ----- BOOTSRATP REDIFINEMENT -------*/
.row{
  margin-right: calc(var(--bs-gutter-x)) !important;
  margin-left: calc(var(--bs-gutter-x)) !important;
}

</style>
