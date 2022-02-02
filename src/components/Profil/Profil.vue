<template>
    <div class="Profil">

      <bloc-titre v-bind:titre="titrePrincipal"></bloc-titre>

      <div class="pdp">
        <img src="../../assets/pdp.jpg" alt="pdp">
      </div>

      <h1 class="nom mt-2">Clément Galvez</h1>

      <bloc-sous-titre v-bind:titre="sousTitreCompetence"></bloc-sous-titre>
      <div class="container mt-2">
        <div class="row">
          <div class="competence col mt-4"> <bloc-image v-bind:titre="jsTitre" v-bind:frameworks="jsFrameworks" v-bind:url="jsLogo"></bloc-image></div>
          <div class="competence col mt-4"> <bloc-image v-bind:titre="pyTitre" v-bind:frameworks="pyFrameworks" v-bind:url="pyLogo"></bloc-image></div>
          <div class="w-200"></div>
          <div class="competence col mt-4 mb-3"> <bloc-image v-bind:titre="phpTitre" v-bind:frameworks="phpFrameworks" v-bind:url="phpLogo"></bloc-image></div>
          <div class="competence col mt-4 mb-3"> <bloc-image v-bind:titre="javaTitre" v-bind:frameworks="javaFrameworks" v-bind:url="javaLogo"></bloc-image></div>
        </div>
      </div>
    </div>
</template>

<script>
import BlocTitre from "@/components/BlocTitre/BlocTitre";
import BlocSousTitre from "@/components/BlocSousTitre/BlocSousTitre";
import blocImage from "@/components/BlocImage/BlocImage";


export default {
        name: 'Profil',
        components: {
          'bloc-titre': BlocTitre,
          'bloc-sous-titre': BlocSousTitre,
          'bloc-image': blocImage
        },
        data(){
          return{
            titrePrincipal: "Profil",
            sousTitreCompetence: "Compétences",
            jsLogo: "js-logo.png",
            jsTitre: "JavaScript",
            jsFrameworks: [['VueJs', 80], ['ReactJS', 20]],
            pyLogo: "python-logo.png",
            pyTitre: "Python",
            pyFrameworks: [['Flask', 90], ['AWS Library', 50]],
            phpLogo: "php-logo.png",
            phpTitre: "PHP",
            phpFrameworks: [['Symfony', 85], ['PHPUnit', 10]],
            javaLogo: "java-logo.png",
            javaTitre: "Java",
            javaFrameworks: [['JavaFX', 50], ['JUnit', 10]],
          }
        }
    };
</script>

<style>

.Profil{

  animation: fadeIn 0.7s;
  -webkit-animation: fadeIn 0.9s;
  -moz-animation: fadeIn 0.9s;
  -o-animation: fadeIn 0.9s;
  -ms-animation: fadeIn 0.9s;
}




@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
.pdp img{
  width: 15%;
  height: 15%;
  max-width: 100%;
  clip-path:ellipse(50% 50%);
  text-align:center;
  margin:auto;
  display:flex;
  margin-top: 2%;
}

.nom{
  text-align: center;
  color: #f1f1f1;
  text-shadow: 2px 0 0 black, 2px 2px 0 black, 0 2px 0 black, -2px 2px 0 black, -2px 0 0 black, -2px -2px 0 black, 0 -2px 0 black, 2px -2px 0 black;
}

@media screen and (max-width: 800px) {
  .pdp img{
    width: 25%;
    height: 25%;
  }

}


</style>