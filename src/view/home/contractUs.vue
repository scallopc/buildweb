<template>
  <div class="contract-us-container">
    <h1>Contrate-nos para</h1>
    <div class="contract-us-product">
      <div class="contract-us-item">
        <h3>Design</h3>
        <span>
          A nossa equipe de web design tem muitos anos de experiência nas
          principais áreas de design para construir o site de que necessita.
        </span>
      </div>
      <div class="contract-us-item">
        <h3>Desenvolvimento</h3>
        <span>
          Procurando soluções personalizadas para seus sites? Nossa equipe
          desenvolverá e entregará um site que atenderá.
        </span>
      </div>
      <div class="contract-us-item">
        <h3>Marketing</h3>
        <span>
          Com o marketing digital pesquisado, garantiremos que novos clientes e
          consumidores possam encontrar sua empresa.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.contract-us-container {
  margin: 90px 40px;

  h1 {
    color: $yellow-web;
  }

  .contract-us-product {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 80px;
    text-align: left;
    padding: 20px 0 0 0;
  }

  .contract-us-item {
    background: $middle-night;
    padding: 30px 20px;
    border-radius: 4%;
  }
}
</style>
