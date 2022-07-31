<template>
  <div class="page">
    <div class="img">
      <p>真抱歉，页面已丢失</p>
      <Button type="primary" class="btn" @click="handleClick">
          刷新页面
      </Button>
      <Button type="primary" class="btn" @click="goHome">
          回到首页
      </Button>
    </div>
  </div>
</template>

<script>
import {
  Button,
} from 'element-ui';
export default {
  components: {
    Button,
  },
  methods:{
    handleClick(){
      window.location.reload();
    },
    goHome(){
      this.$router.replace('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  .img{
    width: 950px;
    height: 435px;
    margin: 0 auto;
    background: url(~@/assets/img/404.png) no-repeat;
    background-position: center;
    text-align: center;
    margin-top: -80px;
    p{
      width: 100%;
      float: left;
      text-align: center;
      margin-top: 273px;
      color:#3b82fe ;
      font-size: 14px;
    }
    .btn{
      margin-top: 45px;
      width: 140px;
      height: 50px;
      margin-left: 10px;
      font-size: 18px;
    }
  }
}
</style>
