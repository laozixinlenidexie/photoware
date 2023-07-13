<template>
  <!--    侧边-->
  <div name="left" class="zuo">
    <div class="zbai">
      <router-link to="/home"><img src="@/assets/logo/home.svg"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /*border: 1px solid black;*/
  -webkit-text-size-adjust: 100%;
}
.zuo{
  display: flex;
  width: 90px;
  height: auto;
  background: #F0F8FF;
}
.zuo .zbai{
  position: relative;
  height: 54px;
  width: 100%;
  background: white;
  box-shadow: 0 0 4px grey;
  transition: 0.2s;
  user-select:none;

}
.zuo .zbai:hover{
  box-shadow: 0 0 1px grey;
}
.zuo .zbai img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  user-select:none;

}
</style>