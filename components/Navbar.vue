<template>
  <nav>
    <div class="container">
      <a href="#" class="nav-logo">
        <img src="https://www.placehold.it/400x50"></img>
      </a>
      <div class="nav-button"></div>
      <ul class="nav-links">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

nav {
  border: 1px dashed purple;
  .container {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: $baseWidth;
    padding: 1rem;
    .nav-logo {
      line-height: 10px;
    }
    .nav-button {
      border: 1px solid black;
      height: 2rem;
      min-width: 2rem;
      margin-left: 1rem;
      cursor: pointer;
    }
    .nav-links {
      align-content: center;
      align-items: center;
      display: none;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      width: 35%;
      li {
        a {
          height: 100%;
        }
      }
    }
  }
}

@media screen and (min-width: $baseWidth) {
  nav {
    .container {
      justify-content: space-between;
      flex-direction: row;
      padding: 1rem 0;
      .nav-button {
        display: none;
      }
      .nav-links {
        display: flex;
      }
    }
  }
}
</style>




