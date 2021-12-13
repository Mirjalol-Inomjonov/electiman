<template>
  <section class="service" id="service">
    <div class="service__title">
      <h3 class="section-name">our service</h3>
      <h2 class="title">
        Magical & Inspirational lessons for <br />
        people seeking help.
      </h2>
    </div>

    <!-- cards wrapper starts -->
    <div class="service-wrapper">
      <div
        class="service-wrapper-card"
        v-for="(card, index) in cards"
        :key="index"
      >
        <span>
          <img :src="card.icon" alt="jsdbvd" />
        </span>
        <h2>{{ card.title }}</h2>
        <p>{{ card.subtitle }}</p>
        <router-link to="#" class="read-more">read more</router-link>
      </div>

      <!-- video card -->
      <div class="service-wrapper-card service-wrapper-card_bg">
        <div class="play" @click="showVideo">
          <i class="fas fa-play"></i>
        </div>
      </div>
    </div>
    <!-- cards wrapper ends -->

    <!-- contact wrapper -->
    <div class="service__contact">
      <h2 class="title">Get 15-Minutes Complimentary Zoom or Skype session.</h2>
      <button class="btn">contact now</button>
    </div>

    <!-- video wrapper in card-->
    <div class="video-container" :class="{ active: this.showVideoContent }">
      <i id="pause" class="fas fa-times" @click="hideVideo"></i>
      <div class="video-container__content">
        <iframe
          id="myvideo"
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
export default {
  name: "Service",
  data() {
    return {
      showVideoContent: false,
      cards: [
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f9.png",
          title: "Electricity Overuse",
          subtitle:
            "Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.",
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f7.png",
          title: "Faulty & Old Wiring",
          subtitle:
            "Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.",
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f6.png",
          title: "Short Circuit Repair",
          subtitle:
            "Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.",
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f5.png",
          title: "Install A Ceiling Fan",
          subtitle:
            "Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.",
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f8.png",
          title: "House Management",
          subtitle:
            "Contrary to popular belief, Lorem sum is not simply random text. It has roots in a piece of classical.",
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
    const play = document.querySelector(".play"),
      pause = document.querySelector("#pause"),
      myvideo = document.querySelector("#myvideo");

    play.onclick = function () {
      myvideo.src = "https://www.youtube.com/embed/bk-UboxN760";
    };
    pause.onclick = function () {
      myvideo.src = "";
    };
  },
};
</script>

<style lang="scss" scoped>
.service {
  position: relative;
  padding: 7rem 8%;
  background-color: #f9f9f9;
  &__title {
    text-align: center;
  }

  &-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 7rem;

    &-card {
      padding: 30px 20px;
      box-shadow: var(--box-shadow);
      border-radius: 6px;
      background-color: #fff;
      h2 {
        color: var(--black);
        margin: 1rem 0 1.3rem 0;
      }
      p {
        color: var(--light-black);
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
      .read-more {
        margin-bottom: 2rem;
      }

      &_bg {
        position: relative;
        background-image: url("https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/skill.png");
        background-position: top;
        background-repeat: no-repeat;

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
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          animation: playAnimate 2s ease-in infinite;
          .fas {
            color: #fff;
            font-size: 2rem;
          }
        }
      }
    }
  }

  &__contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    .title {
      width: 45rem;
      flex-shrink: 2;
    }
  }

  // video container {
  .video-container {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.8);
    z-index: 110;
    &.active {
      display: block;
    }
    .fas {
      display: inline-block;
      position: absolute;
      top: 2rem;
      right: 4rem;
      color: var(--yellow);
      font-size: 3rem;
    }
    &__content {
      position: relative;
      width: 1000px;
      height: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      iframe {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
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

// 991px
@media screen and(max-width:991px) {
  .service {
    &-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    &__contact {
      .title {
        width: 30rem;
        font-size: 1.8rem;
      }
    }
  }

  .video-container {
    &__content {
      width: 700px !important;
      height: 450px !important;
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .service {
    &-wrapper {
      display: grid;
      grid-template-columns: 1fr;
    }
    &-wrapper {
      &-card {
        &_bg {
          height: 300px;
        }
      }
    }

    &__contact {
      display: flex;
      flex-direction: column;
      .title {
        text-align: center;
        font-size: 1.8rem;
      }
    }
  }

  .video-container {
    &__content {
      width: 400px !important;
      height: 250px !important;
    }
  }
}
</style>
