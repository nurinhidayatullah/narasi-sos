<script setup lang="ts">
const openAccordion = (element: string) => {
  const accordionItem = document.getElementById(element);

  if (accordionItem?.classList.contains("collapsed")) accordionItem!.click();
};
</script>
<template>
  <div class="footer-container">
    <div class="container">
      <div class="row pt-5 py-3">
        <div class="col-lg-6 p-0">
          <img
            loading="lazy"
            class="small-view"
            src="/img/logo/sos-white.webp"
            alt="sos-white"
          />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6 pe-20">
              <nav>
                <ul>
                  <li>Ada Apa di SOS 2023</li>
                  <li>
                    <nuxt-link
                      to="#sos-component"
                      @click="openAccordion('collapseOne-btn')"
                      >Kompetisi Film</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="#sos-component"
                      @click="openAccordion('collapseTwo-btn')"
                      >Roadshow</nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      to="#sos-component"
                      @click="openAccordion('collapseThree-btn')"
                      >Pembekalan Materi</nuxt-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-6 ps-20">
              <nav>
                <ul>
                  <li>Get Connected</li>
                  <li>
                    <nuxt-link
                      ><div class="d-flex align-items-center">
                        <i class="fab fa-facebook-f"></i>Facebook
                      </div></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      ><div class="d-flex align-items-center">
                        <i class="fab fa-instagram"></i>Instagram
                      </div></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link
                      ><div class="d-flex align-items-center">
                        <i class="fab fa-twitter"></i>Twitter
                      </div></nuxt-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 text-center py-3">
      <h6 class="m-0">© 2023 Indosat x Narasi TV. All rights reserved.</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pt-5 {
  padding-top: 32px !important;
}

.pe-20 {
  padding-inline-end: 20px;
}

.ps-20 {
  padding-inline-start: 20px;
}

h6 {
  color: $grey;
  font-weight: 400;
  opacity: 0.3;
}

@media #{$md-layout} {
  .footer-container {
    padding: 32px 24px;
  }

  .small-view {
    width: 112px;
    height: auto;
    margin-bottom: 24px;
  }

  .ps-20 {
    padding-inline-start: 0px;
  }

  .pe-20 {
    display: none;
  }
}
</style>
