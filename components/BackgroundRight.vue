<template>
    <img loading="lazy"
    src="/img/background/home-right-1.webp"
    class="home-right-1"
    alt="home-right-1"
  />
  <img loading="lazy"
    src="/img/background/home-right-2.webp"
    class="home-right-2"
    alt="home-right-2"
  />
  <img loading="lazy"
    src="/img/background/cloud-right.webp"
    class="cloud-right"
    alt="cloud-right"
  />
  <img loading="lazy" src="/img/background/clapper.webp" class="clapper" alt="clapper" />
  <img loading="lazy" src="/img/background/phone.webp" class="phone" alt="phone" />
  <img loading="lazy" src="/img/background/comment.webp" class="comment" alt="comment" />
  <img loading="lazy" src="/img/background/smiley.webp" class="smiley" alt="smiley" />
</template>

<style lang="scss" scoped>
.home-right-1,
.home-right-2,
.cloud-right,
.clapper,
.phone,
.comment,
.smiley {
  position: absolute;
  right: 0;
}

.clapper {
    flex-shrink: 0;
    top: 110px;
    right: 11.9px;
}

.phone {
    flex-shrink: 0;
    top: 353px;
    right: 20px;
}

.comment {
    flex-shrink: 0;
    top: 219px;
    right: 179px;
}

.smiley {
    flex-shrink: 0;
    top: 244px;
}

@media #{$md-layout} {
  .home-right-1,
  .home-right-2,
  .cloud-right,
  .clapper,
  .phone,
  .comment,
  .smiley {
    display: none;
  }
}
</style>