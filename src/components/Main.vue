<template>
  <div name="quan" class="quan" @click="closelongin" >
    <transition name="fade" leave-active-class="animate__animated animate__headShake">
      <login v-show="jieguo" @childfn="xianshi" class="animated"></login>
    </transition>
    <zuoce></zuoce>
    <div class="you">
      <Header @childfn="xianshi"></Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import zuoce from "@/page/zuoce";
import Header from "@/page/Header";
import Content from "@/page/Content";
import login from "@/page/Login";
export default {
  name: "Main",
  components:{
    zuoce,
    Content,
    login,
    Header,
  },
  data(){
    return{
      jieguo:false,
    }
  },
  // computed:{
  //   show(){
  //     return{
  //       display:this.jieguo,
  //     }
  //   }
  // },
  methods:{
     xianshi(v) {
      this.jieguo=v;

    },
    closelongin(){

    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /*border: 1px solid black;*/
  -webkit-text-size-adjust: 100%;
}
.quan{
  display: flex;
  flex-wrap: nowrap;
  height: 100% ;
  width: 100%;
}
.you{
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  height: 100%;
  position: relative;
}

</style>