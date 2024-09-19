<template>
  <div class="customers-container focus-in-expand">
    <h2 class="title-yellow title">Por que nos escolher?</h2>
    <div class="customers-subscription">
      <p class="text-lg-bold">
        Somos o termo certo para sua empresa. Temos a experiência e o
        conhecimento para oferecer consultoria e serviços imparciais a um preço
        honesto.
      </p>
      <span class="text-lg"
        >Conosco, você se sentirá ouvido. Ouvimos os requisitos de nossos
        clientes e selecionamos a solução certa para eles. Cuidamos de sua
        empresa como se fosse nossa. Temos um interesse sincero por ela e
        queremos genuinamente ajudar sua empresa a atingir seu potencial.</span
      >
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.customers-container {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .customers-subscription {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
