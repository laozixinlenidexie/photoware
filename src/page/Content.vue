<template>
    <!--        图-->
    <div class="windows-view">
      <div name="body" class="content" >
        <div class="juzhong">
          <div class="cellkongzhi" v-for="(images,index) in mockgoryListryList" :key="images.id"
               :class="weizhi(images)" :style="{ }">
            <div class="item">
              <div class="item-tu" >
                <router-link to="/xiangqing" ><img  :src="images.url"></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import Header from "@/page/Header";
export default {
  name: "Content",
  components:{
    Header
  },
  data(){
    return{
      shuzi:230
    }
  },
  methods:{
      gweizhi(images){
        return this.shuzi=images.id%4*230
      }
  },

  mounted() {
    this.$store.dispatch("imageList")
  },

  computed:{
    weizhi(images) {
      let a=parseInt(images.id)
      this.shuzi=(a-1)%4*230
      console.log(this.shuzi,typeof a)
        return {
          left:this.shuzi+'px'
        }
    },
    ...mapState({
      mockgoryListryList:(state) =>{
        return state.image.mockimagelist;

      }

    })
  },
  watch:{

    mockgoryListryList:{
      handler(newValue,oldValue){

      }
    }
  },
  datadragEnd(){
    console.log("图片高宽")
    var img=new Image();
    img.src="http://localhost:8080/"+this.mockgoryListryList.url;
    let res;
    img.onload=function (){
      res={
        width:img.width,
        height:img.height,
      }
      console.log(res)
    }

  },

}
</script>

<style scoped>

.ding .soushuo input{
  height: 20px;
  width: 200px;

}
.windows-view{
  display: flex;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
}
.windows-view .content{
  user-select:none;
  position: relative;
  height: 100%;
  width: 100%;
}
.windows-view .content .juzhong{
  width: 940px;
  height: 100%;
  position: relative;
  margin: 10px auto;
}
.cellkongzhi{
  position: absolute;
  margin: 10px 10px;
  width: 220px;
}
 .content .item{

  box-sizing: border-box;
  width: 220px;
  height: auto;
}
.content .item-tu{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  padding: 10px 5px;
}
.content .item-tu img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transition: all .3s,transform .3s ease,-webkit-transform .3s ease;
}
 .content .item-tu img:hover{
  transform: scale(1.2);

}

</style>