<template>
  <div class="Stages">


    <bloc-titre v-bind:titre="titrePrincipal"></bloc-titre>
    <contact-form class="mb-3"></contact-form>

  </div>
</template>

<script>
import blocTitre from "@/components/BlocTitre/BlocTitre";
import Contact_form from "@/components/contact_form/contact_form";
export default {
  name: 'Contact',
  components:{
    'bloc-titre': blocTitre,
    'contact-form': Contact_form
  },
  data(){
    return {
      titrePrincipal: "Contact"
    }
  }
};
</script>


<style>


</style>
