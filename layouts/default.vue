<template>
    <Header @togglenav="navOpen = !navOpen" />
    <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />
    <slot/>
    <Footer />
</template>

<script setup lang="ts">
const navOpen = ref(false);
</script>