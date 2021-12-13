<template>
  <section class="main-section" id="home">
    <VueSlickCarousel v-bind="settings">
      <main class="main" v-for="(item, index) in main" :key="index">
        <div class="main__bg">
          <img :src="item.bg" alt="jahdbhj" />
        </div>

        <div class="main__texts">
          <h3>Welcome to <span>electiman</span></h3>
          <h1 class="main__texts-title">{{ item.title }}</h1>
          <p class="main__texts-subtitle">
            {{ item.subtitle }}
          </p>
          <button class="btn btn_lg">get a free quote</button>
        </div>
      </main>
    </VueSlickCarousel>
    <!-- Reapir cards wrapper strats -->
    <div class="repair-cards">
      <div class="repair-cards-wrapper">
        <router-link
          v-for="(item, index) in repair"
          :key="index"
          to="#"
          class="repair-cards-wrapper__item"
        >
          <i :class="item.icon"></i>
          <p>{{ item.subtitle }}</p>
        </router-link>
      </div>
    </div>
    <!-- Reapir cards wrapper ends -->
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },

  data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
      },

      main: [
        {
          title: "a professional electricity company",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum incidunt at ut.",
          bg: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/banner1-1.jpg",
        },
        {
          title: "a professional electricity company",
          subtitle:
            "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum incidunt at ut.",
          bg: "	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/sliders2.jpg",
        },
      ],

      repair: [
        {
          icon: "fa fa-ship",
          subtitle: "electical repair",
        },
        {
          icon: "fas fa-shipping-fast",
          subtitle: "truck repair",
        },
        {
          icon: "fas fa-plane",
          subtitle: "biman repair",
        },
        {
          icon: "fa fa-ship",
          subtitle: "ships repair",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.slick-arrow {
  display: none !important;
  background-color: var(--yellow);
  border-radius: 6px;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: var(--dark-yellow);
  }
  &:focus {
    background-color: var(--dark-yellow);
  }
}
.slick-prev {
  top: 35%;
  left: 30px;
  z-index: 1;
}
.slick-next {
  top: 35%;
  right: 30px;
  z-index: 1;
}

.main-section {
  position: relative;
  &:hover {
    .slick-arrow {
      display: block !important;
    }
  }
  .main {
    height: 140vh;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: linear-gradient(
        to right,
        rgba($color: #000000, $alpha: 0.8),
        transparent
      );
    }

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__texts {
      padding: 15rem 8% 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      h3 {
        font-size: 1.6rem;
        color: #fff;
        letter-spacing: 1px;
        text-transform: capitalize;
        span {
          color: var(--yellow);
        }
      }
      &-title {
        color: #fff;
        font-size: 5rem;
        line-height: 6rem;
        margin: 2rem 0 2.5rem;
        width: 50rem;
        text-transform: capitalize;
      }
      &-subtitle {
        color: #fff;
        font-size: 1.6rem;
        margin-bottom: 3rem;
      }
    }
  }

  // Reapir cards
  .repair-cards {
    position: absolute;
    left: 8%;
    right: 8%;
    bottom: 0;
    transform: translateY(50%);
    z-index: 1;

    &-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      width: 100%;

      &__item {
        text-align: center;
        padding: 38px 25px;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        i {
          color: var(--yellow);
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p {
          color: var(--black);
          font-size: 1.5rem;
          text-transform: capitalize;
        }
      }
    }
  }
}

// 991px
@media screen and (max-width: 991px) {
  .main {
    text-align: center;
    margin-top: 8rem;
    height: 150vh;
    &__bg {
      height: 100%;
    }

    &__texts {
      &-title {
        font-size: 4.5rem !important;
      }
    }
  }

  .repair-cards {
    position: static !important;
    transform: translateY(-50%);
    &-wrapper {
      grid-template-columns: 1fr 1fr !important;
      &__item {
        box-shadow: var(--box-shadow);
      }
    }
  }
}

// 768px
@media screen and (max-width: 768px) {
  .main {
    &__texts {
      &-title {
        width: 40rem !important;
        font-size: 4rem !important;
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .main {
    &__texts {
      &-title {
        width: 33rem !important;
        line-height: 3.5rem !important;
        font-size: 3rem !important;
        letter-spacing: 1px;
      }
      &-subtitle {
        letter-spacing: 1px;
        line-height: 3rem !important;
      }
    }
  }
  .repair-cards {
    transform: translateY(10%) !important;
    &-wrapper {
      grid-template-columns: 1fr !important;
    }
  }
}
</style>
