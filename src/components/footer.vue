<template>
  <footer class="m-default focus-in-expand">
    <div class="subscription-container">
      <h1>Tenho interesse</h1>
      <div class="subscription-form">
        <input type="email" v-model="email" 
          placeholder="Email" 
          @keydown.enter="submitEmail"  />
        <Button name="Tenho interesse" type="outline" @click="submitEmail"/>
      </div>
    </div>
    <div class="menu-container">
      <Menu />
      <div class="social-container">
        <img src="../assets/images/icons/linkedin.png" alt="" />
        <img src="../assets/images/icons/instagran.png" alt="" />
      </div>
    </div>
    <p>Copyright © 2024 buildweb</p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Button from "./button.vue";
import Menu from "./menu.vue";

// Email state
const email = ref("");

// Function to handle email submission
const submitEmail = () => {
  if (!email.value) {
    alert("Por favor, insira um email válido.");
    return;
  }

  // Simular o envio do email (você precisa implementar o back-end para isso)
  console.log("Email enviado:", email.value);

  // Aqui você faria uma requisição POST para seu servidor com o e-mail
  // Exemplo usando fetch (necessário ajustar a URL para o servidor correto)
  fetch("https://seuservidor.com/api/enviar-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value }),
  })
    .then((response) => {
      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        email.value = ""; // Limpar o campo de e-mail
      } else {
        alert("Ocorreu um erro ao enviar o e-mail.");
      }
    })
    .catch((error) => {
      console.error("Erro ao enviar o e-mail:", error);
    });
};

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

footer {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

p {
  text-align: center;
}

.subscription-container {
  display: flex;
  gap: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;

  .subscription-form {
    background: $ghost-white;
    border-radius: 4px;

    input {
      width: 200px;
      height: 30px;
      border: none;
      outline: 0;
      padding-left: 10px;
    }
  }
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
  position: relative;
  gap: 34px;

  .social-container {
    display: flex;
    gap: 20px;

    img {
      width: 28px;
    }
  }
}
</style>
