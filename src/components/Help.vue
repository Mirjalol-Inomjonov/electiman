<template>
  <section class="help" id="help">
    <VueSlickCarousel v-bind="settings">
      <div class="help__bg" v-for="(item, index) in helpCarusel" :key="index">
        <img :src="item.bg" alt="dbchdb" />
      </div>
    </VueSlickCarousel>

    <div class="help__text">
      <div @click="showVideo" id="play-icon" class="play">
        <i class="fas fa-play"></i>
      </div>
      <h3 class="section-name">HOW CAN WE HELP</h3>
      <h2 class="title">Get Your Quote or Call: (+880) 123-453-786</h2>
      <p>Find Out All Repair Service We Offer.</p>
      <button class="btn">contact now</button>
    </div>

    <div id="testimonial">
      <Testimonial />
    </div>

    <!-- video container -->
    <div class="video-container" :class="{ active: this.showVideoContent }">
      <i @click="hideVideo" id="pause-icon" class="fas fa-times"></i>
      <div class="video-container__content">
        <iframe
          id="video"
          src="https://www.youtube.com/embed/bk-UboxN760"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Testimonial from "./Testimonial.vue";

export default {
  name: "Help",
  components: {
    VueSlickCarousel,
    Testimonial,
  },
  data() {
    return {
      showVideoContent: false,
      settings: {
        dots: false,
        arrows: false,
        fade: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
      helpCarusel: [
        {
          bg: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/banner1-1.jpg",
        },
        {
          bg: "	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/sliders2.jpg",
        },
      ],
    };
  },

  methods: {
    showVideo() {
      this.showVideoContent = !this.showVideoContent;
    },
    hideVideo() {
      this.showVideoContent = !this.showVideoContent;
    },
  },

  mounted() {
    const playVideo = document.querySelector("#play-icon"),
      pauseVideo = document.querySelector("#pause-icon"),
      myvideo = document.querySelector("#video");

    playVideo.onclick = function () {
      myvideo.src = "https://www.youtube.com/embed/bk-UboxN760";
    };
    pauseVideo.onclick = function () {
      myvideo.src = "";
    };
  },
};
</script>

<style lang="scss" scoped>
.help {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
    z-index: 1;
  }
  &__bg {
    img {
      width: 100%;
      height: 100%;
      animation: bgscale 15s linear infinite;
    }
  }
  &__text {
    width: 100%;
    position: absolute;
    text-align: center;
    z-index: 30;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    .title {
      color: #fff;
      margin: 0.6rem 0;
    }

    p {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 4rem;
    }
    .play {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--yellow);
      margin-bottom: 6rem;
      position: absolute;
      top: -40%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      animation: playAnimate 2s ease-in infinite;
      .fas {
        margin-left: 4px;
        width: 40px;
        height: 40px;
        color: #fff;
        font-size: 2rem;
      }
    }
  }

  // video container
  .video-container {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 150;
    &.active {
      display: block;
    }
    .fa-times {
      display: inline-block;
      position: absolute;
      top: 2rem;
      right: 3rem;
      color: var(--yellow);
      font-size: 4rem;
    }
    &__content {
      width: 1000px;
      height: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@keyframes bgscale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
@keyframes playAnimate {
  0% {
  }
  50% {
    width: 120px;
    height: 120px;
  }
  70% {
    width: 200px;
    height: 200px;
  }
  100% {
    width: 90px;
    height: 90px;
    background-color: transparent;
  }
}

// 576px
@media screen and(max-width:576px) {
  .help {
    &__bg {
      img {
        object-fit: cover;
        height: 150vh !important;
      }
    }
    &__text {
      top: 45%;
      h3 {
        font-size: 2rem;
      }
      .title {
        font-size: 2rem;
      }
    }
    .play {
      top: -40%;
    }
    .fa-times {
      top: 1rem !important;
      right: 1rem !important;
    }
    .video-container {
      &__content {
        width: 100% !important;
        height: 350px;
      }
    }
  }
}

// 375px
@media screen and(max-width:375px) {
  .video-container {
    &__content {
      width: 100% !important;
      height: 250px !important;
    }
  }
}
</style>
