<template>
  <table class="search_single_table">
    <thead>
      <tr>
        <td v-for="(str, index) in listTable" :key="index">{{ str }}</td>
      </tr>
    </thead>
    <tbody class="search_single_list">
      <tr
        v-for="(obj, index) in singleMsg"
        :key="obj.id"
        @dblclick="play(obj.id)"
      >
        <td class="isfontSize">
          {{ index + 1 > 9 ? index + 1 : '0' + (index + 1) }}
          <span> &nbsp;&nbsp;- &nbsp;&nbsp;</span>
          <i class="iconfont icon-xihuan"></i>
          &nbsp;&nbsp;
          <i
            class="iconfont icon-xiazai"
            @click="downloadMp3(obj.id, obj.name)"
          ></i>
        </td>
        <td class="isnavBar">{{ obj.name }}</td>
        <td  class="isnavBar" v-if="obj.ratio">{{ obj.ratio }}%</td>
        <td class="isfontSize">{{ obj.ar[0].name }}</td>
        <td class="isfontSize">{{ obj.al.name }}</td>
        <td class="isfontSize">{{ obj.dt | secondeTime }}</td>
        <td class="isfontSize" v-if="listTable.length === 6 ">热度</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import down from '@/utils/downloadMp3'
import playFn from '@/utils/play'
export default {
  name: 'songList',
  props: {
    singleMsg: {
      required: true
    },
    listTable: {
      require: true
    }
  },
  methods: {
    play (list) {
      playFn(list)
    },
    downloadMp3 (id, downFileName) {
      down(id, 'standard', downFileName)
    }
  }
}
</script>

<style lang="less" scoped>
table {
  width: 100%;
  vertical-align: middle;
  thead {
    td {
      color: @fontsize;
    }
  }
  .isfontSize {
    color: @fontsize;
  }
  .isnavBar{
    color:@navBar;
  }
  td {
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.4167rem 0.8333rem;
    &:nth-child(2),
    &:nth-child(4) {
      // width: 200px;
      // height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
