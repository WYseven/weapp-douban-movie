//index.js
//获取应用实例
var request = require('../../comm/request.js')
//正在热映
const filmURL = 'http://api.douban.com/v2/movie/in_theaters'
//即将上映
const filmFuture = 'http://api.douban.com/v2/movie/coming_soon'
//Top250
const filmUsURL = 'http://api.douban.com/v2/movie/top250'

/*
    数据格式说明
    {
        headline  大标题
        list 电影列表
    }
*/

var movieHeadLine = ['影院热映','院线即将上映','Top250']

var moviesShow = [];

Page({
    data:{
        loaded:false,
        moviesShow:moviesShow
    },
    onLoad(){ //加载页面执行的函数

        //请求分类电影
        request.when([
            request.fetchHotFilm({
                url:filmURL,
                data:{
                    count:3
                }
            }),
            request.fetchHotFilm({
                url:filmFuture,
                data:{
                    count:3
                }
            }),
            request.fetchHotFilm({
                url:filmUsURL,
                data:{
                    count:3
                }
            })
        ])
        .then((data)=>{
            //整理需要的数据
            data.forEach(function (item,index){
               moviesShow.push({
                    headline:movieHeadLine[index],
                    list:item.subjects
               })     
            });
            //更新视图
            this.setData({
                loaded:true,
                moviesShow:moviesShow
            })
        })
        .catch((data)=>{  //错误处理,如果有一个失败，应该都失败，处理方式？？？
            console.log( data );
        })


    }
})
