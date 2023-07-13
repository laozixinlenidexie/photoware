<template>
<div class="windows-view">
  <div class="content">
    <div class="tu-width">
      <div class="guanli">
        <img src="@/assets/image/1651592010286.jpg">
      </div>
    </div>
    <div class="detil">

    </div>
    <div class="biaoqian">

    </div>
    <div class="about">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "xiangqing"
}
</script>

<style lang="less"  scoped>
.windows-view{
  display: flex;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  .content{
    user-select:none;
    position: relative;
    height: 100%;
    width: 100%;
    .tu-width{
      position: relative;
      transform: translate(-50%);
      left: 50%;
      width: 350px;
      height: auto;
      .guanli{
        height: auto;
        width: 100%;
        border-radius: 16px;
        overflow: hidden;
        padding: 10px 5px;
        border: none;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;


        }
    }

    }

  }
}


</style>