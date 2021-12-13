<template>
  <section class="testimonial">
    <div class="testimonial__title">
      <h3 class="section-name">OUR TESTIMONIAL</h3>
      <h2 class="title">What They Say About Our Company?</h2>
    </div>
    <VueSlickCarousel v-bind="settings" class="vue_slick_testimonial">
      <div class="customer" v-for="(item, index) in customers" :key="index">
        <div class="customer__content">
          <div class="customer__content-avatar">
            <img :src="item.img" alt="jn" />
          </div>
          <div>
            <h3 class="customer__content__name">{{ item.name }}</h3>
            <span class="customer__content__service">{{ item.service }}</span>
          </div>
        </div>
        <p class="customer__content__subtitle">{{ item.subtitle }}</p>

        <!-- starts component -->
        <star-rating
          :border-width="4"
          border-color="#d8d8d8"
          :rounded-corners="true"
          :star-size="25"
          :star-points="[
            23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19,
            31, 17,
          ]"
        ></star-rating>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import StarRating from "vue-star-rating";

export default {
  name: "Testimonial",
  components: {
    VueSlickCarousel,
    StarRating,
  },

  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        centerPadding: "100px",
        edgeFriction: 0.35,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },

      customers: [
        {
          img: "https:picsum.photos/100/100",
          name: "Sabir Jennings ",
          service: "co-funder",
          subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam autem sed
                      asperiores odio pariatur laboriosam? Nihil delectus quas non, qui ut,`,
        },
        {
          img: "https:picsum.photos/100/100",
          name: "Sabir Jennings ",
          service: "Macanical",
          subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam autem sed
                      asperiores odio pariatur laboriosam? Nihil delectus quas non, qui ut,`,
        },
        {
          img: "https:picsum.photos/100/100",
          name: "Sabir Jennings ",
          service: "marketing",
          subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam autem sed
                      asperiores odio pariatur laboriosam? Nihil delectus quas non, qui ut,`,
        },
        {
          img: "https:picsum.photos/100/100",
          name: "Sabir Jennings ",
          service: "24/7 support",
          subtitle: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam autem sed
                      asperiores odio pariatur laboriosam? Nihil delectus quas non, qui ut,`,
        },
      ],
    };
  },

  methods: {
    setRating: function (rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function (rating) {
      this.currentRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating: function (rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
};
</script>

<style lang="scss" scoped>
.testimonial {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 25px;
  align-items: center;
  padding: 4rem 3rem;
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 6px;
  z-index: 50;
  box-shadow: 0px 6px 65px 0px rgb(0 0 0 / 9%);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  &__title {
    .title {
      line-height: 1.2;
      margin-top: 1rem;
    }
  }

  .vue_slick_testimonial {
    grid-column: 2/4;
  }

  .customer {
    box-shadow: 0 0 3px 4px rgba($color: #000000, $alpha: 0.05);
    padding: 2rem;
    &__content {
      display: flex;
      align-items: center;
      &-avatar {
        position: relative;
        width: 50px;
        height: 50px;
        margin-right: 0.6rem;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #ddd;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      &__name {
        color: var(--black);
        font-size: 1.5rem;
        margin-bottom: 0.6rem;
      }
      &__service {
        display: inline-block;
        color: var(--yellow);
        font-size: 1rem;
      }
      &__subtitle {
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: #6d6d6d;
        line-height: 1.4;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .testimonial {
    display: grid;
    grid-auto-columns: 1fr;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translate(0, 100%);
    &__title {
      grid-column: 1/3;
      h2 {
        font-size: 2rem;
      }
    }

    .vue_slick_testimonial {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }
}

// 375px
@media screen and(max-width:375px) {
  .testimonial {
    &__title {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
