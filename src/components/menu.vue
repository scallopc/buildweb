<template>
    <div class="menu">
        <router-link v-for="item in props.item" :key="item.label" :to="item.route"
            :class="['menu-item', { active: isActiveRoute(item.route) }]">
            <div>
                <span>{{ item.label }}</span>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
    item: {
        type: Array,
        required: true,
    },
});

const route = useRoute();

const isActiveRoute = (routePath) => {
    return route.path === routePath;
};

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.menu {
    display: flex;
    gap: 20px;

    .menu-item {
        color: $ghost-white;
    }

    .active {
        color: $yellow-web;
    }
}
</style>
