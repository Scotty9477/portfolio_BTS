<template>
  <div class="Stages">
    <bloc-titre v-bind:titre="titrePrincipal"></bloc-titre>
  </div>
</template>

<script>
import blocTitre from "@/components/BlocTitre/BlocTitre";

export default {
  name: 'Veille',
  components:{
    'bloc-titre': blocTitre
  },
  data(){
    return {
      titrePrincipal: "Veille"
    }
  }
};
</script>
