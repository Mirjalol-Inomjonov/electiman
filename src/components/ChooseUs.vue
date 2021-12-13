<template>
  <section class="choose-us">
    <div>
      <h2 class="section-name">>>WHY CHOOSE US</h2>
      <h1 class="title">A Digital Agency Craftis Beautiful Experiences.</h1>
      <p class="subtitle">
        We are committed to providing excellent service to our customers since
        1998. Providing excellent service to customer is our primary goal. this
        goal help our company.
      </p>

      <div class="service-content">
        <div class="service-content__img">
          <img
            src="	https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f9.png"
            alt="dsada"
          />
        </div>
        <div>
          <router-link class="service-content__link" to="#"
            >24/7 Business Support</router-link
          >
          <p class="service-content__subtitle">
            Our people at Fixtech are most valuable assets. they are the faces
            of our organization.
          </p>
        </div>
      </div>

      <div class="service-content">
        <div class="service-content__img">
          <img
            src="https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/f7.png"
            alt="dsada"
          />
        </div>
        <div>
          <router-link class="service-content__link" to="#">
            Easy And Quick Problem</router-link
          >
          <p class="service-content__subtitle">
            Our people at Fixtech are most valuable assets. they are the faces
            of our organization.
          </p>
        </div>
      </div>

      <button class="btn">contact now</button>
    </div>

    <div class="choose-us__img">
      <img
        src="https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/choose-1.png"
        alt="cascsa"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ChooseUs",
};
</script>

<style lang="scss" scoped>
.choose-us {
  padding: 25rem 8% 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  .title {
    margin: 0.6rem 0 1rem;
  }

  .service-content {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    &__img {
      width: 80px;
      margin-right: 1rem;
      img {
        width: 100%;
      }
    }

    &__link {
      font-size: 1.6rem;
      color: var(--black);
      transform: 0.25s;
      &:hover {
        color: var(--yellow);
      }
    }
    &__subtitle {
      font-size: 1rem;
      margin-top: 0.6rem;
      line-height: 1.5rem;
      letter-spacing: 0.6px;
      color: var(--light-black);
    }
  }

  .btn {
    margin-top: 4rem;
  }
  &__img {
    text-align: right;
    img {
      width: 356px;
      object-fit: cover;
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .choose-us {
    padding-top: 45rem;
    grid-template-columns: 1fr;
    .service-content {
      flex-direction: column;
      &__img {
        width: 50px;
      }
    }
  }
}

// 375px
@media screen and(max-width:375px) {
  .choose-us {
    padding-top: 50rem;
    .title {
      font-size: 1.6rem;
    }
  }
}
</style>
