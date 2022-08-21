<template>
  <div class="search-history">
    <van-cell>
      <div slot="title" class="history_search_title">
        搜索历史 &nbsp;&nbsp;
        <van-icon name="delete-o" class="dalete_all"/>
      </div>
      <div class="look_all">查看全部</div>
    </van-cell>
    <!-- 历史记录 -->
    <div class="history_list">
      <span>海阔天空</span>
      <span>海阔大青蛙大青蛙大全天空</span>
      <span>海阔天空</span>
      <span>海阔天空</span>
      <span>海阔天好歹是个大十大空</span>
      <span>海阔天空</span>
      <span>海阔天是个豆腐干地方的回复空</span>
      <span>海阔天空</span>
    </div>
    <!-- 热搜榜 -->
    <div class="host_search">
      <h3 class="host_search_title">热搜榜</h3>
      <div class="host_search_list">
        <ul>
          <li v-for="(obj, index) in DetailSearch" :key="index">
            <!-- 排序 -->
            <div class="host_search_number">
              <span> {{ index + 1 }} </span>
            </div>
            <!-- 信息 -->
            <div class="host_search_msg">
              <div>
                <span class="host_search_name">
                  {{ obj.searchWord }}
                  <span><img :src="obj.iconUrl" alt="" /></span>
                </span>
                <span class="host_search_quantity"> {{ obj.score }} </span>
              </div>
              <p class="introduce">这是hi哈桑大叔的哈哈哈上海市肌肤水分和</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { DetailSearchAPI } from '@/api'
export default {
  name: 'searchHistory',
  data () {
    return {
      DetailSearch: [] // 热搜列表
    }
  },
  created () {
    this.getDetailSearch() // 热搜列表
  },
  methods: {
    // 热搜列表
    async getDetailSearch () {
      const {
        data: { data }
      } = await DetailSearchAPI()
      this.DetailSearch = data
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.search-history {
  .history_list {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    span {
      margin: 0 10px 10px 0;
      display: block;
      border: 1px solid #ccc;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 12px;
    }
  }
  // 标题
  .history_search_title,
  .host_search_title,.dalete_all,.look_all {
    color: rgb(175, 141, 141);
  }
  .host_search {
    // 数据
    .host_search_list {
      ul {
        margin-top: 20px;
        li {
          display: flex;
          align-items: center;
          padding: 10px 0;
          &:nth-child(-n + 3) {
            .host_search_number {
              span {
                color: red;
              }
            }
          }
          .host_search_number {
            span {
              font-size: 16px;
              color: rgb(175, 141, 141);
            }
          }
          .host_search_msg {
            display: flex;
            flex-direction: column;
            margin-left: 24px;
            div {
              color: #d6d6d6;
              .host_search_name {
                span {
                  // display: block;
                  color: red;
                  margin-left: 10px;
                  img {
                    // width: 14px;s
                    height: 14px;
                  }
                }
              }
              .host_search_quantity {
                color: #69696b;
                margin-left: 10px;
              }
            }
            .introduce {
              color: #69696b;
            }
          }
        }
      }
    }
  }
}
</style>
