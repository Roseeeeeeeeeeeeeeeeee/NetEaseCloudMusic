<template>
    <div class="container">
      <div class="function">
        <div v-for="(items,index) in Fofun" :key="index" class="f-item">
            <img :src="Fofun[index].img" alt="" class="f-ic">
            <div class="f-des">
               {{items.name}}
            </div>
        </div>
       </div>
       <div class="f-text">
          <div>服务条款| 隐私政策| 儿童隐私政策| 版权投诉| 投资者关系| 广告合作 | 联系我们</div>
          <div>廉正举报 不良信息举报邮箱: 51jubao@service.netease.com 客服热线：95163298</div>
          <div>互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18  工业和信息化部备案管理系统网站</div>
          <div>网易公司版权所有©1997-2024杭州乐读科技有限公司运营：浙网文[2024] 0900-042号  浙公网安备 33010802013307号 算法服务公示信息</div>
          
       </div>
      <div></div>
    </div>
</template>
  
  <script>
  import Img1 from '@/assets/f1.png'
  import Img2 from '@/assets/f2.png'
  import Img3 from '@/assets/f3.png'
  import Img4 from '@/assets/f4.png'
  import Img5 from '@/assets/f5.png'
  import Img6 from '@/assets/f6.png'
  import Img7 from '@/assets/f7.png'
  export default {
    name : 'FooterComponent',
    data(){
        return{
            Fofun : [
            {
                name : '音乐开放平台',
                img : Img1
            },
            {
                name : '云村交易所',
                img : Img2
            },
            {
                name : 'X StudioAI歌手',
                img : Img3
            },
            {
                name : '用户认证',
                img : Img4
            },
            {
                name : 'AI 免费写歌',
                img : Img5
            },
            {
                name : '云推歌',
                img : Img6
            },
            {
                name : '赞赏',
                img : Img7
            },
            ]
        }
    }
  }
  </script>
  
  <style scoped>
  .container{
    border-top: 1px solid #ccc;
    background-color: #f2f2f2;
  }
  .function{
    display: flex;
    width: 850px;
    /* justify-content: space-between; */
    margin: 33px auto;
    
  }
  .f-ic{
    height: 50px;
    width: 53px;
    margin: 0 auto;
    margin-left: 13px;
  }
  .f-des{
    font-size: 12px;
    color: #00000080;
    /* margin-top: -5px; */
   text-align: center;
  }
  .f-item{
    margin-right: 40px;
    width: 90px;

  }
  .f-text{
    width: 980px;
    font-size: 12px;
    color: #666;
    margin: 80px auto 0 auto;
    padding-bottom: 80px;
  }
  .f-text div{
    text-align: center;
    margin-top: 10px
  }
  </style>