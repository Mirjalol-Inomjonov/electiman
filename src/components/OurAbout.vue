<template>
  <section class="section" id="about">
    <div>
      <h2 class="section-name">>> OUR ABOUT</h2>
      <h1 class="title">Provide Awesome Service With Our Tools</h1>
      <p class="subtitle">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the rinting and
        typesetting industry Lorem Ipsum has been the industry’s tandard dummy
        text ever since the 1500s when an unknown printer too galley of type and
        scrambled it to make.
      </p>
      <p class="subtitle">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical.
      </p>

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
        <li class="autopraphy">
          <a href="#">
            <img
              src="https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/singb-1.png"
              alt="jsGDUSAHJ"
            />
          </a>
          <span>Co-Funder</span>
        </li>
      </ul>
    </div>
    <div class="workers-img">
      <img :src="ourAboutInfo.img" :alt="ourAboutInfo.alt" />
    </div>
  </section>
</template>

<script>
export default {
  name: "OurAbout",
  data() {
    return {
      ourAboutInfo: {
        img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/about-2.png",
        alt: "lorem",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 12rem 8%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 35px;
  p {
    margin-bottom: 1rem;
  }
  .workers-img {
    text-align: right;
    img {
      object-fit: cover;
    }
  }

  .nav-link {
    margin-top: 2.5rem;
    &__item {
      a {
        display: inline-block;
        color: #645d5d;
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
    .autopraphy {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      a {
        display: inline-block;
        margin-bottom: 0.6rem;
        img {
          width: 8rem;
        }
      }
      span {
        display: inline-block;
        color: #6c6c6c;
      }
    }
  }
}

// 991px
@media screen and (max-width: 991px) {
  .section {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    .workers-img {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .section {
    padding-top: 3rem;
  }
}
</style>
