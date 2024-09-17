<template>
  <footer>
    <div class="subscription-container">
      <h1>Tenho interesse</h1>
      <div class="subscription-form">
        <input type="email" placeholder="Email" />
        <Button name="Tenho interesse" type="outline" />
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
import Button from './button.vue';
import Menu from './menu.vue';
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

p {
  text-align: center;
}

.subscription-container {
  display: flex;
  gap: 29px;
  text-align: center;
  align-items: center;
  justify-content: center;

  .subscription-form {
    background: $ghost-white;

    input {
      width: 200px;
      height: 30px;
      border: none;
      outline-color: 0;
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
  margin: 100px 100px 70px 0;
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
