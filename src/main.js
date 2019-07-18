import("babel-polyfill");
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import './main.css';

Vue.config.productionTip = false;

Vue.directive('anchor',{
  inserted : function(el,binding){
    el.onclick = function(){
      document.documentElement.scrollTop = $('#anchor-'+binding.value).offset().top
    }
  }
});

(function () {
  console.log(navigator.userAgent);
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  if (flag) {
    const docEl = document.documentElement;
    const resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const setRem = function () {
      const screenWidth = docEl.clientWidth || window.screen.width || 360;
      // 750 PSD宽度(可变的)
      docEl.style.fontSize = (100 * screenWidth / 750 ) + 'px';
    };
    window.addEventListener('resize', setRem, false);
    setRem();
  } else {
    const docEl = document.documentElement;
    const resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
    const setRem = function () {
      const screenWidth = docEl.clientWidth || window.screen.width || 360;
      // 750 PSD宽度(可变的)
      docEl.style.fontSize = (100 * screenWidth / 1920) + 'px';
    };
    window.addEventListener('resize', setRem, false);
    setRem();
  }


})();// 用法psd量出来的像素距离 除以100  比如psd: 100px 转换后 1rem;

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/error.png',
  loading: './assets/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
