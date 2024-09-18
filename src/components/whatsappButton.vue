<template>
    <div>
        <Button :name="buttonText" @click="handleButtonClick"/>
    </div>
</template>

<script setup>
import Button from './button.vue';

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Saiba Mais'
  },
});

const handleButtonClick = () => {
  const phoneNumber = '5511949536115';
  const message = 'Olá! Estou interessado em saber mais sobre seus serviços.'; 
  
  // Redirecionar para o WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');};

</script>