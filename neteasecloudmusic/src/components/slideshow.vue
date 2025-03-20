<template>
    <div class="container" :style="DynamicStyles[SlideIndex].style">
        <div class="main">
            <div class="l-arrow" @click="slideIndexDcline">
              <div>
                 &lt;
              </div>
             
            </div>
            <div class="slideshow">
                <img :src="SlideImg[SlideIndex].url" alt="">
                <div class="download-client">
                    <img src="../assets/client.png" alt="">
                </div>
                <div class="dots">
                    <div v-for="index in 8" :key="index"  @click="changeSlideIndex(index)">
                      <div v-if="index == SlideIndex+1" class="default-dot"></div>
                      <div v-else class="dot"></div>
                      
                    </div>
                </div>
    
                <div>
                
                  <router-link to="/download" class="download" ></router-link>
                </div>
            </div>
            <div class="r-arrow" @click = "slideIndexAdd">
              <div>
                >
              </div>
            </div>
        </div>
       
    </div>
</template>
  
  <script>


  export default {
    name : 'SlideShow',
    data(){
        return{
            SlideImg : [
                {
                    index : 0,
                    url : 'https://p1.music.126.net/QNjOop_v044-bxlo3YBftg==/109951169810235700.jpg?imageView&quality=89',
                    color :''
                },
                {
                    index : 1,
                    url : 'https://p1.music.126.net/O3WTWTWdPQCfas3_pThCVw==/109951169810214389.jpg?imageView&quality=89'
                },
                {
                    index : 2,
                    url : 'https://p1.music.126.net/ABqKMk_dvemTQ564A8HPQw==/109951169810220192.jpg?imageView&quality=89'
                },
                {
                    index : 3,
                    url : 'http://p1.music.126.net/DoNiYfHY-MR2HbJjTV-7VA==/109951169810231087.jpg?imageView&quality=89'
                },
                {
                    index : 4,
                    url : 'https://p1.music.126.net/_umqbY5txyZ_EnhA296jmg==/109951169810230276.jpg?imageView&quality=89'
                },
                {
                    index : 5,
                    url : 'https://p1.music.126.net/l_A7s0eSkRMgLSd38nTw0A==/109951169810241597.jpg?imageView&quality=89'
                },
                {
                    index : 6,
                    url : 'https://p1.music.126.net/G6q8JJ-5gO8FPZmYFLm_ig==/109951169810244557.jpg?imageView&quality=89'
                },
                {
                    index : 7,
                    url : 'https://p1.music.126.net/LNE_3fBNGUjHRkvB6DoCuA==/109951169813416976.jpg?imageView&quality=89'
                },
            ],
            SlideIndex : 0,
            PageNumber : this.$store.state.PageNumber,
            DynamicStyles : [
              {
                style : {
                   background: 'linear-gradient(to left bottom,#7f8ce0,#78a8dd)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#6c6a6e,#c4b89c)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#182469,#ab9c96)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#625851,#413e3e)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#d4c8b3,#dcbe70)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#71abcb,#c6f7f9)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#f3b965,#c89e8f)'
                }
              },
              {
                style : {
                   background: 'linear-gradient(to left bottom,#b02639,#040405)'
                }
              }
            ]
        }
    },
    methods:{
    changeSlideIndex(index){
      this.SlideIndex = index-1;
    },
    slideIndexDcline(){
      this.SlideIndex--;
      if(this.SlideIndex < 0)
      {
        this.SlideIndex = 7;
      }
    },
    slideIndexAdd(){
      this.SlideIndex++;
      if(this.SlideIndex > 7)
      {
        this.SlideIndex = 0;
      }
    }
   
    
  },
    mounted()  {
        this.slideShow = setInterval(() => {
          this.SlideIndex++;
          if(this.SlideIndex > 7){
            this.SlideIndex = 0;
          }
    }, 5000); 
        
  },
 beforeDestroy(){
  clearInterval(this.slideShow)
 }
  
 
}
  </script>
  
  <style scoped>
  .container{
    height: 284px;
   
  }
  .slideshow img{
    width: 730px;
    height: 284px;
  }
  .main{
    display: flex;
  }
  .main > div:first-child{
    flex-grow: 1;
  }
  .main > div:last-child{
    flex-grow: 1;
  }
  .download-client img{
    height: 284px;
    width: 252px;
  }
  .slideshow{
    display: flex;
    position: relative;
  }
  .dots{
    display: flex;
    position: absolute;
    bottom: 15px;
    left: 25%;
    
  }
  .dot{
    height: 7px;
    width:  7px;
    border-radius: 100%;
    background-color: #ccc;
   margin-left: 20px;
  }
  .default-dot{
    height: 7px;
    width:  7px;
    border-radius: 100%;
    background-color: #c20c2c;
    margin-left: 20px;
  }
  .dot:hover{
    background-color: #c20c2c;
  }
  .download {
    position: absolute;
    height: 53px;
    width: 213px;
   
    right: 20px;
    bottom: 50px;
  }
  .l-arrow{
    position: relative;
    
    
  }
  .l-arrow div:hover{
    background-color: #ccc;
  }
  .l-arrow div{
    position: absolute;
    right: 30px;
    top:50%;
    font-size: 50px;
    color: #f0e9e9;
  }
  .r-arrow{
    position: relative;
  }
  .r-arrow div:hover{
    background-color: #ccc;
  }
  .r-arrow div{
    position: absolute;
    left: 30px;
    top:50%;
    font-size: 50px;
    color: #f0e9e9;
  }
  </style>