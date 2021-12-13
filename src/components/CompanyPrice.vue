<template>
  <section class="company-price-container">
    <h3 class="section-name">COMPANY PRICE</h3>
    <h2 class="title">Our Pricing Plan</h2>
    <p class="subtitle">
      We ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor
      incididunt.
    </p>

    <!-- cards wrapper -->
    <div class="cards">
      <div class="cards__item" v-for="(card, index) in cards" :key="index">
        <span class="cards__item__icon">
          <img :src="card.icon" alt="fafdaf" />
        </span>
        <h3 class="cards__item__title">{{ card.title }}</h3>
        <p class="cards__item__price">${{ card.price }}/month</p>
        <p class="cards__item__subtitle">{{ card.subtitle }}</p>
        <button class="btn btn_outline">select plan</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyPrice",
  data() {
    return {
      cards: [
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f5.png",
          title: "Basic Plan",
          price: 86.99,
          subtitle: `Video & Audio Assets
                      Graphic & Design assets
                      Presentation templatesf`,
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f7.png",
          title: "Basic Plan",
          price: 98.99,
          subtitle: `Video & Audio Assets
                      Graphic & Design assets
                      Presentation templatesf`,
        },
        {
          icon: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f8.png",
          title: "Basic Plan",
          price: 59.99,
          subtitle: `Video & Audio Assets
                      Graphic & Design assets
                      Presentation templatesf`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.company-price-container {
  padding: 3px 8%;
  text-align: center;
  .title {
    margin: 0.6rem 0 1rem 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 5rem;
    &__item {
      background-color: #fff;
      border: 2px solid #ddd;
      border-radius: 6px;
      padding: 2.5rem 1.8rem;
      transition: all 0.2s linear;
      &:hover {
        border-color: var(--yellow);
      }

      &__icon {
        display: inline-block;
        width: 70px;
        height: 70px;
        margin-bottom: 2rem;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      &__title {
        color: var(--black);
        font-size: 2.4rem;
        letter-spacing: 1px;
      }
      &__price {
        color: var(--black);
        font-weight: 550;
        font-size: 1.6rem;
        letter-spacing: 1px;
        margin: 1rem 0 1.3rem;
      }
      &__subtitle {
        color: var(--light-black);
        line-height: 2;
        margin-bottom: 2.5rem;
      }
    }
  }
}

@media screen and(max-width:576px) {
  .company-price-container {
    .cards {
      &__item {
        grid-column: 1/4;
      }
    }
  }
}
</style>
