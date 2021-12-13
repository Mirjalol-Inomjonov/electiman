<template>
  <section class="process" id="contact">
    <h3 class="section-name">OUR WORKING PROCESS</h3>
    <h1 class="title">Our Company Business Plan</h1>

    <!-- process container -->
    <div class="process-wrapper">
      <div class="process-wrapper__card">
        <i class="icon fa fa-database"></i>
        <h3>Aplication From</h3>
        <p>
          Contrary to popular belief, Lorem sum is not simply random text. It
          has roots in a piece of classical.
        </p>
      </div>
      <div class="process-wrapper__card">
        <i class="icon fa fa-spinner"></i>
        <h3>Work Process</h3>
        <p>
          Contrary to popular belief, Lorem sum is not simply random text. It
          has roots in a piece of classical.
        </p>
      </div>
      <div class="process-wrapper__card">
        <i class="icon fa fa-check"></i>
        <h3>Complate Work</h3>
        <p>
          Contrary to popular belief, Lorem sum is not simply random text. It
          has roots in a piece of classical.
        </p>
      </div>
    </div>

    <!-- form wrapper -->
    <div class="form-container">
      <div class="form-container__text">
        <h2>Our Subscribe</h2>
        <p>Lorem sum is not simply random text.</p>
      </div>

      <form class="form">
        <input
          class="form__input"
          type="text"
          required
          placeholder="Your email address"
        />
        <button class="form__btn">Subscribe</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Process",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.process {
  padding: 3rem 8%;
  text-align: center;
  .process-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    &__card {
      padding: 3rem 2rem 4rem;
      border-radius: 35px 5px 35px 5px;
      box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 6%);
      &:hover {
        .icon {
          animation: icon 0.8s infinite cubic-bezier(0.29, 1.79, 0.68, -0.15);
        }
      }
      .icon {
        font-size: 30px;
        color: #fff;
        height: 80px;
        width: 80px;
        text-align: center;
        border-radius: 50%;
        line-height: 80px;
        background: #ffa500;
        display: inline-block;
        overflow: hidden;
      }
      h3 {
        color: var(--black);
        font-size: 1.6rem;
        margin: 1.5rem 0 0.9rem;
      }
      p {
        font-size: 1.2rem;
        color: var(--light-black);
      }
    }
  }

  .form-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;
    background-image: url("https://demo.themexbd.com/wpt/electiman/wp-content/uploads/2020/12/banner1-1.jpg");
    background-position: center;
    background-size: cover;
    text-align: left;
    padding: 5rem 2.5rem;
    margin: 8rem 0 2rem 0;
    border-radius: 6px;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--yellow);
      opacity: 0.8;
    }

    &__text {
      h2,
      p {
        position: relative;
        z-index: 15;
        color: #fff;
      }
      h2 {
        font-size: 2.6rem;
      }
      p {
        font-size: 1.6rem;
      }
    }

    .form {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 510px;
      background: transparent;
      border-radius: 5px;
      overflow: hidden;
      z-index: 15;

      &__input {
        position: relative;
        display: block;
        flex-grow: 2;
        height: 60px;
        background: transparent;
        font-size: 16px;
        line-height: 28px;
        color: #b0afaf;
        background-color: #fff;
        border: none;
        outline: none;
        padding: 10px 30px;
        z-index: 15;
      }
      &__btn {
        display: block;
        position: relative;
        flex-grow: 1;
        width: 153px;
        height: 60px;
        outline: none;
        border: none;
        font-size: 1rem;
        color: #fff;
        padding: 1rem 1.2rem;
        background-color: var(--black);
        cursor: pointer;
        z-index: 15;
      }
    }
  }
}

@keyframes icon {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

// 576px
@media screen and(max-width:576px) {
  .process {
    .process-wrapper {
      &__card {
        grid-column: 1/4;
      }
    }

    .form-container {
      text-align: center;
      .form {
        &__input {
          border-radius: 6px;
        }
        &__btn {
          margin-top: 2rem;
          border-radius: 6px;
        }
      }
    }
  }
}
</style>
