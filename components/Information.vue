<template>
  <div class="row flex-md-row-reverse">
    <div class="col-lg-6">
      <div class="container pr--125 pl--35">
        <h1 class="m-0 pt-lg-4 pb-4">Unleash Your Creativity</h1>
        <h5 class="mb-4">
          Welcome to the most exciting and thought-provoking short film
          competition of the year! Indosat, in collaboration with Narasi,
          proudly presents the "Save Our SocMed" Short Film Competition. It's
          time to harness your creative genius and express your unique
          perspective on the impact of social media on our society.<br /><br />Why
          "Save Our SocMed"? Social media has become an integral part of our
          daily lives, connecting people, sharing stories, and influencing
          opinions. However, it also raises important questions about privacy,
          misinformation, and mental health. Let your film be a platform to
          address these issues.
        </h5>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="bg-information"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-information {
  height: 768px;
  width: 150%;
  background-image: url("/img/content/informasi.webp");
  background-size: contain;
  background-repeat: no-repeat;
}

@media #{$md-layout} {
  .bg-information {
    width: 100%;
    height: 600px !important;
  }

  .container {
    padding: 0 !important;
  }
}

@media #{$sm-layout} {
  .bg-information {
    width: 100% !important;
    height: 288px !important;
  }
}
@media only screen and (max-width: 1025px) {
  .container {
    padding: 0 20px 0 20px;
  }
  .bg-information {
    width: 120%;
    height: 500px;
  }
}
</style>
