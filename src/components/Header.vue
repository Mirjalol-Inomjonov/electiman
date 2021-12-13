<template>
  <header class="header">
    <div class="menu">menu</div>
    <div>
      <router-link to="/" class="logo"><span>e</span>lectiman</router-link>
    </div>

    <!-- navbar -->
    <nav :class="isNavbar ? 'active navbar' : 'navbar'">
      <ul class="navbar-list">
        <li class="navbar-list__item">
          <router-link to="#home">home</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#about">about</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#service">service</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#portfolio">portfolio</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#help">help</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#blog">blog</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#contact">contact</router-link>
        </li>
        <li class="navbar-list__item">
          <router-link to="#" class="btn">booking now</router-link>
        </li>
      </ul>
    </nav>
    <button @click="showNavbar" class="header__burger">
      <i :class="!isNavbar ? 'fas fa-bars' : 'fas fa-times'"></i>
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isNavbar: false,
    };
  },
  methods: {
    showNavbar() {
      this.isNavbar = !this.isNavbar;
      console.log(!this.isNavbar);
    },
  },
  mounted() {
    window.onscroll = function () {
      if (window.scrollY > 100) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 3rem 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  transition: all 0.4s linear;
  &.active {
    box-shadow: var(--box-shadow);
    padding: 1.2rem 8%;
    background-color: var(--black);
    opacity: 0.95;
  }
  .menu {
    display: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .logo {
    font-size: 2.5rem;
    color: #fff;
    text-transform: capitalize;
    font-weight: 700;
    span {
      color: var(--yellow);
    }
  }
  .navbar {
    &-list {
      text-align: right;
      &__item {
        display: inline-block;
        margin-left: 3rem;
        a {
          color: #fff;
          font-weight: 500;
          font-size: 1.2rem;
          transition: 0.25s;
          text-transform: capitalize;
          &:hover {
            color: var(--yellow);
          }
        }
      }
    }
  }
  &__burger {
    display: none;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    color: #fff;
    font-size: 2rem;
  }
}

// 991px
@media screen and (max-width: 991px) {
  .header {
    padding: 5rem 8% 0.4rem;
    background-color: var(--yellow);
    &.active {
      padding: 0.5rem 8%;
    }
    .menu {
      display: block;
    }
    .logo {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      color: var(--black);
      text-align: center;
      padding: 0.8rem 0;
    }
    &__burger {
      display: block;
      z-index: 65;
      .fa-bars {
        transition: all 0.2s linear;
        transform: rotate(-180deg);
      }
      .fa-times {
        transition: all 0.2s linear;
        transform: rotate(180deg);
      }
    }
  }
  .navbar {
    display: block;
    position: absolute;
    top: 8.7rem;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: var(--border);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    // clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transition: all 0.2s linear;
    z-index: 50;
    &.active {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    &-list {
      text-align: left !important;
      &__item {
        margin: 1.5rem;
        display: block !important;
        &:last-child {
          text-align: right;
          position: absolute;
          top: 0.7rem;
          right: 6%;
        }
        a {
          font-size: 2rem;
          color: var(--black) !important;
        }
      }
    }
  }
}
</style>
