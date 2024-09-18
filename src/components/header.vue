<template>
  <header class="m-default">
    <div>
      <img src="../assets//images/logo/buildweblogo.png" alt="build web logo" />
    </div>
    <div>
      <Menu />
    </div>
    <div>
      <WhatsappButton :buttonText="'Fale conosco'"/>
    </div>
  </header>
</template>

<script setup>
import Menu from './menu.vue';
import WhatsappButton from './whatsappButton.vue';
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}


/* Media Queries para Responsividade*/
@media (max-width: 768px) {
  .menu {
    display: none;
  }
}

</style>
