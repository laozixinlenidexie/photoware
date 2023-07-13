<template>
  <!--搜索栏-->
  <div name="head" class="ding">
    <div class="soushuo">
      <input name="搜索">
      <button>搜索</button>
    </div>
    <div class="denglu">
      <button @click="denglu">登录</button>
    </div>

  </div>
</template>

<script>
import login from "@/page/Login"
export default {
  name: "Header",

  data(){
    return {
      xianshi: true
    }
  },
  methods:{
    denglu(){
      this.$emit('childfn',this.xianshi);
      console.log(this.xianshi)
    }
  }

}
</script>

<style scoped>
 .ding{
  display: flex ;
  justify-content: end;
  height: 54px;
  width: 100%;
  box-shadow: 0 0 2px black;

}
 .ding .soushuo{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
}
.ding .soushuo input{
  height: 20px;
  width: 200px;
}
.ding .denglu{
  margin: 15px 0;
}
 .ding .denglu button{
   background: none;
   border: none;
   border-radius: 5px;
   transition: 0.2s;
   width: 50px;
   height: 30px;
   cursor: pointer;
 }
 .ding .denglu button:hover{
   background: #bfbdbd;
 }
</style>