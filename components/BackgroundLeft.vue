<template>
  <img
    loading="lazy"
    src="/img/background/home-left-1.webp"
    class="home-left-1"
    alt="home-left-1"
  />
  <img
    loading="lazy"
    src="/img/background/home-left-2.webp"
    class="home-left-2"
    alt="home-left-2"
  />
  <img
    src="/img/background/cloud-left.webp"
    class="cloud-left"
    alt="cloud-left"
  />
  <img
    loading="lazy"
    src="/img/background/feed-post.webp"
    class="feed-post"
    alt="feed-post"
  />
  <img
    loading="lazy"
    src="/img/background/phone-gimbal.webp"
    class="phone-gimbal"
    alt="phone-gimbal"
  />
  <img
    loading="lazy"
    src="/img/background/likes.webp"
    class="likes"
    alt="likes"
  />
  <img
    loading="lazy"
    src="/img/background/love-ball.webp"
    class="love-ball"
    alt="love-ball"
  />
</template>

<style lang="scss" scoped>
.home-left-1,
.home-left-2,
.cloud-left,
.feed-post,
.phone-gimbal,
.likes,
.love-ball {
  position: absolute;
  left: 0;
}

.cloud-left {
  flex-shrink: 0;
  top: 113px;
}

.feed-post {
  top: 404px;
  left: 40px;
}

.phone-gimbal {
  top: 152px;
  left: 19px;
}

.likes {
  top: 283px;
  left: 133px;
}

.love-ball {
  top: 526px;
}

@media #{$md-layout} {
  .home-left-1,
  .home-left-2,
  .cloud-left,
  .feed-post,
  .phone-gimbal,
  .likes,
  .love-ball {
    display: none;
  }
}
</style>
