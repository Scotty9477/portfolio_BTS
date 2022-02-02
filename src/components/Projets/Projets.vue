<template>
    <div class="Projets">
        <bloc-titre v-bind:titre="titrePrincipal"></bloc-titre>
        <bloc-sous-titre class="mt-5" v-bind:titre="titreProjetCours"></bloc-sous-titre>
        <div class="projets row" v-if="!$isMobile()">
            <div class="col-4 mb-2">
              <modal-projet v-bind:url="urlGsbFraisModal" v-bind:demande="demandeGsbModal" v-bind:contexte="contexteModal" v-bind:titre="titremodalGsbFrais" v-bind:revele="reveleGsbFrais" v-bind:toggleModal="toggleModal1"></modal-projet>
              <bloc-projet v-on:click="toggleModal1" v-bind:titre="titre1" v-bind:url="url1" v-bind:img="image" class="mt-4"></bloc-projet>
            </div>

          <div class="col-4 mb-2">
            <modal-projet v-bind:titre="titreGsbRvModal" v-bind:demande="demandeGsbRVModal" v-bind:contexte="contexteModal" v-bind:revele="reveleGsbRvDr" v-bind:toggleModal="toggleModal2"></modal-projet>
            <bloc-projet v-on:click="toggleModal2" v-bind:titre="titre2" v-bind:img="image" class="mt-4"></bloc-projet>
          </div>

          <div class="col-4 mb-2">
            <modal-projet v-bind:titre="titreCamPyModal" v-bind:url="urlcamPyModal" v-bind:demande="demandeCamPYModal" v-bind:contexte="contextCamPYModal" v-bind:revele="revelecamPy" v-bind:toggleModal="toggleModal3"></modal-projet>
            <bloc-projet  v-on:click="toggleModal3" v-bind:titre="titre3" v-bind:img="imageCamPy" class="mt-4"></bloc-projet>
          </div>

        </div>
      <div v-else>

        <div>
          <bloc-projet v-bind:titre="titre1" v-bind:url="url1" v-bind:img="image" class="mt-4"></bloc-projet>
        </div>

        <div>
          <bloc-projet  v-bind:titre="titre2" v-bind:img="image" class="mt-4"></bloc-projet>
        </div>

        <div>
          <bloc-projet  v-bind:titre="titre3" v-bind:img="imageCamPy" class="mt-4"></bloc-projet>
        </div>

      </div>
    </div>
</template>

<script>
    import blocTitre from "@/components/BlocTitre/BlocTitre";
    import blocSousTitre from "@/components/BlocSousTitre/BlocSousTitre";
    import blocProjets from "@/components/BlocProjets/BlocProjets";
    import modalProjet from "@/components/modal-projet/modal-projet";
    export default {
        created() {
          console.log(this.$isMobile());
        },
      name: 'Projets',
        components:{
          'bloc-titre': blocTitre,
          'bloc-sous-titre': blocSousTitre,
          'bloc-projet': blocProjets,
          'modal-projet': modalProjet
        },
        data(){
          return {
            titrePrincipal: "Projets",
            titreProjetCours: "Projets de formation et stages",
            image: "logo-gsb.png",
            url1 :'projets/gsbFrais',
            titre1: 'GsbFrais',
            titre2: 'GSB-RV-DR',
            titre3: 'camPY',
            imageCamPy: 'camPy-logo.png',
            reveleGsbFrais: false,
            reveleGsbRvDr: false,
            revelecamPy: false,
            titremodalGsbFrais: "GSB Frais: c'est quoi ?",
            contexteModal: "L’entreprise GSB est issue de la fusion de l’entreprise pharmaceutique américaine Galaxy et du conglomérat européen Swiss Bourdin, " +
                "lui-même en réunion avec 3 autres petits laboratoires. L’entreprise GSB a besoin d’une application permettant une gestion plus précise " +
                "et uniforme des dépenses et remboursement de ses différentes entités." +
                " Ces dernières disposent déjà d’applications pour le suivi des frais mais elles souhaiteraient les regrouper en une seule et même application.",
            demandeGsbModal: "L’application Web doit permettre l’enregistrement de tout frais, aussi bien ceux issus d’activités directes (déplacement, restauration," +
                " hébergement) qu’indirectes (événementiel, conférences, etc…) pour ensuite permettre la consultation des opérations menées par le service comptable " +
                "(réception, validation, mise en paiement, remboursement). L’application doit être fonctionnelle et sécurisée et une fiche technique doit être fournie.",
            demandeGsbRVModal:"Le client lourd GSB-RV-DR doit permettre la consultation de tous les rapports des différentes visites des collaborateurs et de leurs ressentis par" +
                " rapport au praticiens. Le client doit être fait avec javaFX assorti d'une base de donnée mariaDB",
            contextCamPYModal: "La mairie de drancy s'inscrie dans une démarche de centralisation des données de ses équipements IOT sur des serveurs Amazon WEB Service, via" +
                "le service IOT Core",
            demandeCamPYModal: "Le script python devra interroger une a une toutes les caméras de la ville, dont l'adresse IP est située dans un fichier JSON, une fois récupéré le status de" +
                " toutes ces caméras ces données doivent être envoyé au serveur AWS et stocké sur le web services IOT CORE, plus précisément dans les shadow de l'appareil. Cette opération doit être effectuée" +
                " une fois toutes les heures. Il est aussi demandé une application IOS , développée en swift qui doit lister toutes les caméra et leurs état a partir des données des shadows AWS IOT Core.",
            titreGsbRvModal: "GSB-RV-DR : c'est quoi ?",
            titreCamPyModal: "camPY : c'est quoi ?",
            urlcamPyModal: "https://github.com/Scotty9477/camPY",
            urlGsbFraisModal: "https://clement-galvez.fr/applications/gsbFrais"
          }
        },
        methods:{
            toggleModal1: function () {
              this.reveleGsbFrais = !this.reveleGsbFrais;
            },
            toggleModal2: function () {
            this.reveleGsbRvDr = !this.reveleGsbRvDr;
          },
            toggleModal3: function () {
            this.revelecamPy = !this.revelecamPy;
          },
        }
    };
</script>

<style>

  .projets{
    margin-top: 7%;
  }

</style>

