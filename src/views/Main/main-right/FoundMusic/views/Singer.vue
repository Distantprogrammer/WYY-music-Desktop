<template>
  <div class="Singer">
    <div
      class="singerNavBar clearfix"
      v-for="(item, index) in singerType"
      :key="index"
    >
      <div class="singerNavBar_main clearfix">
        <h5>{{ item }} :</h5>
      </div>
      <div class="singerNavBar_title clearfix">
        <p
          :class="{ is_active: value[index] == str }"
          v-for="(str, i) in singerArtist[index]"
          :key="i"
          @click="getartistList(index, str)"
        >
          {{ str }}
        </p>
      </div>
    </div>
    <singerBox />
  </div>
</template>

<script>
import { artistListAPI } from '@/api'
import singerBox from '@/components/singerBox'
export default {
  name: 'Singer',
  components: {
    singerBox
  },
  data () {
    return {
      // 歌手分类
      singerType: ['语种', '分类', '筛选'],
      singerArtist: [
        ['全部', '华语', '欧美', '日本', '韩国', '其他'],
        ['全部', '男歌手', '女歌手', '乐队组合'],
        [
          '热门',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          '#'
        ]
      ],
      value: ['全部', '全部', 'A'],
      type: {
        '-1': '全部',
        1: '男歌手',
        2: '女歌手',
        3: '乐队'
      },
      area: {
        '-1': '全部',
        7: '华语',
        96: '欧美',
        8: '日本',
        16: '韩国',
        0: '其他'
      },
      offset: 1
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getartistList (index, str) {
      this.$set(this.value, index, str)
      const obj = {
        area: '',
        type: '',
        initial: ''
      }
      // const arr = {}
      let i = 0
      for (const key in obj) {
        obj[key] = this.value[i]
        i++
      }
      console.log({ ...obj })
      const res = await artistListAPI({
        limit: 30,
        offset: this.offset,
        ...obj
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.Singer {
  .singerNavBar {
    display: flex;
    min-width: 1100px;
    width: 100%;
    padding: 0 20px;
    .singerNavBar_main {
      padding: 10px 0;
      h5 {
        width: 50px;
        color: #ced3dd;
        font-size: 14px;
      }
      // text-align: left;
    }
    .singerNavBar_title {
      padding: 0 0 10px 0;
      display: flex;
      flex-wrap: wrap;
      p {
        padding: 10px 0;
        color: @fontsize;
        width: 50px;
        text-align: center;
      }
    }
    .is_active {
      color: red !important;
    }
  }
}
</style>
