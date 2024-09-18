<template>
  <main class="main-container focus-in-expand">
    <Header />
    <div class="m-auto w-max">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Garante que o contêiner ocupe toda a altura da tela */
}

footer {
  margin-top: auto;
  /* Empurra o footer para o fundo da página */
  text-align: center;
  font-size: 14px;
}
</style>
