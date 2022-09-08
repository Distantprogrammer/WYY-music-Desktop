<template>
  <div class="login">
    <van-nav-bar @click-right="onClickRight">
      <template #right>
        <span class="el-icon-close"></span>
        <!-- <van-icon name="search" size="18" /> -->
      </template>
    </van-nav-bar>
   <div class="loginMain">
    <van-row> <h1>扫码登录</h1></van-row>
    <van-row> <img src="../../images/QR.png" alt=""></van-row>
    <van-row> <span>使用<a href="#">网易云APP扫码登录</a></span></van-row>
    </div>
    <van-row class="pattern"> 选择其他登录模式</van-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    // 关闭
    onClickRight () {
      console.log(111)
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 350px;
  height: 530px;
  background-color: #fff;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .van-hairline--bottom::after {
    border: none;
  }
  .loginMain{
    display: flex;
    flex-direction: column;
    align-items: center;
    .van-row{
      margin: 20px 0;

    }
  }
  .pattern{
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
  }
}
</style>
