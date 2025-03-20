<template>
    <div class="container">
       <div class="menu">
        <div class="logo">
            
                <img src="./../assets/logo.png" alt="">
           
        </div>
        <div class="optionlist">
            
            <div  v-for="(items,index) in NavList"  :key="index"  @click="changePageNumber(index)">
              <router-link :to="{ path : items.route }">
              <div class="option" v-if="index != PageNumber">
   
                   {{items.name}}
                   
              </div>  
           
            
              <div class="option-default" v-else>
               
                   
                   {{items.name}}
                   
                
               <div class="triangle">
               </div>
              </div>  
            </router-link >
            </div>
       
        </div>
        <div class="search" >
           <img class="search-icon" src="../assets/search.png" alt=""> 
           <input type="text"  @focus ="clearInput" @blur ="recoverInput"  v-model="DefaultWords" class="search">
        </div>
        <div class="creat"> 
            <button>
                创作者中心
            </button>
        </div>
        <div class="login">
          <a href="">登录</a> 
        </div>
       </div>
       
        <div class="subnav">
           
            <div v-if="!PageNumber" class="findmusic">
              
              <div></div>
              <div v-for="(items,index) in SubNavList" :key="index"  @click="changeSubNumber(index)">
                <router-link :to="{ path : items.route }">
                  <div v-if="index != SubNumber" class="sub-option">
                  {{items.name}}  
                  </div>
                  <div v-else class="default-sub-option">
                    {{items.name}}  
                  </div>
                </router-link>
              </div>
              <div></div>
            </div>
           
            <div v-else class="exfind"></div>
          </div>
    </div>
   
  </template>
  
  <script>




  
   
  export default {
    name: 'NavComponent',
    components: {

    },
    data() {
         return {
            NavList : 
                [
                    { name: '发现音乐',
                      route : '/',
                      index : 0

                    },
                    {
                        name : '我的音乐', 
                        route :'/my',
                        index : 1
                    },
                {
                    name : '关注',
                    route : '/friend',
                    index : 2
                },
                {
                    name : '商城',
                    route : '/store',
                    index : 3
                },
                {
                    name : '音乐人',
                    route : '/musician',
                    index : 4
                },
                {
                    name : '云推歌',
                    route : '/ad-song',
                    index : 5
                },
                {
                    name : '下载客户端',
                    route : '/download',
                    index : 6
                }
                ],
               
            DefaultWords : "音乐/视频/电台/用户",
            PageNumber : this.$store.state.PageNumber,
            SubNumber : this.$store.state.SubNumber,
            SubNavList : [
                    { name: '推荐',
                      route : '/discover',
                      index : 0

                    },
                {
                    name : '排行榜', 
                    route :'/discover/toplist',
                    index : 1
                },
                {
                    name : '歌单',
                    route : '/discover/playlist',
                    index : 2
                },
                {
                    name : '主播歌单',
                    route : '/discover/djradio',
                    index : 3
                },
                {
                    name : '歌手',
                    route : '/discover/artist',
                    index : 4
                },
                {
                    name : '新碟上架',
                    route : '/discover/album',
                    index : 5
                }
                ],
         }
    },
    methods : {
        clearInput(){
            this.DefaultWords = ""
        },
        recoverInput(){
            this.DefaultWords = "音乐/视频/电台/用户"
        },
        changePageNumber(key){ //小三角形变换位置方法
            this.PageNumber = key
        },
        changeSubNumber(key){ 
            this.SubNumber = key
            
        }
    }
  }
  </script>
  
  <style scoped>
  .container{
   color: #ccc;
  }
  .menu{
    display: flex;
    align-items: center;
    background-color: #242424;
  }
  .logo{
    display: inline-block;
    margin-left: 150px;
  }
  .logo img{
    height: 70px;
   
  }
  .option a{

    color: inherit; 
    text-decoration: none; /*去除下划线*/
}
.option-default a{

color: inherit; 
text-decoration: none; /*去除下划线*/
}

  .optionlist{
   
   display: flex;
  }

  .option{
    position: relative;
   color: #ccc;
   font-size: 14px;
   display: inline-block;
   height: 70px;
   text-align: center;
   line-height: 70px;
   padding: 0px 19px;
  }
  .option:hover{
    background-color: #000000;
    color:#fff ;
  }
  .option-default{
  background-color:#000000;
  position: relative;
   color: #fff;
   font-size: 14px;
   display: inline-block;
   height: 70px;
   text-align: center;
   line-height: 70px;
   padding: 0px 19px;
}
  .triangle{
    position: absolute;
   height: 0px;
   width: 0px;
    /* background-color: #242424; */
    
    border-top:  solid 5px #000000;
    border-left: #000000 solid 5px;
    border-right: #000000 solid 5px;
    border-bottom: solid 5px #c20c2c;
    bottom: -2px;
    left: 45%;
    
  }
  
  .search{
    display: flex;
   
    background-color: #fff;
    border-radius: 32px;
    /* position: relative; */
  }
  .search-icon{
    /* position: absolute; */
   margin-left: 10px;
   
   margin-top: 9px;
   border-radius: 32px;
   height: 22px;
   width: 17px;
   
  }
  .search input{
    height: 32px;
    /* border-radius: 32px; */
    border: 1px solid transparent;
    margin-left: 10px;
    color: #b0aeae;
    outline: none; /* 去除默认的轮廓线 */
  
  }
  .creat button{
    background-color: transparent;
    height: 32px;
    border-radius: 32px;
    border: 1px solid #686464;
    margin-left: 10px;
    color: inherit;
    padding: 0 13px;
  }
  .creat button:hover{
    
    border: 1px solid #fff;
    
    color: #fff;
    
  }
.login{
    color: #787878;
    font-size: 12px;
    margin-left: 15px;
}
.login a{
    color: inherit; 
    text-decoration: none; /*去除下划线*/
}
.login a:hover{
    color: #6d6b6b;
    text-decoration:underline;
}
.findmusic{
  display: flex;
  width: 100%;
    height: 35px;
   background-color: #c20c2c;
}
.findmusic > div:first-child {
  flex-grow: 2.5;
}
.findmusic > div:last-child {
  flex-grow: 4;
}
.exfind{
  height: 5px;
  background-color: #c20c2c;
}
.sub-option{
  color: #fff;
  cursor: pointer;
  display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-size: 12px;
}
.sub-option:hover{
  background-color: rgba(71, 71, 90, 0.5);
}
.sub-option a{
  color: inherit; 
text-decoration: none; /*去除下划线*/
}
.default-sub-option{
  color: #fff;
  cursor: pointer;
  display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    font-size: 12px;
    background-color: rgba(71, 71, 90, 0.5);
}
  </style>
  