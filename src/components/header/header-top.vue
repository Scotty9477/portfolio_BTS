<template>
    <div class="header">
      <router-link to="/" class="titre">Portfolio</router-link>

      <div class="liste">

        <ul class="ul-right">
          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/stage">Stages</router-link></li>
          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/veille">Veille</router-link></li>
          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/contact">Contact</router-link></li>
        </ul>

        <ul class="ul-left">

          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/">Accueil</router-link></li>
          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/profil">Profil</router-link></li>
          <li class="btn-nav m-5" v-on:click="toggleNavbar"><router-link to="/projets">Projets</router-link></li>
        </ul>

      </div>
      <button v-on:click="toggleNavbar" class="btn-responsive">
        <img src="../../assets/liste-toggle.png">
      </button>
    </div>
</template>

<script>
    export default {
        name: 'header',
        components: {},
        data(){
          return{

          }
        },
        methods:{
          toggleNavbar : function () {
            const list = document.querySelector('.liste')
            list.classList.toggle('show');
          }
        }


    };
</script>

<style scoped>

*, ::before, ::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}
  .header{
    position: relative;
    z-index: 1;
    top: 0;
    height: 60px;
    color: #f1f1f1;
    width: 100%;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    background-color: rgba(47,79,79,0.3);
    text-shadow: 2px 0 0 black, 2px 2px 0 black, 0 2px 0 black, -2px 2px 0 black, -2px 0 0 black, -2px -2px 0 black, 0 -2px 0 black, 2px -2px 0 black;

  }
  .ul-right{
    position: absolute;
    top: 0px;
    right: 5px;
    list-style-type: none;
    font-size: 0.7em;
  }

  .ul-left{
    position: absolute;
    top: 0px;
    left: 5px;
    list-style-type: none;
    font-size: 0.7em;
  }

  .btn-nav{
    display: inline;
  }

  .btn-nav a{
    display:inline-block;
    text-decoration: none;
    color: #f1f1f1;
  }
  .titre{
    text-decoration: none;
    color: #f1f1f1;
  }
.btn-responsive {
  position: absolute;
  right: 20px;
  display: none;
  top: 1px;
  border: 0px;
  padding: 0px;
  background-color: transparent;
  font-size: 30px;
  color: #f1f1f1;
  text-align: start;
  height: 20px;
}
.btn-responsive img{
  position: relative;
  width: 10%;
  height: auto;
}

@media screen and (max-width: 1100px) {

  .header{
    position: fixed;
    background: rgba(47,79,79,0.8);
  }
  .liste{
    flex-direction: column;
    position: relative;
    top: 10px;
    height: 210px;
    background: rgba(47,79,79,0.8);
    display: none;
  }

  .ul-right{
    top : 55px;
    margin-left: 10px
  }
  .ul-left{
    top: 10px;
  }



  .liste.show{
    display: block;
  }

  .btn-nav{
    height:70px;
    width: 100%;
    text-align: center;
    line-height: 70px;
  }

  .btn-responsive{
    display: block;
  }

}



</style>
