<template>
  <section class="partner-container">
    <h3 class="section-name">COMPANY</h3>
    <h2 class="title">Our Best Partner</h2>
    <p class="subtitle">
      We ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor
      incididunt.
    </p>

    <div class="partners">
      <div class="partners__card" v-for="(card, i) in partners" :key="i">
        <div class="partners__card__img">
          <img :src="card.img" alt="dadas" />
        </div>
        <div class="partners__card__text">
          <h3>{{ card.name }}</h3>
          <p>{{ card.job }}</p>

          <!-- social networks -->
          <div class="social-networks">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-tumblr"></i>
            </a>
            <a href="#">
              <i class="fab fa-vimeo-v"></i>
            </a>
            <a href="#"> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyPartner",
  data() {
    return {
      partners: [
        {
          img: "	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/t1.jpg",
          name: "Nicolas Poran",
          job: "Founder",
        },
        {
          img: "		https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/t2.jpg",
          name: "Liton Poran",
          job: "Electrition",
        },
        {
          img: "	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/t3.jpg",
          name: "Ricolas Sarkar",
          job: "Manager",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partner-container {
  padding: 6rem 8%;
  text-align: center;
  .title {
    margin: 0.6rem 0 1rem;
  }

  .partners {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;

    &__card {
      position: relative;
      overflow: hidden;
      &:hover {
        .partners__card__text {
          transform: translate(-50%, 0);
        }
      }

      &__img {
        width: 100%;
        padding-bottom: 3rem;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      &__text {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 44%);
        padding: 1.6rem 1rem;
        margin: 0 auto;
        width: calc(100% - 2rem);
        color: #fff;
        background-color: var(--yellow);
        transition: all 0.2s linear;

        h3 {
          font-size: 2rem;
        }
        p {
          font-family: sans-serif;
          font-size: 1.2rem;
          margin: 0.6rem 0;
        }
        .social-networks {
          margin-top: 1.5rem;
          width: 100%;
          i {
            display: inline-block;
            margin: 0 0.5rem;
            width: 36px;
            height: 36px;
            font-size: 1.3rem;
            line-height: 1.9;
            color: var(--yellow);
            background: #fff;
            border-radius: 50%;
            transition: all 0.3s linear;
            &:hover {
              transform: rotateZ(360deg);
            }
          }
        }
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .partner-container {
    .partners {
      &__card {
        grid-column: 1/4;
      }
    }
  }
}
</style>
