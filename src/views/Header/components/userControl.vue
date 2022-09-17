<template>
  <div class="userControl">
    <div class="userControl_stats">
      <div class="userControl-item">
        <span class="count">5456</span>
        <span class="text">动态</span>
      </div>
      <div class="userControl-item">
        <span class="count">800</span>
        <span class="text">关注</span>
      </div>
      <div class="userControl-item">
        <span class="count">12</span>
        <span class="text">粉丝</span>
      </div>
    </div>
    <div class="signIn">
      <button><i></i> 签到</button>
    </div>
    <div class="userControl_serve">
      <ul>
        <li>
          <div>
            <span><i>图标</i> 我的会员</span> <span><i>箭头图标</i></span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 等级</span> <span><i>箭头图标</i></span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 商城</span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 个人信息设置</span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 绑定社交账号</span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 我的客服</span>
          </div>
        </li>
        <li>
          <div>
            <span><i>图标</i> 退出登录</span>
          </div>
        </li>
      </ul>
    </div>
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
  mounted () {}
}
</script>

<style lang="less" scoped>
.userControl {
  position: absolute;
  top: 100%;
  right: 6%;
  width: 280px;
  height: 412px;
  padding: 23px 0px 15px 0px;
  background-color: @popoverBC;
  color: @navBar;
  border-radius: 10px;
  .userControl_stats {
    display: flex;
    padding: 0 20px;
    .userControl-item {
      // height: 130px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .count {
        color: @navBar;
        font-weight: 600;
        font-size: 20px;
      }
      .text {
        font-size: 14px;
        color: @fontsize;
      }
    }
  }
  .signIn {
    margin-top: 10px;
    button {
      display: block;
      margin: 0 auto;
      padding: 5px 12px;
      border-radius: 15px;
      font-size: 14px;
      border: 1px @btnBorder solid;
      background-color: transparent;
    }
  }
  .userControl_serve {
    margin-top: 12px;
    ul {
      li {
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        &:hover {
          background-color: @hover;
        }
        &:first-child div,
        &:nth-child(4) div,
        &:nth-child(6) div,
        &:nth-child(7) div {
          border-top: 1px @btnBorder solid;
        }
        div {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      }
    }
  }
}
</style>
