//index.js
//获取应用实例
var app = getApp()
//正在热映
const filmURL = 'http://api.douban.com/v2/movie/in_theaters'

/*
    {
        headline  大标题
        list 电影列表
            [
                {
                    poster 电影封面
                    title 电影标题
                    grade 评分
                }
            ]
    }
*/

var moviesShow = [
    {
        'headline':"影院热映",
        'list':[]
    }
]

Page({
    data:{
        title:"欢迎使用豆瓣电影",
        loaded:false,
        moviesShow:moviesShow
    },
    onLoad(){ //加载页面执行的函数
        var that = this;

        //发送请求
        wx.request({
            url:filmURL,
            header:{
                "Content-type":'text/json' //设置请求内容为json，否则请求失败
            },
            data:{
                count:1
            },
            success(data){
                console.log( data );
                that.setData({
                    loaded:true,
                    
                })
            },
            fail( error ){
                console.log( error );
            }
        });

    }
})
