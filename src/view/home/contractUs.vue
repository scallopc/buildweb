<template>
  <div class="contract-us-container m-default focus-in-expand">
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
  padding-top: 60px;
  
  h1 {
    color: $yellow-web;
  }

  .contract-us-product {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 20px 0;
    gap: 20px;
  }

  .contract-us-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: $middle-night;
    padding: 20px;
    border-radius: 4px;
    width: 360px;
    max-width: 100%;
  }
}
</style>
