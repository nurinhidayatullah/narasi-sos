<template>
    <div class="position-relative">
        <BackgroundLeft />
        <BackgroundRight />
        <div
          class="w-100 margin-auto d-flex flex-column align-items-center justify-content-between pt--150 pt_sm--110"
        >
          <img loading="lazy" class="narasixindosat" alt="narasixindosat" src="/img/content/narasixindosat.webp" />
          <div class="text-image"></div>
          <div class="text-content-wrapper">
            <h3 class="text-center m-0">
              “Bicara Baik di Digital, Hindari Emosi Tanpa Substansi”
            </h3>
            <h5 class="text-center m-0 py-lg-4 py-md-3 py-sm-3">
              Unleash your creativity and make an impact today. Join the "Save Our
              SocMed"<br />Short Film Competition by Indosat in collaboration with
              Narasi.
            </h5>
          </div>
          <div class="d-flex justify-content-center align-items-center mt-3">
            <button class="btn button-custom-primary mx-sm-3"><nuxt-link target="_blank" href="https://digitalnarasi.typeform.com/indosatsos">DAFTAR</nuxt-link></button>
            <button class="btn button-custom-secondary lg-btn-view"><nuxt-link to="#information-component">JELAJAHI SELENGKAPNYA</nuxt-link></button>
            <button class="btn button-custom-secondary sm-btn-view"><nuxt-link to="#information-component">SELENGKAPNYA</nuxt-link></button>
          </div>
        </div>
        <div class="timeline-distort"></div>
        <div class="position-relative">
            <MobileBackground />
        </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .narasixindosat {
    width: 244.27px;
    height: auto;
  }
  
  .text-image {
    width: 768px;
    height: 116px;
    margin: 32px 0;
    background-image: url("/img/text/text-lg.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  
  .text-content-wrapper {
    width: 768px;
  }
  
  .timeline-distort {
    margin-top: 82px;
    margin-bottom: 23px;
    width: 100vw;
    height: 178px;
    background-image: url("/img/background/timeline-distort.webp");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .sm-btn-view {
      display: none;
  }
  
  @media #{$super-big} {
    .timeline-distort {
      height: 312px !important;
    }
  }

  @media #{$extra-device} {
    .timeline-distort {
      height: 232px;
    }
  }

  @media #{$custom-lg-layout} {
    .text-image {
      width: 588px;
      height: 89px;
    }
  
    .text-content-wrapper {
      width: 588px;
    }
  
    .timeline-distort {
      height: 178px;
    }
  }
  
  @media #{$custom-to-md} {
    .text-image {
      width: 458px;
      height: 70px;
    }
  
    .text-content-wrapper {
      width: 458px;
    }
  }
  
  @media #{$md-layout} {
    .text-image {
      width: 458px;
      height: 70px;
    }
  
    .text-content-wrapper {
      width: 458px;
    }
  
    .timeline-distort {
      display: none;
    }
  }
  
  @media #{$sm-layout} {
    .narasixindosat {
      width: 183.2px;
      height: auto;
    }
  
    .py-sm-3 {
      padding: 16px 0 !important;
    }
  
    .text-image {
      width: 334px;
      height: 114px;
      margin: 24px 0;
      background-image: url("/img/text/text-sm.webp");
      background-repeat: no-repeat;
      background-size: contain;
    }
  
    .text-content-wrapper {
      width: 334px;
    }
  
    .lg-btn-view {
      display: none;
    }
  
    .sm-btn-view {
      display: inline-block;
    }
  
    .mx-sm-3 {
      margin-right: 10px;
    }
  
    .timeline-distort {
      display: none;
    }
  }
  
  @media #{$xs-layout} {
    .text-image {
      width: 290px;
      height: 97px;
      margin: 24px 0;
      background-image: url("/img/text/text-sm.webp");
      background-repeat: no-repeat;
      background-size: contain;
    }
    .text-content-wrapper {
      width: 290px;
    }
  }
  </style>
  