<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");
:root {
  --yellow: #ffa500;
  --dark-yellow: #964b00;
  --black: #222222;
  --light-black: #a0a0a0;
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
}
.btn {
  padding: 12px 24px;
  background-color: var(--yellow);
  border: none;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: #fff;
  outline: none;
  border-radius: 6px;
  text-transform: capitalize;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: var(--dark-yellow);
    color: #fff !important;
  }
  &:active {
    transform: scale(0.98) !important;
  }
  &_lg {
    padding: 20px 40px;
  }

  &_outline {
    border: 1.5px solid #a0a0a0;
    background-color: #fff;
    color: var(--yellow);
    &:hover {
      color: #fff;
      border-color: var(--yellow);
      background-color: var(--yellow);
    }
  }
}

.read-more {
  display: inline-block;
  color: #ffa500;
  font-size: 15px;
  font-weight: 700;
  border-style: solid;
  border-width: 2px 0px 0px 0px;
  border-color: #ffa500;
  border-radius: 5px 5px 5px 5px;
  margin: 0px 0px 0px 0px;
  padding: 10px 20px 10px 20px;
  text-transform: uppercase;
  transition: 0.25s;
  &:hover {
    color: #ffffff;
    background-color: #ffa500;
  }
}

.section-name {
  color: var(--yellow);
  font-size: 1.3rem;
  text-transform: uppercase;
}
.title {
  color: var(--black);
  font-size: 2.6rem;
  margin: 1.5rem 0 3rem 0;
  line-height: 1.5;
  letter-spacing: 1px;
}
.subtitle {
  color: var(--light-black);
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
