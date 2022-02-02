<template>
    <div class="BlocTitre">
      <div class="titre card mt-3">
        <div class="card-body p-0">
          <h1 class="mt-3">{{titre}}</h1>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Bloctitre',
        props: ['titre']
    };
</script>

<style scoped>


.titre h1{
  font-family: Avenir;
  color: #f1f1f1;
  text-align: center;
}

.titre{
  border-radius: 25px;
  background-color : rgb( 20, 143, 119);
  width: 93%;
  margin-left: auto;
  margin-right: auto;
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
