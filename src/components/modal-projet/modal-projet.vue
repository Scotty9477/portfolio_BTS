<template>
    <div class="modal-projet" v-if="revele">

      <div class="overlay">

          <div class="modale card">

            <div class="card-body">
              <div v-on:click="toggleModal" class="btn-modale btn btn-danger">X</div>
              <h2>{{titre}}</h2>
              <h4>Contexte : </h4>
              <p>{{contexte}}</p>
              <h4>Demande : </h4>
              <p>{{demande}}</p>

              <div class="btn btn-light">
                <a :href="url">Tester l'application ici</a>
              </div>

            </div>

          </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: 'ModalProjet',
        props: ['revele', 'toggleModal', 'contexte', 'titre', 'demande', 'url', ]
    };
</script>

<style>

.modal-projet{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.modale{
  border-radius: 25px;
  background-color : rgb( 20, 143, 119);
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  color: #f1f1f1;
  text-align: center;
  top :10%;
  padding: 10px;


}
.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.btn-modale{

  position: absolute;
  top: 10px;
  right:10px
}
a{
  text-decoration: none;
  color : black;
}



</style>