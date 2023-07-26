<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div class="nav">
      <div>Home
        <router-link to="/"></router-link>
        <router-view></router-view>
      </div>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="items in Category" :key="items.id">
            <a class="dropdown-item" href="#">{{ items.name }}</a>
          </li>
        </ul>
      </div>
   
      <div>Article</div>
      <div>Blog</div>
      <div>Contact</div>
    </div>
    <h1>Welcome to MinhHai website</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Category: [],
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      axios
        .get("https://localhost:7185/api/category")
        //console.log(response)
        .then((response) => {
          this.Category = response.data;
          console.log(this.Category);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.header {
  background-image: url(../assets/banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: calc(100vw);
  height: 300px;
  position: absolute;
  top: 0;
}
.nav {
  display: flex;
  float: right;
  align-items: space-between;
}
.nav > div {
  padding: 10px 0;
  margin-right: 10px;
  size: 20px;
}
h1 {
  padding-top: 50px;
  color: white;
}
button#dropdownMenuButton1 {
  border: none;
  color: black;
  background: border-box;
  padding: 0;
}
</style>
