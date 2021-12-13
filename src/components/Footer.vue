<template>
  <div>
    <footer class="footer">
      <div class="footer__navbar">
        <ul>
          <li>Help Link</li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> About Company</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> IFor Customers</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> SEO Blog & News</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Careers & Reviews</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Sitemap</router-link>
          </li>
        </ul>

        <ul>
          <li>Help Link</li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> About Company</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> IFor Customers</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> SEO Blog & News</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Careers & Reviews</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Sitemap</router-link>
          </li>
        </ul>

        <ul>
          <li>Help Link</li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> About Company</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> IFor Customers</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> SEO Blog & News</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Careers & Reviews</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Sitemap</router-link>
          </li>
        </ul>

        <ul>
          <li>Help Link</li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> About Company</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> IFor Customers</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> SEO Blog & News</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Careers & Reviews</router-link>
          </li>
          <li>
            <i class="fas fa-arrow-circle-right"></i>
            <router-link to="#"> Sitemap</router-link>
          </li>
        </ul>
      </div>
    </footer>
    <div class="copyright">
      <p>Copyright © electiman all rights reserved.</p>
      <ul>
        <li><router-link to="#about">About</router-link></li>
        <li><router-link to="#service">Service</router-link></li>
        <li><router-link to="#contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 8%;
  background: #0a0a0a;

  &__navbar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    ul {
      li {
        margin-bottom: 1.5rem;
        .fas {
          font-size: 1rem;
          margin-right: 5px;
          color: var(--yellow);
        }
        &:first-child {
          color: #fff;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        a {
          color: #fff;
          font-size: 1.2rem;
          transition: 0.2s;
        }
        &:hover {
          .fas {
            visibility: visible;
          }
          a {
            color: var(--yellow);
            padding-left: 10px;
          }
        }
      }
    }
  }
}
.copyright {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  padding: 1.5rem 8%;
  font-family: sans-serif;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #ffffff21;
    height: 1px;
    width: 61%;
    margin: auto;
  }
  p {
    color: #fff;
    font-size: 1rem;
  }
  ul {
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: #fff;
        font-size: 1rem;
        transition: 0.2s;
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
}

@media screen and(max-width:576px) {
  .footer {
    &__navbar {
      ul {
        grid-column: 1/5;
      }
    }
  }
  .copyright {
    text-align: center;
    flex-direction: column;
    &::before {
      width: 100%;
    }
    p {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
