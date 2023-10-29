<script setup lang="ts">
</script>
<template>
    <nav class="page_nav">
        <ul class="mainmenu">
            <li class="lavel-1 slide--megamenu">
                <nuxt-link to="#information-component">
                    <span>Informasi</span>
                </nuxt-link>
            </li>

            <li class="lavel-1 slide--megamenu">
                <nuxt-link to="#sos-component">
                    <span>SOS 2023</span>
                </nuxt-link>
            </li>

            <li class="lavel-1 slide--megamenu">
                <nuxt-link to="#galery-component">
                    <span>Galeri</span>
                </nuxt-link>
            </li>

            <li class="lavel-1 slide--megamenu">
                <nuxt-link to="#faqs-component">
                    <span>FAQ</span>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .mega__list {
        display: flex;
        li {
            flex-basis: 25%;
        }
    }
</style>