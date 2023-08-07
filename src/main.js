import Vue from 'vue'
import App from './App.vue'
import md5 from 'js-md5';
import router from './router'
import store from './store'
import {  
  Button,
  Form,
  Field,
  Toast,
  Icon,
  Swipe,
  SwipeItem,
  PullRefresh,
  List,
  Tab,
  Tabs,
  SwipeCell,
  CheckboxGroup,
  Checkbox,
  SubmitBar,
  Stepper,
  GridItem, Grid,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Popup,
  AddressList,
  AddressEdit
        } from 'vant';
import 'lib-flexible/flexible';
import './mock/index.js' // 引入mock服务

Vue.use(Form)
  .use(Field)
  .use(Toast)
  .use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon)
  .use(GridItem).use(Grid)
  .use(Button)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(SwipeCell)
  .use(PullRefresh)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(SwipeCell)
  .use(CheckboxGroup)
  .use(Checkbox)
  .use(SubmitBar)
  .use(Popup)
  .use(Stepper)
  .use(AddressList)
  .use(AddressEdit);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.prototype.$md5 = md5;

window.vRouter = router



