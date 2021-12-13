<template>
  <section class="faq" id="portfolio">
    <div class="faq-content">
      <div class="faq-content__img">
        <img
          src="	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/skill-1.png"
          alt="dasdsa"
        />
      </div>

      <div class="faq-content__texts">
        <h3 class="section-name">>> faq</h3>
        <h2 class="title">Everybody Has Standard Ours Are Just Better.</h2>
        <p class="subtitle">
          We are committed to providing excellent service to our customers since
          1998. Providing excellent service to customer is our primary goal.
          this goal help our company.
        </p>
      </div>
    </div>

    <!-- status container -->

    <div class="faq__status" data-aos="zoom-in-up">
      <div v-for="(item, index) in status" :key="index">
        <h3 class="faq__status__counter">
          <number
            ref="number1"
            :from="0"
            :to="item.count"
            :format="theFormat"
            :duration="5"
            :delay="0"
            easing="Power1.easeOut"
          />+
        </h3>
        <p class="faq__status__title">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      status: [
        {
          count: 423,
          title: "Happy Client",
        },
        {
          count: 765,
          title: "Complate Project",
        },
        {
          count: 150,
          title: "Electical Company",
        },
        {
          count: 26,
          title: "Win Awards",
        },
      ],
    };
  },

  methods: {
    theFormat(number) {
      return number.toFixed(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.faq {
  padding: 8rem 8% 5rem;
  &-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    &__img {
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    &__texts {
      .title {
        line-height: 1.3;
        margin: 0.6rem 0;
      }
    }
  }

  &__status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 5rem;
    div {
      flex-grow: 2;
      margin-bottom: 3rem;
    }
    &__counter {
      font-family: "Libre Baskerville", serif;
      font-size: 3.5rem;
      color: var(--yellow);
    }
    &__title {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(-black);
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .faq {
    &-content {
      display: grid;
      grid-template-columns: 1fr;
    }
    &__status {
      padding: 2rem;
    }
  }
}
</style>
