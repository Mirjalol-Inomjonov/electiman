<template>
  <section class="our-project">
    <h3>HELP US</h3>
    <h1>Our Complate Peoject</h1>
    <VueSlickCarousel id="slider" v-bind="settings">
      <div
        class="our-project__img"
        v-for="(item, index) in slider"
        :key="index"
      >
        <img :src="item.img" alt="kjnj" />
      </div>
    </VueSlickCarousel>
    <div class="our-project__navigation">
      <ul class="nav-link">
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            World Wide Most Effective Business
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            24/7 Business Support
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            Easy And Quick Problem Analysis
          </router-link>
        </li>
      </ul>
      <ul class="nav-link">
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            World Wide Most Effective Business
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            24/7 Business Support
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            Easy And Quick Problem Analysis
          </router-link>
        </li>
      </ul>
      <ul class="nav-link">
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            World Wide Most Effective Business
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            24/7 Business Support
          </router-link>
        </li>
        <li class="nav-link__item">
          <router-link to="#">
            <i class="fa fa-arrow-circle-right"></i>
            Easy And Quick Problem Analysis
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Our-project",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
      slider: [
        {
          img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/faq.png",
        },
        {
          img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/about-1.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.our-project {
  position: relative;
  background-image: url("https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/sliders2.jpg");
  background-size: cover;
  width: 100%;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.8);
  }

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 15;
    padding-top: 5rem;
  }

  h1 {
    color: #fff;
    font-size: 2.5rem;
    letter-spacing: 1px;
    position: relative;
    z-index: 15;
    padding-bottom: 3rem;
  }
  #slider {
    display: flex;
    justify-content: center;
  }
  &__img {
    padding: 0 8%;
    text-align: center;
    width: 500px;
    img {
      margin-left: 22%;
      pointer-events: none;
    }
  }

  &__navigation {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    z-index: 15;
    text-align: left;
    padding: 0 8% 4.5rem;

    .nav-link {
      margin-top: 2.5rem;
      &__item {
        a {
          display: inline-block;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.6rem 0;
          .fa {
            color: var(--yellow);
            padding-right: 5px;
            transition: all 0.2s linear;
          }
          &:hover {
            color: var(--yellow);
            .fa {
              padding-right: 12px;
            }
          }
        }
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .our-project {
    &__img {
      padding: 0;
      text-align: center;
      width: 400px !important;
      img {
        width: 100%;
        margin-left: -4%;
        pointer-events: none;
      }
    }

    &__navigation {
      .nav-link {
        grid-column: 1/4;
        margin: 0.5rem 0;
      }
    }
  }
}

// 375px
@media screen and(max-width:375px) {
  .our-project {
    &__img {
      padding: 0;
      text-align: center;
      width: 300px !important;
      img {
        width: 100%;
        margin-left: -3%;
        pointer-events: none;
      }
    }
  }
}
</style>
