<template>
  <div class="home">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/views/Header/index.vue'
import Footer from '@/views/Footer/index.vue'
import Main from '@/views/Main/index.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Main
  }
}
</script>
