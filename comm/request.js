//正在热映异步请求
let fetchHotFilm = (options)=>{
    return new Promise((reslove,reject)=>{
       wx.request({
            url:options.url,
            header:{
                "Content-type":'application/json' //设置请求内容为json，否则请求失败
            },
            data:options.data,
            success:(data)=>reslove(data),
            faile:(data)=>reject(data)
        })
    }).then((data)=>data.data);     
}

let when = (options=[]) => {
   return Promise.all(options);
}

module.exports = {
    fetchHotFilm: fetchHotFilm,
    when: when
}

