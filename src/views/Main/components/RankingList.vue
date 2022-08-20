<template>
  <div class="rankingList">
    <!-- 官方榜 -->
    <div class="official_list">
      <h3 class="public_title">
        官方榜
        <!-- <i class="iconfont icon-arrow-right-bold arrow_right"></i> -->
      </h3>
      <!-- portion 部分  显示部分数据-->
      <div
        class="portion_list"
        v-for="(obj, index) in official_list"
        :key="index"
      >
        <div class="portion_img">
          <Playbtn class="playBtn" />
          <span class="updateTime"
            >{{ obj.updateTime | monthTime('MM月DD日') }}更新</span
          >
          <img :src="obj.coverImgUrl" alt="" />
        </div>
        <div class="portion_title">
          <ul>
            <li class="clearfix">
              <div class="portion_titlt_box">
                <span class="if_bigthree">1</span>
                <span class="else_smthree">5431%</span>
                <span style="color: #ddd"
                  >起风了<span class="else_smthree"
                    >(永结无间主题曲时间比较阿萨苏打水大会上的哈)</span
                  >
                </span>
                <span class="title_rigth">歌手</span>
              </div>
            </li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>
              查看全部
              <i class="iconfont icon-arrow-right-bold arrow_right"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- for循环 -->
      <div class="new_list"></div>
      <div class="original_list"></div>
      <div class="host_list"></div>
    </div>
    <!-- 全球榜 -->
    <div class="global_list">
      <h3 class="public_title">
        全球榜
        <!-- <i class="iconfont icon-arrow-right-bold arrow_right"></i> -->
      </h3>
      <div class="global_box">
        <ul>
          <li v-for="obj in global_list" :key="obj.id">
            <div class="global_img">
              <Playbtn class="playBtn" />
              <img :src="obj.coverImgUrl" alt="" />
            </div>
            <p class="global_text">{{ obj.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { RankingListAPI } from '@/api'
import Playbtn from '@/components/playBtn.vue'
export default {
  name: 'RankingList',
  data () {
    return {
      official_list: [], // 官方
      global_list: [] // 全球
    }
  },
  created () {
    this.getRankingList() // 排行榜
  },
  methods: {
    async getRankingList () {
      const {
        data: { list }
      } = await RankingListAPI()
      this.official_list = list.slice(0, 4) // 截取数组
      this.global_list = list.slice(4)
    }
  },
  components: {
    Playbtn
  }
}
</script>

<style lang="less" scoped>
.arrow_right {
  font-size: 12px;
  font-weight: normal;
}
.global_box,
.portion_list {
  margin-top: 20px;
}
.public_title {
  font-size: 1rem;
  font-weight: 800;
  color: #d0d0d0;
}
// 官方
.official_list {
  // 图片
  .portion_list {
    display: flex;
    margin-bottom: 28px;
    .portion_img {
      overflow: hidden;
      position: relative;
      width: 172px;
      height: 172px;
      max-width: 172px;
      max-height: 172px;
      background-color: #fff;
      border-radius: 4px;
      .playBtn {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }
      &:hover .playBtn {
        opacity: 0.9;
      }
      .updateTime {
        position: absolute;
        top: 67%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  //内容
  .portion_title {
    flex: 1;
    ul {
      margin-left: 30px;
      li {
        height: 35px;
        line-height: 35px;
        border-radius: 2px;
        color: #000;
        font-weight: 600;
        &:nth-child(2n-1) {
          background-color: #2f2f2f;
        }
        &:hover {
          background-color: #333;
        }
        .portion_titlt_box {
          padding: 0 14px;
          // 大于三的显示的颜色
          .if_bigthree {
            color: red;
          }
          .else_smthree {
            color: #7a7e80;
          }
          // 小于三显示的颜色
          & > span {
            padding: 0 8px;
          }
          .title_rigth {
            float: right;
          }
        }
      }
    }
  }
}
// 全球
.global_list {
  .global_box {
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        flex: 16.6666%;
        margin: 0 0.4167rem 0.4167rem 0;
        .global_img {
          position: relative;
          max-width: 210px;
          max-height: 210px;
          min-width: 140px;
          min-height: 140px;
          width: 8.75rem;
          height: 8.75rem;
          border-radius: 0.2083rem;
          overflow: hidden;
          .playBtn {
            opacity: 0;
            position: absolute;
            bottom: 6%;
            right: 6%;
            width: 1.25rem;
            height: 1.25rem;
            transition: all 0.3s;
          }
          &:hover .playBtn {
            opacity: 0.9;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .global_text {
          max-width: 210px;
          width: 8.75rem;
          padding-top: 0.2917rem;
          font-size: 14px;
          color: #d0d0d0;
        }
      }
    }
  }
}
</style>
