<template>
    <div class="footer">
      <p class="gauche m-2">Clément Galvez</p>
      <p class="droite m-2">© 2022 Tous droit réservés</p>
    </div>
</template>

<script>
    export default {
        name: 'FooterBottom'
    };
</script>
<style>

.footer{
  height: 60px;
  color: #f1f1f1;
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  background-color: rgba(47,79,79,0.3);
}


.gauche{
  position: absolute;
  left: 5px;
}
.droite{
  position: absolute;
  right: 5px;
}


</style>
