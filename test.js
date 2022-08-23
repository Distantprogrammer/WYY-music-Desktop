// this.oneSearchList = data.result.songs / / 单曲
// const res = await CloudSearchAPI({
//   keywords: this.searchValue,
//   limit: 5,
//   type: 10
// })

// this.albumSearchList = res.data.result.albums // 专辑
// const res2 = await CloudSearchAPI({
//   keywords: this.searchValue,
//   limit: 5,
//   type: 100
// })

// this.singesSearchList = res2.data.result.artists // 歌手
// const res3 = await CloudSearchAPI({
//   keywords: this.searchValue,
//   limit: 5,
//   type: 1000
// })

// this.searchSongList = res3.data.result.playlists // 歌单

// switch (this.searchType[i]) {
//   case 1:
//     console.log(result.songs)
//     this.onesearchList = result.songs // 单曲
//     break
//   case 2:
//     console.log(result.albums)
//     this.albumSearchList = result.albums // 专辑
//     break
//   case 3:
//     console.log(result.artists)
//     this.singesSearchList = result.artists // 歌手
//     break
//   case 4:
//     this.searchSongList = result.playlists // 歌单
//     break
//   default:
//     break
// }

// if (this.searchType[i] === 1) {
//   this.oneSearchList = result.songs // 单曲
// } else if (this.searchType[i] === 10) {
//   this.albumSearchList = result.albums // 专辑
// } else if (this.searchType[i] === 100) {
//   this.singesSearchList = result.artists // 歌手
// } else this.searchSongList = result.playlists // 歌单
