<template>
    <div>
     <SlideShow/>
     <main>
      <div class="main">
        <div></div>
        <div class="content">
          <!-- 热门推荐 -->
          <div class="hot">
            <div class="hot-top">
              <div class="circle">
              </div>
              <div class="recommend">
                热门推荐
              </div>
              <div class="hot-kinds" v-for="(items,index) in HotKinds" :key="index">
                  <span>{{items}}</span>
                  <span>|</span>
              </div>
              <div class="grow"></div>
              <div class="more">
                <span>更多</span>
                <img src="../assets/arrow.png" alt="">
              </div>
            </div>
            <div class="song-lists">
              <div class="song-list" v-for="(items,index) in HotLists" :key="index">
                <div>
                  <img :src="HotLists[index].Img" alt="">
                  <div class="list-icon">
                      <img src="../assets/headset.png" alt="">
                      <p>{{items.AountOfPlay}}</p>
                      <img src="../assets/play.png" alt="">
                  </div>
                </div>
                <div class="description">
                  <p>{{items.Description}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 新碟上架 -->
          <div class="new">
            <div class="new-top">
              <div class="circle"></div>
              <div class="recommend">
                新碟上架
              </div>
              <div class="grow"></div>
              <div class="more">
                <span>更多</span>
                <img src="../assets/arrow.png" alt="">
              </div>
            </div>
            <div class="contain">
              <p @click="Rupdate">&lt;</p>
              <p class="r"  @click="Lscroll()">></p>
              <div class="disks">
              <div class="disk" v-for="(items,index) in NewDisk" :key="index" :style="NewDisk[index].style">
                <div class="plate">
                  <img :src="NewDisk[index].Img" alt="">
                </div>
                <div class="song-name">{{items.SongName}}</div>
                <div class="singer">{{items.Singer}}</div>
              </div>
            </div>
            </div>
            
          </div>
          <!-- 榜单 -->
           <div class="lists">
            <div class="lists-top">
              <div class="circle">
              </div>
              <div class="recommend">
                榜单
              </div>
              <div class="grow"></div>
              <div class="more">
                <span>更多</span>
                <img src="../assets/arrow.png" alt="">
              </div>
            </div>
            <div class="lists-content">
             <div class="list" v-for="(items,index) in ListRank" :key="index">
              <div class="list-top">
                <img :src="items.img" alt="">
                <div class="list-name">
                  <h3>{{items.listname}}</h3>
                  <img src="../assets/play2.png" alt="">
                  <img src="@/assets/enshrine.png" alt="">
                </div>
              </div>
              <div class="list-bottom">
                <div v-for="(items,index) in ListRank[index].listrank" :key="index" >
                  <div class="list-item1" v-if="index % 2 == 0">
                    <span class="ranking-red" v-if="index < 3">{{index + 1}}</span>
                    <span class="ranking10" v-else-if="index == 9">{{index + 1}}</span>
                    <span class="ranking" v-else>{{index + 1}}</span>
                    <span class="rank-song">{{items}}</span>
                    
                  </div>
                  <div class="list-item2" v-if="index % 2 != 0">
                    <span class="ranking-red" v-if="index < 3">{{index + 1}}</span>
                    <span class="ranking10" v-else-if="index == 9">{{index + 1}}</span>
                    <span class="ranking" v-else>{{index + 1}}</span>
                    <span class="rank-song">{{items}}</span>
                 
                  </div>
                
                </div>
                <div class="view-all">查看全部></div>
              </div>
              
             </div>
            </div>
           </div>
        </div>
        <!-- 侧栏 -->
        <div class="sidebar">
          <div class="side-top">
            <div>
              <img class="vinyl-vip" src="https://music.163.com/style/web2/img/dis_vip_card.png" alt="">
            </div>
            <div class="side-login">
              <p>
                登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
              </p>
              <div class="btn">
                <button>用户登录</button>
              </div>
            </div>
          </div>
          <div class="side-bottom">
            <div class="rsa">
              <div class="sub-top">
                <span>入驻歌手</span>
                <span>查看全部></span>
              </div>
              <div class="rsa-bottom">
                <div v-for="(items,index) in ResidentArtist" :key="index" class="rsinger">
                  <div>
                    <img :src="items.img" alt="" class="rsa-img">
                  </div>
                  <div style="padding: 10px;width: 120px;">
                    <div class="rsa-name">
                      {{items.singer}}
                    </div>
                    <div class="rsa-des">
                      {{items.description}}
                    </div>
                  </div>
                </div>
                <div>
                  <button class="btn-apl">
                    申请成为网易云音乐人
                  </button>
                </div>
              </div>
            </div>
            <div class="anchors">
              <div class="sub-top">
                <span>热门主播</span>
                <span></span>
              </div>
              <div v-for="(items,index) in HotAnchor" :key="index" class="anchor">
                <img :src="items.img" alt="">
                <div>
                  <div class="acn">{{items.name}}</div>
                  <div class="acd">{{items.description}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
     </main>
     <Footer/>
     <!-- 播放进度条 -->
    
    <div :class="progressClass"   @mouseleave="aniOut" v-show="progressStatus">
      <div class="progress-content">
        <div style="width: 200px;"></div>
        <div class="play-icon"  v-for="(items,index) in processIcon" :key="index" @mouseenter ="myHover(index)" @mouseleave ="hoverLeave(index)" @click="myClick(index)">
          <img :src="items.img" alt="">
        </div>
        <div class="play-bar">

          <div class="poster"> 
            <span>
              <img :src=songsInfo[songIndex].poster alt="">
            </span>
          </div>
          <div class="song-info">
            <div style="display: flex;">
              <div style="display: flex;">
                <span class="song-namee">{{songsInfo[songIndex].songName}}</span>
               <span><img src="../assets/mv.png" alt="" style="height: 20px;width: 20px;"></span>
              </div>
              <span class="song-artist">{{songsInfo[songIndex].artist}}</span>
              <span><img src="../assets/link.png" alt="" style="width: 20px;height: 20px;margin-top: 2px ;margin-left: 10px;"></span>
            </div>
            <div class="p-strip">
              <div class="ball" :style="{left : ballDistance + 'px'}"></div>
              <div class="red-cover" :style ="{width : ballDistance +5+ 'px'}"></div>
              <div class="strip">
              </div>
              <div class="play-time">
                <span></span>
                <span style="color: white;">{{currentTime.minute1}}{{currentTime.minute2}}:{{currentTime.second1}}{{currentTime.second2}}</span>
                <span>/ {{songsInfo[songIndex].playTime}}</span>
              </div>
            </div>
          </div>
          
        </div>
        <div class="play-function">
          <span v-for="(items , index ) in functionIcon" :key="index" class="function-icon" @mouseenter = "funHover(index)" @mouseleave = "funLeave(index)" @click ="funClick(index)">
            <img :src="items.img" alt="" :style ="{width : items.width ,hight : items.hight ,marginTop : items.top,marginBottom : items.bo}">
          </span>
        </div>
      </div>
      <div class="volume" v-if="volumeShow">
      <div class="bar">
        <div class="ball2"></div>

      </div>
    </div>
    </div>
    <div class="hand"  @mouseenter="aniEnter"></div>
    
    <!-- 脱离常规流元素 -->
     <div class="add-list" v-if="listShow">
        <div class="add-top"><span>添加到歌单</span></div>
        <div class="new-list">
          <span><img src="../assets/plus.png" alt=""></span>
          <span>新歌单</span>
        </div>
        <div v-for="(items,index) in playList" :key="index" style="display: flex;margin-left: 40px; border-bottom: 1px solid #ccc;height: 50px;padding-top: 10px;">
          <div><img :src="items.img" alt=""></div>
          <div>
           
            <div style="font-size: 12px; margin-left: 10px;">{{items.name}}</div>
            <div style="font-size: 12px;  margin-left: 10px;">{{items.num}}</div>

          </div>
          
        </div>
     </div>
     <!-- 以下为子路由展示 -->
     <router-view/>
    </div>
  </template>
  
  <script>
import SlideShow from '@/components/slideshow.vue'
import Footer from '@/components/footer.vue' ;
import Img1 from '@/assets/pre.png'
import Img2 from '@/assets/progress-play.png'
import Img3 from '@/assets/past.png'
import Img4 from '@/assets/pre2.png'
import Img5 from '@/assets/progress-play2.png'
import Img6 from '@/assets/past2.png'
import Img7 from '@/assets/stop.png'
import Img8 from '@/assets/stop2.png'
import Img9 from '@/assets/addlist.png'
import Img10 from '@/assets/share.png'
import Img11 from '@/assets/volume.png'
import Img12 from '@/assets/playway.png'
import Img13 from '@/assets/playlist.png'
import Img14 from '@/assets/audio-quality.png'
import Img15 from '@/assets/addlist2.png'
import Img16 from '@/assets/share2.png'
import Img17 from '@/assets/volume2.png'
import Img18 from '@/assets/playway2.png'
import Img19 from '@/assets/playlist2.png'
import Img20 from '@/assets/playway3.png'
import Img21 from '@/assets/playway4.png'
export default{
data(){
        return{
           Space : 10,
           Count : 0,
           HotKinds : ['华语','流行','摇滚','民谣','电子'],
           HotLists : [
            {
              AountOfPlay : '9695万',
              Description : '宝藏挖掘机｜分享好音乐与金曲',
              Img : 'http://p1.music.126.net/whuiVDHL3a-OE8q4mcj5xA==/109951169484809780.jpg?param=140y140'
              
            },
            {
              AountOfPlay : '14215万',
              Description : '纯音乐 轻音乐 解压 学习 刷题 睡觉 御用',
              Img : 'http://p1.music.126.net/RWam_W9XlA7_698IFdVg5Q==/109951168923832792.jpg?param=140y140'
             
            },
            {
              AountOfPlay : '3483万',
              Description : '开启心动模式，耳机里的糖分你一半',
              Img : 'http://p1.music.126.net/RKDx0K4qLB_GIp-oJzRMeQ==/109951165475828213.jpg?param=140y140'
             
            },
            {
              AountOfPlay : '5294',
              Description : '越野跑不完全指南｜从零基础到首野都需要做哪些准备？',
              Img : 'http://p2.music.126.net/cpE6V57LS5LgeyphcH6PEQ==/109951169788241340.jpg?param=140y140',
              
            },
            {
              AountOfPlay : '5065万',
              Description : '无前奏丨欧美女声丨三秒爱上',
              Img : 'http://p1.music.126.net/TIIBNztL_pmitO7cbGunvg==/18519074348678474.jpg?param=140y140',
              
            },
            {
              AountOfPlay : '2984万',
              Description : '助眠辑 | 自然音，伴灵动乐符萦绕耳畔',
              Img : 'http://p1.music.126.net/sixunTcvD_IXeVqxZnpHkA==/109951163452086313.jpg?param=140y140'
              
            },
            {
              AountOfPlay : '3339万',
              Description : '游戏驾车必备BGM超燃电音PHONK',
              Img : 'http://p1.music.126.net/REVTal0DkSmickkWrbQ4zQ==/109951169402079631.jpg?param=140y140'
            },
            {
              AountOfPlay : '2681万',
              Description : '我爱你 第一句是假的 第二句也是假的',
              Img : 'http://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=140y140'
              
            }
           ],
           NewDisk : [
            {
              Img : 'http://p1.music.126.net/UrKNso8ekvwziR0bMJugFQ==/109951169774204021.jpg?param=100y100',
              SongName : 'Artificial Paradise',
              Singer : 'OneRepublic',
              style : {
                left : '5px'
              }
            },
            {
              Img : 'http://p1.music.126.net/9_8QkF4T2Umh10wL_5OGVQ==/109951169766811235.jpg?param=100y100',
              SongName : 'The Death of Slim Shady (Coup De Grâce)',
              Singer : 'Eminem',
              style : {
                left : '135px'
              }
            },
            {
              Img : 'http://p2.music.126.net/3X5s1m_wSwtPAYl5QS4P4g==/109951169770987644.jpg?param=100y100',
              SongName : "X's",
              Singer : 'Cigarettes After Sex',
              style : {
                left : '265px'
              }
            },
            {
              Img : 'http://p2.music.126.net/0i9FGRJRaRbwNTFHHF0gsA==/109951169765663729.jpg?param=100y100',
              SongName : '成功之路摇滚歌剧原声带',
              Singer : '伍佰 & China Blue',
              style : {
                left : '395px'
              }
            },
            {
              Img : 'http://p2.music.126.net/w1A7-Eqx26C0-ANXd3NolA==/109951169646542385.jpg?param=100y100',
              SongName : '残夢',
              Singer : 'Ado',
              style : {
                left : '525px'
              }
            },
            {
              Img : 'http://p1.music.126.net/qlahLqKJ5ljMT6WXE6gc1A==/109951169806047028.jpg?param=100y100',
              SongName : '华晨宇日出演唱会特辑',
              Singer : '华晨宇',
              style : {
                left : '655px'
              }
            },
            {
              Img : 'http://p1.music.126.net/FEAgetoVSZ5-83rR4Y9HkQ==/109951169763789115.jpg?param=100y100',
              SongName : '藏族小伙子',
              Singer : 'RICHNOMADIC',
              style : {
                left : '785px'
              }
            },
            {
              Img : 'http://p1.music.126.net/Mg3po5i6FcZ_lwAaOnj-rA==/109951169779063479.jpg?param=100y100',
              SongName : '可是我最懂降落',
              Singer : '黄子弘凡',
              style : {
                left : '915px'
              }
            },
            {
              Img : 'http://p1.music.126.net/ABq_jZDJDcTY-vIHoe6hUQ==/109951169770889971.jpg?param=100y100',
              SongName : 'DIVE',
              Singer : 'TWICE',
              style : {
                left : '1045px'
              }
            },
            {
              Img : 'http://p1.music.126.net/AWq-jvUPBTh5lQTVM8hzRw==/109951169773765069.jpg?param=100y100',
              SongName : 'Vanity Fair',
              Singer : 'TizzyT',
              style : {
                left : '1175px'
              }
            }
           ],
           StandardIndex : 0,
           CanClick : true,
           ListRank : [
            {
              listname : '飙升榜',
              listrank : ['童话镇','忠诚 loyalty(PHONK)','Wake','Summer Night','That Girl&Talking to the Moon','我们的明天','曼彻斯特（Manchester）','红','太聪明','DRUNK DIAL'],
              img : 'http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg?param=100y100'
            },
            {
              listname : '新歌榜',
              listrank : [
              'Dehors','纯妹妹','手卷烟','Wake','会开花的云 (Live版)','童话镇','暮色回响','会开花的云','麦西来甫 (Live)','我想当风'
              ],
              img : 'http://p3.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg?param=100y100'
              
            },
            {
              listname : '原创榜',
              listrank : ['OLD BOY','烧','馈赠','浪漫倾向','良药','七月的风','废墟游乐','霸王色','一瓶不满半瓶晃','祖籁'],
              img : 'http://p3.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg?param=100y100'

            },
           ],
           ResidentArtist : [
            {
              singer : '张惠妹aMEI',
              description : '台湾歌手张惠妹',
              img : 'http://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62'
            },
            {
              singer : '吴莫愁Momo',
              description : '《中国好声音》选手吴莫愁',
              img : 'http://p2.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=62y62'
            },
            {
              singer : '孙楠',
              description : '歌手孙楠 代表作《你快回来》《燃烧》',
              img : 'http://p2.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=62y62'
            },
            {
              singer : '麦田老狼',
              description : '歌手，音乐人。代表作《同桌的你》等。',
              img : 'http://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62'
            },
            {
              singer : '陈楚生',
              description : '唱作歌手',
              img : 'http://p2.music.126.net/MXMZYksJmsa0gcGkuk2mDQ==/109951167712155407.jpg?param=62y62'
            }
           ],
           HotAnchor : [
            {
              img : 'http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
              name : '陈立',
              description  : '心理学家，美食家陈立教授'
            },
            {
              img : 'http://p2.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40',
              name : '刘维-Julius',
              description  : '歌手、播客节目《维维道来》'
            },
            {
              img : 'http://p2.music.126.net/8hwBPg5JjLuiAbNraZqs3w==/109951169807325805.jpg?param=40y40',
              name : '莫非定律乐团',
              description  : '男女双人全创作独立乐团'
            },
            {
              img : 'http://p2.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40',
              name : '碎嘴许美达',
              description  : '脱口秀网络红人'
            },
            {
              img : 'http://p2.music.126.net/mMZvNruOjEa4XNL6-lWjNg==/109951168919647064.jpg?param=40y40',
              name : '银临Rachel',
              description  : ' '
            },
           ],
           processSta : ' ',
           processIcon  :[
            {
              img : Img1
            },
            {
              img : Img2
            },
            {
              img : Img3
            }
           ],
           listShow : false,
           volumeShow : false,
           funClass : '',
           functionIcon : [
            {
              img : Img9,
              width : '30px',
              hight : '40px',
              top : '20px'
             
            },
            {
              img : Img10,
              width : '30px',
              hight : '40px',
              top : '20px'
            },
            {
              img : Img11,
              width : '30px',
              hight : '40px',
              top : '0px'
            }
            ,{
              img : Img12,
              width : '30px',
              hight : '40px',
              top : '0px',
              bo : '5px'
            },
            {
              img : Img13,
              width : '70px',
              hight : '40px',
              top : '0px',
              bo : '5px'
            },
            {
              img : Img14,
              width : '50px',
              hight : '40px',
              top : '0px',
              bo : '5px'

            }
           ],
           progressClass : ' ',
           songIndex : 0,
           platStatus : false,
           ballDistance : 0,
           progressStatus : false,
           timer : null,
           currentTime : {
            minute1 : 0,
            minute2 : 0,
            second1 : 0,
            second2 : 0,
           },
            playList : [
              {
                name : '我喜欢的音乐',
                img : 'http://p1.music.126.net/WVeIDhPgyN644NKYjIYd4w==/109951165456301522.jpg?param=40y40',
                num : '1首'
              },
              {
                name : '伦',
                img : 'http://p1.music.126.net/06Yhj36Qu3ZCQJklc9MNKg==/7980255395852522.jpg?param=40y40',
                num : '102首'
              }
            ]
           ,
           songsInfo : [
            {
              songName : '爱，很简单', 
              artist : '陶喆',
              playTime : '04:29' ,
              playSecond : 269,
              poster : 'https://p2.music.126.net/vcyUJw7mfEzzMCgbJry31w==/109951169507121139.jpg?param=130y130',

            },
            {
              songName : '하루하루（一天一天）', 
              artist : 'BIGBANG',
              playTime : '04:16' ,
              playSecond : 256,
              poster : 'http://p1.music.126.net/NhfGHQAS-f_kkwzOtIMVxg==/942281465029058.jpg?param=130y130',

            },
            {
              songName : '普通朋友', 
              artist : '陶喆',
              playTime : '04:15' ,
              playSecond : 255,
              poster : 'http://p2.music.126.net/tMQXBMTy8pGjGggX1j0YNQ==/109951169389595068.jpg?param=130y130',

            },
            {
              songName : 'Spicy', 
              artist : 'aespa(에스파)',
              playTime : '03:17' ,
              playSecond : 197,
              poster : 'http://p1.music.126.net/d-34syHuqzx-axH2kzipmg==/109951168660941348.jpg?param=130y130',

            },
            {
              songName : '私じゃなかったんだね', 
              artist : 'りりあ',
              playTime : '04:04' ,
              playSecond : 244,
              poster : 'http://p1.music.126.net/C3n8h9ZXQZAkztTEgQM6yg==/109951166381691968.jpg?param=130y130'

            },
            {
              songName : 'Set Fire to the Rain', 
              artist : 'Adele',
              playTime : '04:02' ,
              playSecond : 242,
              poster : 'http://p2.music.126.net/hfzQTBL176sdvg9Hp0PSIQ==/109951167916727137.jpg?param=130y130',
            }
           ]
           
        }
},
    
components : {
        SlideShow,
        Footer,
      

    },
    computed :{
      ProgressStatus(){
        return{
          animationName : this.processSta,
          animationPlayState: 'running',
          animationDuration: '2s',
          animationFillMode: 'both'
          
        }
      }
    },
    methods : {
      //更新滚动函数
      Lupdate(){
      for(let j = 0 ;j < 5;j++){
        let num2 = parseInt(this.NewDisk[j].style.left);
          this.NewDisk[j].style.left= (num2 + 1320) + 'px';
      }
      // if(this.Count > 0){
       
      setTimeout(this.Lsort, 100);
      // }
      //   let movedObjects = this.NewDisk.slice(0, 5); // 取出前五个对象
      //     this.NewDisk = this.NewDisk.slice(5).concat(movedObjects); // 把剩余的对象和移动的对象拼接起来
      //     console.log(this.NewDisk)
      // console.log("hh");
    },
  Lsort(){
      let movedObjects = this.NewDisk.slice(0, 5); // 取出前五个对象
          this.NewDisk = this.NewDisk.slice(5).concat(movedObjects); // 把剩余的对象和移动的对象拼接起来
          console.log(this.NewDisk)
      console.log("hh");
      
    },
      //滚动条
      Lscroll(){
        // if(this.StandardIndex == 5)
        //    {
        //     this.StandardIndex = 0;
        //     }else{
        //      this.StandardIndex = 5;
        //     }
        let timer = setInterval(() => {
          if(this.NewDisk[5].style.left == '15px'){
              clearInterval(timer);
              
          }
          for(let i = 0; i < 10 ;i++){
              let num = parseInt(this.NewDisk[i].style.left);
              this.NewDisk[i].style.left= (num - this.Space) + 'px';
            }
          
            
        }, 20);
        setTimeout(this.Lupdate, 1500);
       console.log("jj");
      },
      Rupdate(){
        for(let j = 5 ;j < 10;j++){
        let num3 = parseInt(this.NewDisk[j].style.left);
          this.NewDisk[j].style.left= (num3 - 1320) + 'px';
      }
      setTimeout(this.Rsort, 15);
      },
      Rscroll(){
        let timer2 = setInterval(() => {
          if(this.NewDisk[0].style.left == '-5px'){
              clearInterval(timer2);
              
          }
          for(let i = 0; i < 10 ;i++){
              let num = parseInt(this.NewDisk[i].style.left);
              this.NewDisk[i].style.left= (num + this.Space) + 'px';
            }
        }, 20);

      },
      Rsort(){
        let movedObjects = this.NewDisk.slice(-5); // 取出前五个对象
          this.NewDisk = movedObjects.concat(this.NewDisk.slice(0,5)); // 把剩余的对象和移动的对象拼接起来
          console.log("hh");
          console.log(this.NewDisk);
          setTimeout(this.Rscroll, 15);
      },
      aniEnter(){
        this.processSta ='pb1';
        console.log('hhhhh');
        this.progressClass = 'a-class'
        this.progressStatus = true;
      },
      aniOut(){
        this.processSta ='pb2';
        console.log("jjjj");
        this.progressClass = 'b-class'
      },
      myHover(index){
        switch(index){
          case 0 :
           
              this.processIcon[index].img = Img4;
            
            break;
          case 1 :
          if(this.processIcon[index].img == Img2)
              this.processIcon[index].img = Img5;
            else if(this.processIcon[index].img == Img7)
              this.processIcon[index].img = Img8
             break;
          case 2 :
              this.processIcon[index].img = Img6;
              break;

        }
      },
      hoverLeave(index){
        
        switch(index){
          case 0 :
          if(this.processIcon[index].img == Img4)
            this.processIcon[index].img = Img1;
            break;
          case 1 :
          if(this.processIcon[index].img == Img5)
             this.processIcon[index].img = Img2;
             else if(this.processIcon[index].img == Img8)
             this.processIcon[index].img = Img7
             break;
          case 2 :
              this.processIcon[index].img = Img3;
              break;
        
      }
      },
      startPlay(){
         this.timer = setInterval(() => {
                    
                    this.ballDistance += (490 / this.songsInfo[this.songIndex].playSecond);
                    console.log(this.ballDistance)
                    if(this.ballDistance >= 490)
                    {
                      this.ballDistance = 0;
                      this.songIndex++;
                      this.currentTime.minute1 = 0;
                      this.currentTime.minute2 = 0;
                      this.currentTime.second1 = 0;
                      this.currentTime.second2 = 0;
                      if(this.songIndex > 5)
                      {
                        this.songIndex = 0;
                      }
                    }
                    console.log(this.ballDistance);
                    this.currentTime.second2++;
                    if(this.currentTime.second2 > 9 )
                    {
                      this.currentTime.second2 = 0;
                      this.currentTime.second1++;
                      if(this.currentTime.second1 > 5)
                      {
                        this.currentTime.second1 = 0;
                        this.currentTime.minute2 ++
                        if(this.currentTime.minute2 > 9)
                        {
                          this.currentTime.minute1 = 0;
                          this.currentTime.minute1 ++;
                        }
                      }
                    }
                  }, 1000);
      },
      myClick(index){
        switch(index)
        {
          case 0:
            {
              this.songIndex--;
              this.ballDistance =0;
              this.currentTime.minute1 = 0;
              this.currentTime.minute2 = 0;
              this.currentTime.second1 = 0;
              this.currentTime.second2 = 0;
              if(this.songIndex < 0)
              {
                this.songIndex = 5;
              }
              break;
            }
            case 1:
              {
               
                this.platStatus != this.platStatus;
                console.log(index);
                console.log(this.processIcon[index].img);
                if (this.processIcon[index].img == Img5){
                  
                  this.processIcon[index].img = Img8;
                 
                  this.startPlay();
                }
               
              else if(this.processIcon[index].img == Img8){
                console.log('dianjile');
                this.processIcon[index].img = Img5;
                clearInterval(this.timer);
              }
                
                
              break;
              }
            case 2:
            {
              this.songIndex++;
              this.ballDistance = 0;
              this.currentTime.minute1 = 0;
              this.currentTime.minute2 = 0;
              this.currentTime.second1 = 0;
              this.currentTime.second2 = 0;
              if(this.songIndex > 5)
              {
                this.songIndex = 0;
              }
              break;
            }
        }
      },
      funHover(index){
        switch(index)
        {
          case 0:
          this.functionIcon[index].img = Img15;
          break;
          case 1:
          this.functionIcon[index].img = Img16;
          break;
          case 2:
          this.functionIcon[index].img = Img17;
          break;
          case 3:
          this.functionIcon[index].img = Img18;
          break;
          case 4:
          this.functionIcon[index].img = Img19;
          break;
        }
      },
      funLeave(index){
        
        switch(index){
          case 0 :
          if(this.functionIcon[index].img == Img15)
            this.functionIcon[index].img = Img9;
         
            break;
          case 1 :
          if(this.functionIcon[index].img == Img16)
             this.functionIcon[index].img = Img10;
             
             break;
          case 2 :
              if(this.functionIcon[index].img == Img17)
                this.functionIcon[index].img  =  Img11;
              break;
          case 3 :
              if(this.functionIcon[index].img == Img18)
                this.functionIcon[index].img  =  Img12;
              break;
            case 4 :
              if(this.functionIcon[index].img == Img19)
                this.functionIcon[index].img  =  Img13;
              break;
        
        }
    },
    funClick(index){
        switch(index)
        {
          case 0:
            {
              this.listShow  = !this.listShow;
              console.log(this.listShow)
              break;
            }
            case 1:
              {
               
                console.log('ajkf');
                
              }
                
                
              break;
              
            case 2:
            {
              this.volumeShow = !this.volumeShow
              break;
            }
            case 3:
            {
              if(this.functionIcon[index].img == Img18)
              this.functionIcon[index].img = Img20
              else if(this.functionIcon[index].img == Img20)
              this.functionIcon[index].img = Img21
            else if (this.functionIcon[index].img == Img21)
            this.functionIcon[index].img = Img18
               break;
            }
        }
      }
  
    }
  }
</script>
<style scoped>
.main{
  display: flex;
  background-color: #f5f5f5;
}
.main > div:first-child{
  flex-grow: 1;
  border-right: 1px solid #ccc
}
.main > div:last-child{
  flex-grow: 1;
  border-left: 1px solid #ccc;
}
.content{
  background-color: #fff;
  width: 714px;
  box-sizing: border-box;
  padding: 20px 20px 40px 20px;
}
.hot-top{
  display: flex;
  
  align-items: center;
  border-bottom: #b6030c solid 2px;
}
.circle{
  background-color: #fff;
  height: 6px;
  width: 6px;
  border: 4px solid #b6030c;
  border-radius: 100%;
  margin-left: 30px;
  margin-right: 15px;
}
.recommend{
  font-size: 20px;
}
.hot-kinds{
  font-size: 12px;
  color: #797878;
}
.hot-kinds >span:first-child{
  margin-right: 20px;
  margin-left: 20px;
}

.more{
  display: flex;
  margin-left: 30px;
  font-size: 12px;
  align-items: center;
  color: #797878;
}
.more img{
  height: 30px;
  width: 30px;
  margin-left: 10px;
}
.grow{
  flex-grow: 1;
}
.song-lists{
  display: flex;
  flex-wrap: wrap;

 justify-content: space-between;
  
}
.song-list{
  width: 140px;
  height: 204px;
  box-sizing: border-box;
  margin: 20px 0px 20px 0px;
  font-size: 14px;
}

.list-icon{
  display: flex;
  background-color:rgba(72, 67, 67, 0.8);
  width: 140px;
  height: 27px;
  align-items: center;
}
.list-icon img{
  height: 20px;
  width: 20px;
  
}
.song-list >div:first-child{
  position: relative;
}
.list-icon{
  position: absolute;
  bottom: 3px;
}
.list-icon p{
  color: #ccc;
  margin-left: 10px;
  font-size: 12px;
  flex-grow: 0.8;
}
.new-top{
  display: flex;
  
  align-items: center;
  border-bottom: #b6030c solid 2px;
}
.contain
{
  padding: 20px;
  background-color: #f5f5f5;
  border: solid 1px #ccc;
  margin-top: 20px;
  position: relative;
  /* height: 223px;
  width: 690px; */
}
.contain p{
  position: absolute;
  top: 25%;
  font-size: 20px;
  color: #595252;
}
.contain p:hover{
  color: #d2cccc;
}
.contain >p:first-child{
  left: 5px;
}
.r{
  position: absolute;
  right: 10px;
  top: 25%;
 }
.disks{
  display: flex;
  overflow: hidden;
 position: relative;
 height: 155px;

}
.plate{
  height: 100px;
  width: 100px;
  background-color: rgb(29, 28, 28);
  margin-left: 5px;
 position: relative;
  border-radius: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.disk{
  margin-right: 12px;
  position: absolute;
  top: -3px;
  width: 118px;
}
.plate img{
  position: absolute;
  right: 15px; 
}
.song-name{
  font-size: 12px;
  color: black;
  margin-top: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100px;
  padding-left: 3px;
}
.singer{
  margin-top: 5px;
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 3px;
}
.lists-top{
  display: flex;
  margin-top: 30px;
  align-items: center;
  border-bottom: #b6030c solid 2px;
}
.lists-content{
  background-color: #f5f5f5;
  display: flex;
  
  margin-top: 20px;
  border-right: 1px solid #ccc;
}
.list{
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  border-right: transparent;
  width: 230px;

}
.list-name{
  margin-left: 20px;
  margin-top: -10px;
}
.list-name img{
  height: 35px;
  width: 35px;
  margin-top: -10px;
}
.list-top{
  display: flex;
  padding: 20px;

}
.list-top > img:first-child{
  width: 80px;
  height: 80px;
}
.ranking{
  margin-left: 30px;
  font-size: 16px;
  color: #666;
  padding-right: 15px;
}
.ranking-red{
  margin-left: 30px;
  font-size: 16px;
  color: #c10d0c;
  padding-right: 15px;
}
.ranking10{
  margin-left: 25px;
  font-size: 16px;
  color: #666;
  padding-right: 11px;
}
.list-item1{
  /* margin-left: 30px; */
  display: flex;
  align-content: center;
  background-color: #e8e8e8;
  height: 32px;
  display: flex;
  align-items: center;
}
.list-item2{
  /* margin-left: 30px; */
  display: flex;
  align-content: center;
  height: 32px;
  display: flex;
  align-items: center;
}
.rank-song{
  font-size: 12px;
}
.view-all{
  height: 32px;
  background-color: #e8e8e8;
  line-height: 32px;
  font-size: 12px;
  padding-left: 150px;
  color: #000;
}
.sidebar{
  border-left: 1px solid #ccc;
  background-color: #fff;
  /* padding: 10px; */
}
.vinyl-vip{
  width: 250px;
}
.side-login {
  color: #666;
  font-size: 12px;
  text-wrap: wrap;
  width: 205px;
  margin: 0 auto;
}
.side-login button{
  height: 35px;
  width: 110px;
  border-radius: 5px;
  border: transparent;
  color: white;
  background-color: #cc040e;
  margin-left: 45px;
  margin-bottom: 20px;
}
.side-login button:hover{
  background-color: #f12a2a;
}
.side-top{
  border-bottom: 1px solid #ccc;
  background: linear-gradient(to bottom,#ffffff,#e2e2e2 190%);
}
.side-bottom{
  padding: 20px;
}
.sub-top{
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 7px;
}
.sub-top >span:first-child{
  color: #000;
  flex-grow: 1;
  font-weight: 800;
}
.sub-top >span:last-child{
  color: #666;
}
.rsinger{
  display: flex;
  background-color: #fafafa;
  width: 224px;
  height: 62px;
  border: 1px solid #e9e9e9;
  margin-top: 20px;

}
.rsinger:hover{
  background-color: #e6e6e6;
  cursor: pointer;
}
.rsa-name{
  font-size: 14px;
  font-weight: 800;
  /* margin-left: 20px; */
  /* margin-top: 10px; */
}
.rsa-des{
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  /* margin-left: 20px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.btn-apl{
  margin: 20px auto;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  border-radius: 5px;
  height: 31px;
  width: 215px;
  font-weight: bold;
  font-size: 12px;
}
.btn-apl:hover{
  cursor: pointer;
  background-color: #f8f8f8;
}
.anchor{
  display: flex;
  font-size: 12px;
  margin-top: 10px;
}
.anchor > div{
  margin-left: 10px;
}
.acn{
  color: #000;
}
.acd{
  margin-top: 10px;
  color: #666;
}
.progress-bar{
  
  background-color :#141414 ;
  height: 80px;
  /* animation-name: pb1;
  animation-duration: 2s; */
  /* animation-iteration-count: infinite; */
  /* animation-duration: 2 s; */
 
  /* animation-play-state:running; */

}
.a-class{
  background-color :#141414 ;
  height: 60px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  animation: pb1 1s forwards ;
}
.b-class{
  background-color :#141414 ;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  animation: pb2 1s forwards ;
}
.hand{
  background-color: transparent;
  height: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
 
}
/* .hand:hover .progress-bar{
  animation-play-state: running;
} */
@keyframes pb1{
  0%{
   background-color: #141414;
    transform: translateY(80px);
  }
  100%{
    transform: translateY(0px);
    background-color:  #141414;
  }
}
 @keyframes pb2{
  0%{
    background-color: #141414;
    transform: translateY(0px);
  }
  
  100%{
    background-color:  #141414;
    transform: translateY(80px);
   
  }
} 
.progress-content{
  height: 50px;
  display: flex;
  align-items: center;
}
/* .progress-bar >div :first-child{
 width: 100px;
}  */
.play-icon{
  
  display: flex;
  align-items: center;
  margin-left: 10px;
 
}
.play-icon img{
  height: 40px;
  width: 40px;
}
.play-bar{
  display: flex;
}
.poster
{
  border: #524646 solid 1px;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  margin-left: 40px;
}
.poster img{
  height: 35px;
  width: 35px;
  
}
.song-namee{
  width: auto;
  color: rgb(194, 191, 191);
  margin-top: 2px;
  margin-left: 20px;
  font-size: 12px;
}
.song-artist{
  margin-left: 20px;
  font-size: 12px;
  color: #747373;
  margin-top: 2px;
}
.p-strip{
  
  margin-left: 20px;
  position: relative;
  
  
}
.strip{
  height: 7px;
  background-color: white;
  width: 500px;
 display: inline-block;
  border-radius: 10px;
}
.play-time{
  display: inline-block;
  color: #666;
  font-size: 11px;
  margin-left: 10px;
}
.ball{
  position: absolute;
  top : 2px;
  height: 7px;
  width: 7px;
  background-color: #c10d0c;
  border: 5px solid white;
  border-radius: 50%;
  z-index: 2;
}
.red-cover{
  position: absolute;
  background-color: #cc040e;
  height: 7px;
  left: 0px;
  top: 7px;
  border-radius: 10px;
  z-index: 1;
}
.function-icon{
  margin-left: 10px;
}
.play-function{
  margin-left: 20px;
}
.add-list{
  position: fixed;
  background-color: white;
  width: 500px;
  height: 374px;
  top : 30%;
  left: 30%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.add-top{
  background-color: #000;
  color: white;
  height: 40px;
  border-radius: 5px;
}
.add-top span{
  margin-left: 20px;
  line-height: 35px;
  font-size: 14px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.new-list{
  height: 60px;
  background-color:#e6e6e6;
  display: flex;
  align-items: center;
  
}

.new-list span img{
  height: 45px;
  width: 50px;
  margin-left: 40px;
}
.volume{
  width: 30px;
  height: 100px;
  background-color: #000;
  position: absolute;
  top: -100px;
  right: 285px;
}
.ball2{
  height: 7px;
  width: 7px;
  margin-left: -6px;
  margin-top: 3px;
  background-color: #c10d0c;
  border: 5px solid white;
  border-radius: 50%;
}
.bar{
  width: 5px;
  margin-left: 13px;
  height: 100px;
  border-radius: 10px;
  background-color: #cc040e;
}
</style>