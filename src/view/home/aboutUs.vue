<template>
  <div class="about-us-container m-default focus-in-expand">
    <div class="about-us-product">
      <h1>Sobre nós</h1>
      <p>
        Somos uma equipe com mais de 8 anos de experiência em criação de sites e
        marketing para ajudar as empresas a crescer on-line.
      </p>
      <div class="about-us-item">
        <h3>Missão</h3>
        <span>
          Nossa missão é capacitar nossos clientes a usar a Internet em todo o
          seu potencial, fornecendo soluções de marketing e design
          personalizadas, econômicas e eficazes.
        </span>
      </div>
      <div class="about-us-item">
        <h3>Visão</h3>
        <span>
          Nossa visão é nos tornarmos um líder global no fornecimento dos
          melhores e mais exclusivos serviços de web design e marketing para
          aumentar a produtividade e a força dos negócios de nossos clientes.
        </span>
      </div>
    </div>
    <div class="about-us-img">
      <img src="../../assets/images/social.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.about-us-container {
  display: flex;
  gap: 20px;

  h1,
  h3 {
    color: $yellow-web;
  }

  .about-us-product {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;

    .about-us-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .about-us-img {
    img {
      max-width: 400px;
    }
  }
}
</style>
