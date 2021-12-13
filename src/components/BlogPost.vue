<template>
  <section class="blog-post" id="blog">
    <h3 class="section-name">BLOG POST</h3>
    <h2 class="title">Our Latest Blog</h2>
    <p class="subtitle">
      We ipsum dolor sit amet consect adipiscing elit, sed do eiusmod tempor
      incididunt.
    </p>

    <div class="blog-container">
      <div v-for="(card, i) in blogCards" :key="i" class="blog-container__card">
        <div class="blog-container__card__img">
          <img :src="card.img" alt="fafad" />
        </div>
        <div class="blog-container__card-texts">
          <span class="blog-container__card-texts__date">
            <i class="far fa-calendar-plus"></i>
            {{ card.date }}
          </span>
          <h3 class="blog-container__card-texts__title">{{ card.title }}</h3>
          <button class="btn btn_outline">read more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      blogCards: [
        {
          img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/b1-390x350.jpg",
          date: "Dec 12 2020",
          title: "Will severely limit decarboni sation potential",
        },
        {
          img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/b2-390x350.jpg",
          date: "Dec 12 2020",
          title: "Industry stakeholders call for EU recognition",
        },
        {
          img: "https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/b3-390x350.jpg",
          date: "Dec 12 2020",
          title: "Traspak champions road transport excellence in",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-post {
  padding: 3rem 8%;
  text-align: center;

  .title {
    margin: 0.6rem 0 1rem;
  }

  .blog-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: left;
    &__card {
      width: 100%;
      background-color: #ffffff;
      box-shadow: var(--box-shadow);
      padding-bottom: 1rem;
      margin-top: 4rem;
      &__img {
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          transition: 0.4s;
          vertical-align: middle;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba($color: #000000, $alpha: 0.6);
          transform: scale(0);
          transition: all 0.3s linear;
        }
        &:hover {
          img {
            transform: scale(1.2);
          }
        }
        &:hover::before {
          transform: scale(1);
          z-index: 5;
        }
      }

      &-texts {
        padding: 1rem;

        &__date {
          display: block;
          font-size: 1.2rem;
          margin: 0.5rem 0;
          color: var(--yellow);
          i {
            display: inline-block;
          }
        }
        &__title {
          color: var(--black);
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
}

// 576px
@media screen and(max-width:576px) {
  .blog-post {
    .blog-container {
      &__card {
        grid-column: 1/4;
      }
    }
  }
}
</style>
