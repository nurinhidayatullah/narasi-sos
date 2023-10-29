<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li class="menu-item-has-children">
          <nuxt-link to="#information-component" @click="$emit('togglenav')">INFORMASI</nuxt-link>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="#sos-component" @click="$emit('togglenav')">SOS 2023</nuxt-link>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="#galery-component" @click="$emit('togglenav')">GALERI</nuxt-link>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="#faqs-component" @click="$emit('togglenav')">FAQ</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const anchorLinks = offCanvasNav!.querySelectorAll("a");

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
})
</script>

<style lang="scss" scoped>
.offcanvas-navigation {
  ul {
    li {
      &.menu-item-has-children {
        padding: 11px 24px;
        border-bottom: $muted-color 1px solid;
        &.mega--title > {
          a {
            font-weight: 500;
          }
        }
        .sub-menu {
          height: 0;
          opacity: 0;
          transition: 0.3s;
          visibility: hidden;
        }
        &.active > {
          .sub-menu {
            height: 100%;
            opacity: 1;
            visibility: visible;
          }
        }
      }
      a {
        color: $white;
        font-size: 16px;
        font-weight: 600;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $theme-color;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 15px;
      transition: 0.4s;
      li {
        a {
          color: $white;
          font-weight: 400;
          &:hover {
            color: $theme-color;
          }
        }
        .sub-menu {
          li {
            a {
              font-size: 13px;
              padding: 5px 0;
            }
          }
        }
      }
    }
    li {
      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: inline-block;
        }

        &.active > {
          .menu-expand {
            background-color: rgba($white, 0.2);
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          top: 5px;
          right: 0;
          width: 35px;
          height: 35px;
          cursor: pointer;
          line-height: 35px;
          position: absolute;
          text-align: center;
          background-color: rgba($white, 0.1);
          &:hover {
            background-color: rgba($white, 0.2);
          }

          i {
            display: block;
            border-bottom: 1px solid #ffffff;
            position: relative;
            width: 10px;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $white;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
              transition: 0.4s;
            }
          }
        }
      }
    }
  }
}
</style>
