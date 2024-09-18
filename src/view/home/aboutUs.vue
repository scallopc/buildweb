<template>
  <div class="about-us-container m-default focus-in-expand">
    <div class="about-us-product">
      <div class="about-us-item">
        <div class="about-us-subscription">
          <h1>Sobre nós</h1>
          <p>
            Somos uma equipe com mais de 8 anos de experiência em criação de
            sites e marketing para ajudar as empresas a crescer on-line.
          </p>
        </div>
      </div>
      <div class="vision-mission">
        <div class="about-us-item">
          <h2>Missão</h2>
          <span>
            Nossa missão é capacitar nossos clientes a usar a Internet em todo o
            seu potencial, fornecendo soluções de marketing e design
            personalizadas, econômicas e eficazes.
          </span>
        </div>
        <div class="about-us-item">
          <h2>Visão</h2>
          <span>
            Nossa visão é nos tornarmos um líder global no fornecimento dos
            melhores e mais exclusivos serviços de web design e marketing para
            aumentar a produtividade e a força dos negócios de nossos clientes.
          </span>
        </div>
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
  padding-top: 60px;

  h1,
  h2 {
    color: $yellow-web;
  }

  .about-us-product {
    text-align: left;
    padding: 0 100px 0 0;
  }

  .about-us-subscription {
    padding-bottom: 20px;
  }

  .about-us-item {
    padding: 20px;
  }

  .vision-mission {
    /* font-size: 10px; */
  }
  .about-us-img {
    width: 400px;
  }
}
</style>
