<template>
    <div class="BlocProjets">
      <div class="bloc card">
        <div class="body card-body mt-4">
          <h2>{{titre}}</h2>
          <img :src="require(`@/assets/${img}`)" alt="{{img}}">
          <p v-if="!$isMobile()">Cliquez pour en savoir plus..</p>
          <div v-else class="alert alert-warning mt-2" role="alert">
            Pour en savoir plus, veuillez utiliser un ordinateur
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        created() {
          console.log(this.$isMobile())
        },
      name: 'Blocprojets',
        props: ['titre', 'img', 'url'],
        methods: {
          redirect: function () {
              this.$router.push('/'+ this.url)
          }
        }
    };
</script>

<style scoped>
.bloc{
  border-radius: 25px;
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
  min-height: 250px;
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
.bloc:hover{
  background-color: rgb(17, 120, 100);
  cursor: pointer;
}

</style>

