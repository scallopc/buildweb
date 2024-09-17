<template>
  <div class="bg-container">
    <div class="bg-text focus-in-expand">
      <h1 class="bg-title-home">
        {{ title }}
      </h1>
      <span class="bg-subtitle-home">
        {{ subtitle }}
      </span>
      <Button v-if="showButton" :name="buttonText" />
    </div>
    <div style="width: 180px;"></div>
      <img class="circle-1" src="../assets/images/elements/circle-1.png" alt="circle-1" />
      <img class="arrow-1" src="../assets/images/elements/arrow-1.png" alt="arrow-1" />
       
    <div class="bg-relative">
      <img class="circle-big" src="../assets/images/elements/circle-big.png" alt="circle-big" />
      <img class="degraus" src="../assets/images/elements/degraus.png" alt="degraus" />
      <img class="circle-out" src="../assets/images/elements/circle-out.png" alt="circle-out" />
      <img class="rect" src="../assets/images/elements/rect.png" alt="rect" />
      <img class="circle-shape" src="../assets/images/elements/circle-shape.png" alt="circle-shape" />
      <img class="wave" src="../assets/images/elements/wave.png" alt="wave" />
      <img class="arrow-2" src="../assets/images/elements/arrow-2.png" alt="arrow-2" />
      <img class="arrows-right" src="../assets/images/elements/arrows-right.png" alt="arrows-right" />
      <img class="circle-2" src="../assets/images/elements/circle-2.png" alt="circle-2" />
      <img class="circle-3" src="../assets/images/elements/circle-3.png" alt="circle-3" />
      <img class="circle-big-out" src="../assets/images/elements/circle-big-out.png" alt="circle-big-out" />
      
      <div class="bg-image slide-in-right">
        <img :src="resolveImage(imageSrc)" alt="Imagem de background" style="width: 100%;"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import Button from './button.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  showButton: {
    type: Boolean,
    default: false
  },
  titleHome: {
    type: Boolean,
    default: false
  },
  buttonText: {
    type: String,
    default: 'Saiba Mais'
  },
  imageSrc: {
    type: String,
    required: false
  }
});

function resolveImage(imagePath) {
  // Usa require para garantir que o Webpack/Vue resolva o caminho
  return new URL(imagePath, import.meta.url).href;
}

</script>


<style lang="scss" scoped>
.bg-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
position: relative;
}

.bg-text {
  margin: 0 0 0 40px;
  flex: 1;
  min-width: 280px;
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

/* start elements */
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

.rect {
  position: absolute;
  z-index: 1;
  width: 70px;
  right: 32px;
  top: -40px;
}

.circle-shape {
  position: absolute;
  width: 70px;
  right: 0;
  top: -67px;
}

.arrow-1 {
  position: absolute;
    top: 140px;
    left: 20px;
}

.arrow-2 {
  position: absolute;
  bottom: 90px;
  left: -58px;

}

.arrows-right {
  position: absolute;
  left: -160px;
  top: 104px;
}

.circle-1 {
  position: absolute;
    bottom: -57px;
}

.circle-2 {
  position: absolute;
  top: 37px;
  left: -30px;
}

.circle-3 {
  position: absolute;
  top: 4px;
  left: -62px;
}

.circle-big-out {
  position: absolute;
  bottom: -42px;
  left: -177px;
}

.bg-image {
  flex: 1;
  max-width: 600px;
}


@keyframes wave {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
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
