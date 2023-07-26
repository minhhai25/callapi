<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="article">
    <h2>tiêu đề</h2>
    <!-- <div v-for="ati in Article" :key="ati.id" class="left-col">
      <div class="swap">
        <div class="name">{{ ati.title }}</div>
        <img v-bind:src="ati.thumbnail" alt="" />
        <div class="short-ifo">{{ ati.shortDescription }}</div>
      </div>
      <div class="infor">
        <div class="content">{{ ati.content }}</div>
        <div class="date">{{ ati.formattedCreateDate }}</div>
      </div>
    </div> -->
    <div class="left-col">
      <div class="swap">
        <div class="name">Chú cừu thông minh</div>
        <img v-bind:src="ati.thumbnail" alt="" />
        <div class="short-ifo">anh-chu-cuu</div>
      </div>
      <div class="infor">
        <div class="content">
          đây là 1 nhân vật trong 1 bộ phim hoạt hình được yêu thích nhất hiện
          nay của những đứa trẻ
        </div>
        <div class="date"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Article: [],
    };
  },
  mounted() {
    this.getArticle1();
  },
  methods: {
    //   getArticle() {
    //     axios
    //       .get(`https://localhost:7185/api/Article`)
    //       .then((response) => {
    //         console.log(response.data.data[1].categories[0].id);
    //         this.Article = response.data.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   },
    async getArticle() {
      try {
        const response = await axios.get(`https://localhost:7185/api/Article`);
        console.log("log", response);
      } catch (error) {
        alert("loi roi");
      }
    },
  },
};
</script>

<style scoped>
.article {
  position: absolute;
  top: 300px;
  width: 80%;
}
.left-col {
  display: flex;
}
</style>
