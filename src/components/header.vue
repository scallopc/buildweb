<template>
    <header class="m-default">
        <div>
<img src="../assets//images/logo/buildweblogo.png" alt="build web logo">
        </div>
        <div>
            <Menu :item="menuItem"/>
        </div>
    </header>
</template>

<script setup>
import Menu from './menu.vue'

const menuItem = [
    {
        label: 'Home',
        route: '/',
    },
    {
        label: 'Sobre',
        route: '/about',
    },
]
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

}
</style>