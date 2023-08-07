<template>
  <div class="home">
    <header class="home-header wrap" :class="{'active' : headerScroll}">
      <router-link tag="i" to="./category">
        <i class="iconfont icon-menu"></i>
      </router-link>
      <div class="header-search">
        <span class="app-name">科院商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list">山河无恙，人间皆安</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>
    <swiper :list="swiperList"></swiper>
    <div class="category-list">
      <div v-for="item in categoryList" v-bind:key="item.categoryId">
        <img :src="item.imgUrl" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="good">
      <header class="good-header">新品上线</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in newGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.goodsCoverImg" />
          <div class="good-info">
            <p class="name">{{ item.goodsName }}</p>
            <p class="subtitle">{{ item.goodsIntro }}</p>
            <span class="price">￥ {{ item.sellingPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">热门商品</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in newGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.goodsCoverImg" />
          <div class="good-info">
            <p class="name">{{ item.goodsName }}</p>
            <p class="subtitle">{{ item.goodsIntro }}</p>
            <span class="price">￥ {{ item.sellingPrice }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="good" :style="{ paddingBottom: '100px' }">
      <header class="good-header">最新推荐</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in newGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.goodsCoverImg" />
          <div class="good-info">
            <p class="name">{{ item.goodsName }}</p>
            <p class="subtitle">{{ item.goodsIntro }}</p>
            <span class="price">￥ {{ item.sellingPrice }}</span>
          </div>
        </div>
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
import NavBar from "../components/NavBar.vue";
import { getLocal } from "@/common/js/utils";
import { getHome } from "../service/home";
import { Toast } from "vant";
export default {
  name: "Home",
  components: { NavBar, Swiper },
  data() {
    return {
      headerScroll: false,
      isLogin: false,
      swiperList: [],
      categoryList: [],
      hots: [],
      newGoodses: [],
      recommends: []
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.pageScroll);
    const token = getLocal("token");
    if (token) {
      this.isLogin = true;
    }
    Toast.loading({
      message: "加载中...",
      forbidClick: true
    });
    const { data } = await getHome(); // 请求我们上面写好的mock接口
    this.swiperList = data.carousels;
    this.categoryList = data.categoryList;
    this.newGoodses = data.newGoodses; // 新品上线
    this.hots = data.hotGoodses; // 热门商品
    this.recommends = data.recommendGoodses; // 最新推荐
    Toast.clear(); // 数据请求结束，清楚弹窗
  },
  methods: {
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
    goToDetail() {
      // this.$router.push({ path: `product/${item.goodsId}` })
      this.$router.push({ path: `product` })
    }
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";
.home {
  .home-header {
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%, 50px);
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding: 0 15px;
    .boxSizing();
    font-size: 15px;
    color: #fff;
    z-index: 10000;
    .icon-menu {
      color: @primary;
    }
    &.active {
      background: @primary;
      .icon-menu {
        color: #fff;
      }
      .login {
        color: #fff;
      }
    }
    .header-search {
      display: flex;
      .wh(74%, 20px);
      line-height: 20px;
      margin: 10px 15px;
      padding: 5px 0;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .app-name {
        padding: 0 10px;
        color: @primary;
        font-size: 20px;
        font-weight: bold;
        border-right: 1px solid #666;
      }
      .icon-search {
        padding: 0 10px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .login {
      color: @primary;
      line-height: 52px;
      .van-icon-manager-o {
        font-size: 20px;
        vertical-align: -3px;
      }
    }
  }
  .category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center;
      img {
        .wh(40px, 40px);
        margin: 13px auto 8px auto;
      }
    }
  }
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: @primary;
      font-size: 16px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        // .fj();
        display: flex;
        width: 100%;
        height: 120px;
        padding: 10px 0;
        border-bottom: 1px solid #dcdcdc;
        img {
          width: 140px;
          height: 120px;
          padding: 0 10px;
          .boxSizing();
        }
        .good-info {
          width: 56%;
          height: 120px;
          padding: 5px;
          text-align: left;
          .boxSizing();
          p {
            margin: 0;
          }
          .name {
            width: 100%;
            max-height: 40px;
            line-height: 20px;
            font-size: 15px;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .subtitle {
            width: 100%;
            max-height: 20px;
            padding: 10px 0;
            line-height: 25px;
            font-size: 13px;
            color: #999;
            overflow: hidden;
          }
          .price {
            color: @primary;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>