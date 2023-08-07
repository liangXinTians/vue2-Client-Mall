<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
    <!-- <nav-bar v-if="isShowNav"></nav-bar> -->
  </div>
</template>
<script>
//调用组件的元素全部会被全部解析为小写字母，比如<Hello-Vue>会被解析为<hello-vue>,然后去匹配组件名，匹配组件名顺序是：hello-vue(全小写)，helloVue(Camel Case即驼峰命名法)，HelloVue（PascalCase即帕斯卡命名法），如果能够匹配到组件，就可以使组件生效。
// import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    // NavBar
  },
  data() {
    return {
      transitionName: "slide-left",
      // isShowNav: true,
      // ShowMenuList: ["/", "home", "category", "cart", "user"] // 该变量为需要导航栏的数组
    };
  }, 
  watch: {
    $route(to, from) {
      // // 通过 ES6 提供的 includes 属性判断 to.name 是否包含在数组内
      // if (this.ShowMenuList.includes(to.name)) {
      //  this.isShowNav = true;
      // } else {
      //   this.isShowNav = false;
      // }
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left"; // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        this.transitionName = "slide-right";
      } else {
        this.transitionName = ""; //同级无过渡效果
      }
    }
  }
};
</script>
<style lang="less" >
@import "./common/style/mixin.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; //对字体进行抗锯齿渲染可以使字体看起来会更清晰舒服
  text-align: center;
  color: #2c3e50;
}
// .router-view {
//   width: 100%;
//   height: auto;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   margin: 0 auto;
//   -webkit-overflow-scrolling: touch;
// }
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
