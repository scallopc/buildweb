<template>
  <div class="container m-default">
    <div class="text-container focus-in-expand">
      <h1 class="title-lg">Agência digital que prospera com o seu sucesso</h1>
      <span class="text-lg">
        Se está à procura de uma agência para o ajudar a criar uma presença
        notável online, veio ao lugar certo. Podemos ajudá-lo a levar o seu
        negócio para o próximo nível.
      </span>
      <WhatsappButton :name="'Saiba Mais'" />
    </div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="bg-image none slide-in-right">
      <img
        src="../../assets/images/pages/home-half.png"
        alt="Imagem de background"
        style="width: 100%"
      />
    </div>
  </div>

  <div class="m-default"><ContractUs /></div>
  <div class="m-default"><AboutUs /></div>
  <div class="m-default"><Customers /></div>
</template>

<script setup>
import ContractUs from './contractUs.vue';
import AboutUs from './aboutUs.vue';
import WhatsappButton from '../../components/whatsappButton.vue';
import Customers from './customers.vue';
</script>

<style lang="scss" scoped>
.particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0.6;
  animation: move-particles 10s linear infinite;
}

/* Keyframes para mover as partículas em trajetórias aleatórias */
@keyframes move-particles {
  0% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
  25% {
    transform: translate(100px, -150px);
    opacity: 0.4;
  }
  50% {
    transform: translate(-150px, 200px);
    opacity: 0.8;
  }
  75% {
    transform: translate(200px, -100px);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, 0);
    opacity: 0.6;
  }
}

/* Estilos diferentes para cada partícula */
.particle:nth-child(1) {
  top: 20%;
  left: 10%;
  animation-duration: 12s;
}

.particle:nth-child(2) {
  top: 40%;
  left: 20%;
  animation-duration: 8s;
  animation-delay: 2s;
}

.particle:nth-child(3) {
  top: 60%;
  left: 30%;
  animation-duration: 10s;
  animation-delay: 4s;
}

.particle:nth-child(4) {
  top: 50%;
  left: 70%;
  animation-duration: 14s;
  animation-delay: 6s;
}

.particle:nth-child(5) {
  top: 80%;
  left: 40%;
  animation-duration: 7s;
  animation-delay: 3s;
}

.particle:nth-child(6) {
  top: 70%;
  left: 60%;
  animation-duration: 9s;
  animation-delay: 5s;
}

.particle:nth-child(7) {
  top: 10%;
  left: 80%;
  animation-duration: 11s;
  animation-delay: 1s;
}

.particle:nth-child(8) {
  top: 30%;
  left: 50%;
  animation-duration: 13s;
  animation-delay: 0s;
}

.particle:nth-child(9) {
  top: 15%;
  left: 90%;
  animation-duration: 9s;
  animation-delay: 2.5s;
}

.particle:nth-child(10) {
  top: 85%;
  left: 25%;
  animation-duration: 12s;
  animation-delay: 4s;
}
</style>
