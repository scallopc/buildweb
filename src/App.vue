<template>
  <main class="main-container focus-in-expand">
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Home from './view/home/home.vue';
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
}

footer {
  margin-top: auto; /* Empurra o footer para o fundo da página */
  text-align: center;
  font-size: 14px;
}
</style>
