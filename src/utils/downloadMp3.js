// 绑定的点击事件为down，就举个栗子@click=“down（record）”你懂的。没record就放空就好了
function down (id) {
  // 调用downloadMp3函数方法，传一个地址给这个函数，举个栗子：http：//某MP3或者mouMP4文件,如果后台获取的就像我那样子传进去一个视频或者音频地址就行。
  downloadMp3(`https://music.163.com/song/media/outer/url?id=${id}.mp3`)
}
// 下载mp3调用的方法，这边你拷过去就行了，原理是啥的话有人问你就说举个栗子：没有栗子
// 这边downloadMp3(filePath)的filePath就是点击事件传过来的地址啦。然后他就会下载了。
function downloadMp3 (filePath) {
  fetch(filePath).then(res => res.blob()).then(blob => {
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.style.display = 'none'
    // 使用获取到的blob对象创建的url
    const url = window.URL.createObjectURL(blob)
    a.href = url
    // 指定下载的文件名，就‘’写默认的下载名字。不指定他就根据上传名直接下载了宝。
    a.download = ''
    a.click()
    document.body.removeChild(a)
    // 移除blob对象的url
    window.URL.revokeObjectURL(url)
  })
}
export default {
  down,
  downloadMp3
}
