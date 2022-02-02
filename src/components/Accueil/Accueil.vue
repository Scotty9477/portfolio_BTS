<template>
    <div class="Accueil">

      <bloc-titre v-bind:titre="titrePrincipal"></bloc-titre>
      <br>
      <br>
      <bloc-texte v-bind:titre="titreBloc1" v-bind:texte="texteBloc1"></bloc-texte>
      <br>
      <br>
      <bloc-sous-titre v-bind:titre="sousTitre"></bloc-sous-titre>
      <br>

      <div class="container">

        <div class="row" v-if="!$isMobile()">

          <div class="col mt-2">
            <bloc-texte v-bind:titre="titreBlocSISR" v-bind:texte="textBlocSISR"></bloc-texte>
          </div>
          <div class="col mt-2">
            <bloc-texte class="mb-3" v-bind:titre="titreBlocSlam" v-bind:texte="texteBlocslam"></bloc-texte>
          </div>

        </div>

        <div v-else>

          <div class="mb-3">
            <bloc-texte v-bind:titre="titreBlocSISR" v-bind:texte="textBlocSISR"></bloc-texte>
          </div>

          <div>
            <bloc-texte class="mb-3" v-bind:titre="titreBlocSlam" v-bind:texte="texteBlocslam"></bloc-texte>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
    import BlocTexte from "@/components/BlocTexte/BlocTexte";
    import BlocTitre from "@/components/BlocTitre/BlocTitre";
    import BlocSousTitre from "@/components/BlocSousTitre/BlocSousTitre";
    export default {
        created() {
          console.log(this.$isMobile())
        },
      name: 'Accueil',
        components: {
          'bloc-texte' : BlocTexte,
          'bloc-titre' : BlocTitre,
          'bloc-sous-titre': BlocSousTitre
        },
        data(){
          return{
            titrePrincipal: "Accueil",
            sousTitre: "Les deux options",
            titreBloc1: "Qu'est-ce que le BTS SIO ?",
            texteBloc1: "\n" +
                "\n" +
                "Le Brevet de Technicien Supérieur Services informatique aux Organisations (SIO) s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur réseau ou de développeur pour intégrer directement le marché du travail ou continuer des études dans le domaine de l’informatique.\n" +
                "\n" +
                "Le BTS Services informatique aux Organisations est un diplôme reconnu par l’état de niveau Bac+2. " +
                " Cette formule répond aux attentes de la profession en matière de qualification. " +
                "Le programme a évolué en fonction de la place et du rôle des TIC (Technologies d’Information Communication) et propose deux spécialités bien distinctes : le BTS SIO SISR et le BTS SIO SLAM.\n" +
                "\n" +
                "Il associe aux enseignements théoriques et professionnels (en contrôle continu et final) deux stages en entreprise (10 à 11 semaines réparties sur les deux années d’études).\n",
            titreBlocSISR: "Option A - SISR",
            textBlocSISR: "\n" +
                "\n" +
                "L’option Solutions d’infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité).\n" +
                "\n" +
                "Les techniciens supérieurs en informatique option SISR, peuvent accéder aux métiers de :\n" +
                "\n" +
                "    Administrateur systèmes et réseaux,\n" +
                "    Informaticien support et déploiement,\n" +
                "    Pilote d’exploitation,\n" +
                "    Support systèmes et réseaux,\n" +
                "    Technicien d’infrastructure,\n" +
                "    Technicien de production,\n" +
                "    Technicien micro et réseaux.\n" +
                "\n",
            titreBlocSlam: "Option B - SLAM",
            texteBlocslam: "\n" +
                "\n" +
                "L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société).\n" +
                "\n" +
                "Les techniciens supérieurs en informatique option SLAM, sont préparés aux métiers de :\n" +
                "\n" +
                "    Développeur d’applications informatiques,\n" +
                "    Développeur informatique,\n" +
                "    Analyste d’applications ou d’études,\n" +
                "    Analyste programmeur,\n" +
                "    Chargé d’études informatiques\n" +
                "\n"
          }
        }
    };
</script>

<style scoped>



</style>
