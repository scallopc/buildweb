<template>
  <div class="contract-us-container focus-in-expand">
    <h2 class="title-yellow title">Contrate-nos para</h2>
    <div class="contract-us-product">
      <div class="contract-us-item">
        <h3 class="subtitle-bold">Design</h3>
        <span class="text-lg">
          A nossa equipe de web design tem muitos anos de experiência nas
          principais áreas de design para construir o site de que necessita.
        </span>
      </div>
      <div class="contract-us-item">
        <h3 class="subtitle-bold">Desenvolvimento</h3>
        <span class="text-lg">
          Procurando soluções personalizadas para seus sites? Nossa equipe
          desenvolverá e entregará um site que atenderá.
        </span>
      </div>
      <div class="contract-us-item">
        <h3 class="subtitle-bold">Marketing</h3>
        <span class="text-lg">
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
    max-width: 365px;
    width: 100%;
    height: 266px;
  }
}

@media (max-width: 768px) {
  .contract-us-container {
    text-align: center;

    .contract-us-product {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
