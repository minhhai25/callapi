<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="home">
  <article-content></article-content>
   
  </div>
</template>

<script>
import Article from '../components/Article.vue';

export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
   'article-content':Article
  }
  
};
</script>

<style>

</style>
