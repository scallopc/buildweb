<template>
  <div class="customers-container focus-in-expand">
    <h2 class="title-yellow title">Alguns de nossos clientes</h2>
    <div class="customers-logo">
      <img
        class="customers-img"
        src="../../assets/images/customers-logo/logo-coffe@2x.png"
        alt=""
      />
      <img
        class="customers-img"
        src="../../assets/images/customers-logo/logo-refresh.png"
        alt=""
      />
      <img
        class="customers-img"
        src="../../assets/images/customers-logo/logo-d-hub.png"
        alt=""
      />
      <img
        class="customers-img"
        src="../../assets/images/customers-logo/logo-mockup.png"
        alt=""
      />
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.customers-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding-top: 20px;

  .customers-logo {
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: center;
    .customers-img {
      width: 15%;
    }
  }
}
</style>
