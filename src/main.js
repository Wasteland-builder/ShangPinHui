import Vue from 'vue'
import App from './App.vue'
import { Button, MessageBox } from 'element-ui';
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
import CarouSel from '@/components/Carousel';
import Pagination from '@/components/Pagination'
// 第一个参数： 全局组件的名字 第二个参数： 哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(CarouSel.name, CarouSel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 关闭生产提示
Vue.config.productionTip = false

// 引入路由
import router from './router'

// 引入仓库
import store from './store';

// 引入mockServer.js---mock数据
import '@/mock/mockServe'

import '@/utils/validate'

// 引入swiper样式
import "swiper/css/swiper.css";

// 统一引入api文件夹里面的全部请求函数
import * as API from '@/api';
import atm from '@/assets/1.gif'
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  loading: atm
})
new Vue({
  render: h => h(App),

  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由:kv一致省略v
  router,

  // 注册仓库
  store
}).$mount('#app')
