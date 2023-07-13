<template>
  <div class="Dengluview">
    <form action="#">
      <div class="close-btn" @click="closebtn">X</div>
      <h1>登录</h1>
      <label>用户名/账号</label>
      <input type="text">

      <label>密码</label>
      <input type="password">

      <a>忘记密码</a>
      <button>登录</button>
      <p>没有账号？</p>
      <a>注册</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      xianshi:false,
    }
  },
  methods:{
    closebtn(){
      this.$emit('childfn',this.xianshi);
    }
  }
}
</script>

<style scoped>
.Dengluview{
  position:absolute;
  width:35%;
  height:350px;
  display:flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: whitesmoke;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 0 10px black;
  z-index:9999;
  animation: pop 0.5s ease;
}
@keyframes pop {
  0%{
    transform: scaleY(0);
  }
}
h1{
  user-select:none;
  font-size: 25px;
  color: #46e8e8;
  text-align: center;
  margin-bottom: 25px;
}
form{
  user-select:none;
  background: none;
}
label{
  user-select:none;
  background: none;
  color: black;
  font-weight: bold;
  font-size: 20px;
}
input{
  display: block;
  background: none;
  width: 90%;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  padding: 10px;
}
button{
  display: block;
  margin-top: 20px;
  width: 90%;
  color: white;
  cursor: pointer;
  font-size: 20px;
  border-radius: 10px;
  background: black;
  font-weight: bold;
  border: none;
  transition: 0.3s ease;
}
button:hover{
  background: #45f6e9;
}
form a{
  user-select:none;
  font-weight: bold;
  color: lightseagreen;
  background: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
}
form a:hover{
  color: rgb(13,84,81);
}
p{
  font-weight: bold;
  display: inline;
}
.close-btn{
  user-select:none;
  outline: none;
  font-weight: bold;
  position: absolute;
  right: 30px;
  top: 20px;
  width: 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  transition: 0.2s;
}
.close-btn:hover{
  background: #bfbdbd;
}


</style>