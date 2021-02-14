<template>
  <footer>
    <div class="container">
      <a href="#" class="footer-logo">
        <img src="https://www.placehold.it/400x50"></img>
      </a>
      <ul class="footer-links">
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
      </ul>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
@import '~/assets/css/main.scss';

footer {
  border: 1px dashed purple;
  position: fixed;
  bottom: 0;
  width: 100%;
  
  .container {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 0 auto;
    max-width: $baseWidth;
    padding: 1rem;

    .footer-links {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;
      list-style: none;
      margin: 1rem 0;
      padding: 0;
      width: 35%;
      li {
        a {
          font-size: $fontSmall;
        }
      }
    }
  }
}

@media screen and (min-width: $baseWidth) {
  footer {
    .container {
      padding: 1rem 0;
      // justify-content: space-between;
      flex-direction: row;
    }
  }
}
</style>