<template>
    <div class="BlocImage">

      <div class="bloc card">
        <div class="card-body">
          <h2>{{titre}}</h2>
          <img :src="require(`@/assets/${url}`)" alt="{{url}}">
          <h4>Frameworks : </h4>
          <ul class="frameworks-desktop">
            <li class="m-3" v-for="(unframework, index) in frameworks" v-bind:key="index" >
              <p class="mb-1">{{unframework[0]}}</p>
              <div class="progress">
                <div :style="{width: unframework[1] + '%'}" class="progress-bar-red"></div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
</template>

<script>
    export default {
        created() {
          console.log(this.$isMobile())
        },
      name: 'Blocimage',
        props: ['titre', 'url', 'frameworks'],
    };
</script>

<style>

.bloc{
  border-radius: 25px;
  background-color : rgb( 20, 143, 119);
  width: 75%;
  min-width: 70%;
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

.bloc img{

  width: 25%;
  height: 25%;
  max-width: 100%;
  min-width: 25%;
  min-height: 35%;

}




ul{
  list-style-type: none;
  margin-right: 20px;
}

.progress {
  background-color: rgb( 17, 120, 100 );
  height: 1em;
  position: relative;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
}
.progress-bar-red {
  background-size: 23em 0.25em;
  height: 100%;
  position: relative;
  background-color: black;
}

@media screen and (max-width: 650px) {
  .bloc img{

    width: 45%;
    height: 15%;
    max-width: 100%;
    min-width: 25%;
    min-height: 35%;

  }

}


</style>
