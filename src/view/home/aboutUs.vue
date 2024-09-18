<template>
  <div class="about-us-container m-default focus-in-expand">
    <div class="about-us-product">
      <div class="about-us-title">
        <h2 class="title-yellow title">Sobre nós</h2>
        <p class="subtitle-semibold">
          Somos uma equipe com mais de 8 anos de experiência em criação de sites e
          marketing para ajudar as empresas a crescer on-line.
        </p>
      </div>
      <div class="about-us-item-container">
      <div class="about-us-item">
        <h3 class="title-yellow subtitle-semibold">Missão</h3>
        <span class="text">
          Nossa missão é capacitar nossos clientes a usar a Internet em todo o
          seu potencial, fornecendo soluções de marketing e design
          personalizadas, econômicas e eficazes.
        </span>
      </div>
      <div class="about-us-item">
        <h3 class="title-yellow subtitle-semibold">Visão</h3>
        <span class="text">
          Nossa visão é nos tornarmos um líder global no fornecimento dos
          melhores e mais exclusivos serviços de web design e marketing para
          aumentar a produtividade e a força dos negócios de nossos clientes.
        </span>
      </div>
    </div></div>
    <div class="bg-image none">
      <img src="../../assets/images/social.png" alt=""   style="width: 100%"/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.about-us-container {
  display: flex;
  gap: 20px;

  .about-us-product {
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex: 1;
    max-width: 600px;

    .about-us-title{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .about-us-item-container{
      display: flex;
      flex-direction: column;
      gap: 20px;

      .about-us-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }

}
</style>
