<script setup lang="ts">
const imagesSrc = ref([
  "/img/content/competition.webp",
  "/img/content/roadshow.webp",
  "/img/content/provision.webp",
]);
const imageSrc = ref("/img/content/competition.webp");

const contents = ref([
  {
    id: "collapseOne",
    label: "headingOne",
    header: "Kompetisi Film",
    body:
      "Inilah kesempatan Anda untuk membuat film pendek yang memikat yang mengeksplorasi pengaruh kuat media sosial dalam kehidupan kita. Bagikan visi Anda, tingkatkan kesadaran, dan inspirasi perubahan melalui lensa kamera Anda.",
    image: imagesSrc.value[0],
  },
  {
    id: "collapseTwo",
    label: "headingTwo",
    header: "Roadshow",
    body:
      "Inilah kesempatan Anda untuk membuat film pendek yang memikat yang mengeksplorasi pengaruh kuat media sosial dalam kehidupan kita. Bagikan visi Anda, tingkatkan kesadaran, dan inspirasi perubahan melalui lensa kamera Anda.",
    image: imagesSrc.value[1],
  },
  {
    id: "collapseThree",
    label: "headingThree",
    header: "Pembekalan Materi",
    body:
      "Inilah kesempatan Anda untuk membuat film pendek yang memikat yang mengeksplorasi pengaruh kuat media sosial dalam kehidupan kita. Bagikan visi Anda, tingkatkan kesadaran, dan inspirasi perubahan melalui lensa kamera Anda.",
    image: imagesSrc.value[2],
  },
]);
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-5 pe-lg-4">
        <h1 class="m-0 pt-3 pb-4">Apa Apa di SOS 2023</h1>
        <h5 class="mb-4">
          Ready to create and inspire change? Register now and submit your
          entry! Let your storytelling prowess shine, and together, let's save
          our SocMed!
        </h5>
        <div class="bk-accordion">
          <div class="accordion" id="accordionOne">
            <div
              class="accordion-item card"
              v-for="(item, index) in contents"
              :key="index"
            >
              <h2 class="card-header" :id="item.label">
                <button
                  class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block"
                  :class="index === 0 ? 'collapsed' : ''"
                  type="button"
                  :id="`${item.id}-btn`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${item.id}`"
                  :aria-expanded="index == 0 ? 'true' : 'false'"
                  :aria-controls="item.id"
                  @click="imageSrc = imagesSrc[index]"
                >
                  {{ item.header }}
                </button>
              </h2>
              <div
                :id="item.id"
                class="accordion-collapse collapse"
                :class="index === 0 ? 'show' : ''"
                :aria-labelledby="item.label"
                data-bs-parent="#accordionOne"
              >
                <div class="accordion-body">
                  <div class="small-view">
                    <img loading="lazy" width="338px" height="auto" :src="item.image" alt="" />
                  </div>
                  <br class="small-view" />
                  {{ item.body }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 ps-lg-4 t">
        <div class="w-100 image-container large-view" style="height: 579px;">
          <img loading="lazy" class="pt-4 img img-fluid" :src="imageSrc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.small-view {
  display: none;
}

.row {
  padding-top: 127px;
}
.accordion-body {
  line-height: 24px;
}

@media #{$md-layout} {
  .large-view {
    display: none;
  }

  .small-view {
    display: inline-block;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .acc-btn {
    font-size: 20px !important;
  }

  .accordion-body {
    line-height: 21px;
  }

  .row {
    padding-top: 0px;
  }
}
</style>
