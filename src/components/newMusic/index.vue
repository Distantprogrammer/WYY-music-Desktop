<template>
  <div class="newMMusic">
    <table
      class="search_single_table"
      border="0"
      cellpadding="0"
      cellspacing="0"
    >
      <tr v-for="(a,i) in 20" :key="i">
        <td class="flexTd">
          <div class="isfontSize"><span> 01</span></div>
          <!-- {{ index + 1 > 9 ? index + 1 : '0' + (index + 1) }} -->
          <div class="podcast_img position_relative" @click="playFn(obj.id)">
            <playBtn class="playBtn"></playBtn>
            <img src="@/images/logo.jpg" alt="" />
          </div>
          <div class="isnavBar">歌曲</div>
        </td>
        <td class="isfontSize"><div class="isfontSize">321歌手31231</div></td>
        <td class="isfontSize">5645645专辑</td>
        <td class="isfontSize">
          <span class="song_time">
            231231231
            <!-- {{ obj.song.hMusic.playTime | secondeTime }} -->
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import playFn from '@/utils/play'
export default {
  methods: {
    playFn (data) {
      playFn(data)
    }
  }
}
</script>

<style lang="less" scoped>
.newMMusic {
  table {
    width: 100%;
    vertical-align: middle;
    tr {
      &:nth-child(2n-1) {
        background-color: #2f2f2f;
      }
      .flexTd {
        display: flex;
        align-items: center;
        & > div {
          margin-right: 15px;
        }
        &:nth-child(3) {
          // width: 200px;
          // height: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .podcast_img {
          position: relative;
          width: 65px;
          height: 65px;
          border-radius: 0.1667rem;
          overflow: hidden;
          font-size: 11px;
          .playBtn {
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 30px;
            height: 30px;
            transform: translate(-50%, -50%);
            transition: all 0.3s;
          }
          &:hover .playBtn {
            opacity: 1;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      td {
        font-size: 13px;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.4167rem 0 0.4167rem 0.8333rem;
        &:nth-child(2),
        &:nth-child(3) {
          // width: 200px;
          // height: 50px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .isfontSize {
      color: @fontsize;
    }
    .isnavBar {
      color: @navBar;
    }
  }
}
</style>
