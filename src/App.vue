<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      if (this._isMobile()) {
        this.$router.replace('/phone');
      } else {
        this.$router.replace('/pc');
      }
    },
    methods:{
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
        return flag;
      }
    }
  }
</script>

<style>
  #app {
    -webkit-text-size-adjust:none;
    /*font-family: MicrosoftYaHei;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*font-weight: 400;*/
  }
</style>
