<template>
  <Banner
    title="Agência digital que prospera com o seu sucesso"
    subtitle="Se está à procura de uma agência para o ajudar a criar uma presença notável online, veio ao lugar certo. Podemos ajudá-lo a levar o seu negócio para o próximo nível."
    :showButton="true"
    imageSrc="../assets/images/home.png"
  />
  <ContractUs />
  <AboutUs />
</template>

<script setup>
import Banner from '../../components/banner.vue';
import ContractUs from './contractUs.vue';
import AboutUs from './aboutUs.vue';
</script>

<style lang="scss" scoped></style>
