<script setup lang="ts">
const contents = ref([
  {
    id: "collapseTwoOne",
    label: "headingTwoOne",
    header: 'Mengapa "Save Our SocMed"?',
    body:
      "Media sosial telah menjadi bagian integral dari kehidupan sehari-hari kita, menghubungkan orang, berbagi cerita, dan memengaruhi pendapat. Namun, ini juga menimbulkan pertanyaan penting tentang privasi, disinformasi, dan kesejahteraan mental. Biarkan film Anda menjadi platform untuk mengatasi masalah ini.",
  },
  {
    id: "collapseTwoTwo",
    label: "headingTwoTwo",
    header: "Question text goes here",
    body:
      "Media sosial telah menjadi bagian integral dari kehidupan sehari-hari kita, menghubungkan orang, berbagi cerita, dan memengaruhi pendapat. Namun, ini juga menimbulkan pertanyaan penting tentang privasi, disinformasi, dan kesejahteraan mental. Biarkan film Anda menjadi platform untuk mengatasi masalah ini.",
  },
  {
    id: "collapseTwoThree",
    label: "headingTwoThree",
    header: "Question text goes here",
    body:
      "Media sosial telah menjadi bagian integral dari kehidupan sehari-hari kita, menghubungkan orang, berbagi cerita, dan memengaruhi pendapat. Namun, ini juga menimbulkan pertanyaan penting tentang privasi, disinformasi, dan kesejahteraan mental. Biarkan film Anda menjadi platform untuk mengatasi masalah ini.",
  },
  {
    id: "collapseTwoFour",
    label: "headingTwoFour",
    header: "Question text goes here",
    body:
      "Media sosial telah menjadi bagian integral dari kehidupan sehari-hari kita, menghubungkan orang, berbagi cerita, dan memengaruhi pendapat. Namun, ini juga menimbulkan pertanyaan penting tentang privasi, disinformasi, dan kesejahteraan mental. Biarkan film Anda menjadi platform untuk mengatasi masalah ini.",
  },
]);
</script>
<template>
  <div class="bg-tosca-cloud">
    <div class="container">
      <div class="w-100 d-flex flex-column align-items-center">
        <div class="col-lg-7 text-center">
          <h1 class="m-0 py-4">FAQs</h1>
          <h5 class="m-0 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </h5>
        </div>
      </div>
      <div class="bk-accordion-style--2">
        <div class="accordion" id="accordionTwo">
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
                data-bs-toggle="collapse"
                :data-bs-target="`#${item.id}`"
                :aria-expanded="index == 0 ? 'true' : 'false'"
                :aria-controls="item.id"
              >
                {{ item.header }}
              </button>
            </h2>
            <div
              :id="item.id"
              class="accordion-collapse collapse"
              :class="index === 0 ? 'show' : ''"
              :aria-labelledby="item.label"
            >
              <div class="accordion-body">
                {{ item.body }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-tosca-cloud {
  background-image: url("/img/background/tosca-cloud.webp");
  background-repeat: no-repeat;
  background-size: contain 345px;
  background-position: bottom -120px right 0px;
}
@media #{$md-layout} {
  .acc-btn {
    font-size: 16px !important;
  }

  .accordion-body {
    line-height: 21px;
  }

  .bg-tosca-cloud {
    background: none;
  }
}
</style>
