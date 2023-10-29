import type { Style } from '#build/components';
<template>
  <header
    class="nrs_header header-default header-transparent light-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix"
    :class="{ 'vue-fixed-header--isFixed': isSticky }"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="header__wrapper mr--0">
            <!-- Header Left -->
            <div class="header-left flex-20">
              <div class="logo">
                <nuxt-link to="/">
                  <img ref="logoRef" src="/img/logo/sos.webp" alt="SOS Logo" loading="lazy" />
                </nuxt-link>
              </div>
            </div>
            <!-- Main menu Wrap -->
            <div class="header-flex-right flex-80">
              <div class="mainmenu-wrapper have-not-flex d-none d-lg-block">
                <Navigation />
              </div>
              <!-- Header Right -->

              <div
                class="header-right have-not-flex pl--35 pl_md--5 pr_md--20 pl_sm--5 pr_sm--20"
              >
                <!-- Start Hamburger -->
                <div
                  class="menu-hamber popup-mobile-click d-block d-lg-none light-version d-block d-xl-none"
                  @click="$emit('togglenav')"
                >
                  <div>
                    <i></i>
                  </div>
                </div>
                <!-- End Hamburger -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isSticky = ref(false);

const logoRef = ref(null as HTMLDivElement | null);

watch(isSticky, (value) => {
  if (value) {
    if (logoRef.value && logoRef.value.classList) {
      logoRef.value.classList.remove("logo-scale-down");
      logoRef.value.classList.add("logo-scale-up");
    }
  } else {
    if(logoRef.value && logoRef.value.classList) {
      logoRef.value.classList.remove("logo-scale-up");
      logoRef.value.classList.add("logo-scale-down");
    }
  }
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    if (scrollPos >= 1) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  });
});
</script>

<style lang="scss" scoped>
.vue-fixed-header--isFixed {
  background-color: $bg-header-scroll;
  .mainmenu-wrapper .page_nav ul.mainmenu li.lavel-1 {
    padding: 20px 0;
  }
}
</style>
