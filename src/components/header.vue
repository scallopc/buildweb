<template>
  <header class="m-deafult">
    <div>
      <img src="../assets//images/logo/buildweblogo.png" alt="build web logo" />
    </div>
    <div>
      <Menu />
    </div>
  </header>
</template>

<script setup>
import Menu from './menu.vue';
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}
</style>
