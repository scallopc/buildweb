<template>
  <div class="bg-container">
    <div class="bg-text focus-in-expand">
      <h1 class="bg-title-home">
        Agência digital que prospera com o seu sucesso
      </h1>
      <span class="bg-subtitle-home">
        Se está à procura de uma agência para o ajudar a criar uma presença
        notável online, veio ao lugar certo. Podemos ajudá-lo a levar o seu
        negócio para o próximo nível.
      </span>
      
      <Button name="Saiba Mais" />
    </div>
    <div class="bg-relative">
      <img
        class="circle-big"
        src="../assets/images/elements/circle-big.png"
        alt="circle-big"
      />
      <img
        class="degraus"
        src="../assets/images/elements/degraus.png"
        alt="degraus"
      />
      <img
        class="circle-out"
        src="../assets/images/elements/circle-out.png"
        alt="circle-out"
      />
      <img class="rect" src="../assets/images/elements/rect.png" alt="rect" />
      <img class="wave" src="../assets/images/elements/wave.png" alt="wave" />
      <div class="bg-image slide-in-right">
        <img src="../assets/images/home.png" alt="Imagem de home" />
      </div>
    </div>

  </div>
</template>

<script setup>
import Button from './button.vue';
</script>


<style lang="scss" scoped>
.bg-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin: 0 0 0 40px;
}
.bg-text {
  flex: 1;
  min-width: 280px;
  margin: 0 0 10px;
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  .bg-title-home {
    font-size: clamp(2rem, 4vw + 1rem, 5rem);
  }

  .bg-subtitle-home {
    font-size: clamp(14px, calc(1rem + 1vw), 25px);
  }
}

.bg-relative {
  position: relative;
}

.circle-big {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: -150px;
  width: 180px;
  max-width: 100%;
}
.degraus {
  position: absolute;
  z-index: 1;
  right: 50px;
  bottom: -60px;
  width: 60px;
  max-width: 100%;
}
.circle-out {
  position: absolute;
  z-index: 1;
  right: 85px;
  bottom: 0;
  width: 150px;
}

.wave {
  position: absolute;
  z-index: 1;
  bottom: -47px;
  width: 70px;
  left: 175px;
  animation: wave 2s linear infinite;
}
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px); /* Ajuste conforme necessário */
  }
  100% {
    transform: translateX(0);
  }
}

.rect {
  position: absolute;
  z-index: 1;
  width: 70px;
}

.bg-image {
  flex: 1;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
  }
}

/* Media Queries para Responsividade*/
@media (max-width: 768px) {
  .bg-image {
    max-width: 400px;
  }
}

@media (max-width: 576px) {
  .bg-image {
    display: none;
  }
}
</style>
