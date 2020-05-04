Page({
  data:{
    ImagePath:'',
    face:null
  },
  chooseImg:function(){
    let _this=this
    //小程序自带的吊起摄像头
    wx.chooseImage({
      success:function(res){
        // console.log("成功了")
        // console.log(res)
        wx.uploadFile({
          filePath: res.tempFiles[0].path,
          name: 'image_file',
          url: 'https://ai.qq.com/cgi-bin/appdemo_detectface',
          success:function(info){
          // console.log(info)
          let data=JSON.parse(info.data)
          console.log(data)
          _this.setData({
            ImagePath:res.tempFiles[0].path,
            face:data.data.face[0]
          })
        }
        })
      }
    })
  },
})