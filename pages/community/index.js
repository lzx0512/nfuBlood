// pages/community/index.js
Page({
  data: {
    question:[
      {
        id:1,
        text:"献血前应该注意什么？",
        question_url:""
      },{
        id:3,
        text:"哪些人不能献血？",
        question_url:""
      },{
        id:4,
        text:"献血对体格有什么要求？",
        question_url:""
      },{
        id:6,
        text:"献血会影响健康吗？",
        question_url:""
      }
    ],
    community:[
      {
        cid:1,
        title:"我想问医务室的工作时间",
        head_img:"http://img.jennyism.club/imgs/2020/05/09677ba03913768c.png",
        nick_name:"Albert",
        content:"在填表那里丢了身份证！！！求助",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=1"
      },
      {
        cid:2,
        title:"请问丢了献血证怎么办",
        head_img:"http://img.jennyism.club/imgs/2020/05/7326eb38ea7e17d4.png",
        nick_name:"阿鲁巴巴",
        content:"好像得带证去盖章？去年下半学期丢的…",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=2"
      },
      {
        cid:3,
        title:"献血证的日期被写错",
        head_img:"http://img.jennyism.club/imgs/2020/05/480fec53fecaeecb.png",
        nick_name:"sunny",
        content:"今天去的献血，回来发现日期被填错了…",
        time:"1分钟前",
        url:"/pages/community_detail/index?cid=3"
      }
    ]
  },
  onLoad:function(options){
    if(JSON.stringify(options) !== '{}'){
      let comm = this.data.community;
      const userInfo = wx.getStorageSync('userInfo');
      comm.unshift({
        cid:4,
        title:options.title,
        head_img:userInfo.avatarUrl,
        nick_name:userInfo.nickName,
        content:options.content,
        time:"2秒前",
        url:"/pages/community_detail/index?cid=4"
      }
      );
      this.setData({
        community:comm
      })
    }
  }
})