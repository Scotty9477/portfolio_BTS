<template>
    <div class="BlocTexte">

      <div class="bloc card">

          <div class="card-body">

              <h2>{{titre}}</h2>
              <p>{{texte}}</p>

          </div>

      </div>

    </div>
</template>

<script>

    export default {
        name: 'Bloctexte',
        props: ['titre', 'texte']
    };
</script>

<style scoped>


.bloc{
  background-color : rgb( 20, 143, 119);
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  color: #f1f1f1;
  text-align: center;
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


</style>
