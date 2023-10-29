<template>
  <HomeComponent id="home-component" />
  <Information id="information-component" />
  <SosContent id="sos-component" />
  <Galery id="galery-component" />
  <FAQs id="faqs-component" />
</template>

<style lang="scss">
#information-component {
  scroll-margin-top: 105px;
}

#sos-component {
  scroll-margin-top: -50px;
}

#galery-component {
  scroll-margin-top: -70px;
}

#faqs-component {
	scroll-margin-top: 60px;
}
@media #{$md-layout} {
  #sos-component {
    scroll-margin-top: 75px;
  }
}
</style>
