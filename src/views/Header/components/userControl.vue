<template>
<div class="userControl" >
  12312132
</div>
</template>

<script>
// import { showBox } from '@/utils/documentClick'
export default {
  name: 'userControl',
  model: {
    prop: 'userControlShow'
  },
  props: {
    userControlShow: {
      type: Boolean
    }
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
.userControl{
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 400px;
  background-color: #fff;
}
</style>
