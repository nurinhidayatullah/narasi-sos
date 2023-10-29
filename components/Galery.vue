<template>
  <div class="cloud-galery mt-5">
    <div class="container">
      <div class="row">
        <div class="pe-40 col-lg-6 d-flex flex-column justify-content-center">
          <h1 class="m-0 py-4">GALERI</h1>
          <h5 class="mb-4">
            Entries will be judged based on creativity, storytelling, relevance,
            and impact. A panel of experts from Indosat and Narasi will select
            the winners. <br /><br />Coming soon!
          </h5>
        </div>
        <div class="col-lg-6 ps-40">
          <img loading="lazy" src="/img/content/galery.webp" alt="" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pe-40 {
  padding-inline-end: 40px;
}
.ps-40 {
  padding-inline-start: 40px;
}
.cloud-galery {
  background-image: url("/img/background/cloud-galery.webp");
  background-repeat: no-repeat;
  background-size: contain 253px;
}

.row {
  padding-top: 153px;
}
@media #{$md-layout} {
  .cloud-galery {
    background-size: 280px;
  }

  .pe-40 {
    padding-inline-end: 0px;
  }
  .ps-40 {
    padding-inline-start: 0px;
  }
}
</style>
