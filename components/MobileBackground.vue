<template>
  <div class="wrapper-background-mobile">
    <img
      loading="lazy"
      src="/img/background/cloud-left-mobile.webp"
      class="cloud-left-mobile"
      alt="cloud-left-mobile"
    />
    <img
      loading="lazy"
      src="/img/background/phone-gimbal.webp"
      class="phone-gimbal"
      alt="phone-gimbal"
    />

    <img
      loading="lazy" src="/img/background/likes.webp" class="likes" alt="likes" />
    <div class="timeline-distort-mobile"></div>
    <img
      loading="lazy"
      src="/img/background/love-ball-mobile.webp"
      class="love-ball-mobile"
      alt="love-ball-mobile"
    />
    <img
      loading="lazy"
      src="/img/background/feed-post.webp"
      class="feed-post"
      alt="feed-post"
    />
    <img
      src="/img/background/cloud-right-mobile.webp"
      class="cloud-right-mobile"
      alt="cloud-right-mobile"
    />
    <img
      loading="lazy"
      src="/img/background/clapper.webp"
      class="clapper-mobile"
      alt="clapper-mobile"
    />
    <img
      loading="lazy"
      src="/img/background/comment.webp"
      class="comment-mobile"
      alt="comment-mobile"
    />
    <img
      loading="lazy"
      src="/img/background/smiley.webp"
      class="smiley-mobile"
      alt="smiley-mobile"
    />
  </div>
</template>

<style lang="scss" scoped>
.wrapper-background-mobile {
  position: relative;
    height: 270px;
  .cloud-left-mobile {
    position: absolute;
    top: 73px;
  }

  .cloud-right-mobile {
    position: absolute;
    top: 73px;
    right: 0;
  }

  .clapper-mobile {
    position: absolute;
    top: 83px;
    right: -10px;
    width: 60px;
  }

  .comment-mobile {
    position: absolute;
    top: 123px;
    right: 80px;
    width: 30px;
  }

  .smiley-mobile {
    position: absolute;
    top: 223px;
    right: 0px;
    width: 38px;
  }

  .phone-gimbal {
    width: 65px;
    position: absolute;
    top: 81px;
    left: 17px;
  }

  .likes {
    width: 27px;
    top: 120px;
    position: absolute;
    left: 96px;
  }

  .love-ball-mobile {
    width: 26px;
    top: 245px;
    position: absolute;
    left: 1px;
  }

  .feed-post {
    width: 43px;
    top: 215px;
    position: absolute;
    left: 66px;
  }

  .timeline-distort-mobile {
    position: absolute;
    margin-top: 82px;
    margin-bottom: 23px;
    width: 887px;
    height: 165px;
    left: -105px;
    background-image: url("/img/background/timeline-distort-mobile.webp");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }
}


@media #{$small-mobile} {
  .timeline-distort-mobile {
    width: 525px !important;
    height: 116px !important;
    left: -50px !important;
  }

  .love-ball-mobile {
    top: 195px !important;
  }

  .cloud-left-mobile {
    top: 23px !important;
  }

  .cloud-right-mobile {
    top: 23px !important;
  }

  .clapper-mobile {
    top: 33px !important;
  }

  .comment-mobile {
    top: 73px !important;
  }

  .smiley-mobile {
    top: 173px !important;
  }

  .phone-gimbal {
    top: 61px !important;
  }

  .likes {
    top: 90px !important;
  }

  .feed-post {
    top: 165px !important;
  }
}

@media #{$lg-layout} {
  .wrapper-background-mobile {
    display: none;
  }
}

@media #{$laptop-device} {
  .wrapper-background-mobile {
    display: none;
  }
}

@media #{$extra-device} {
  .wrapper-background-mobile {
    display: none;
  }
}
</style>
