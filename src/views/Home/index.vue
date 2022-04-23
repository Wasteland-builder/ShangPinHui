<template>
  <div>
      <!-- 三级联动已经注册为全局组件，因此不需要再引入 -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor v-for = "(floor, index) in floorList" :key = "floor.id" :list="floor"/>
      <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import Recommend from '@/views/Home/Recommend'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
import {mapState} from 'vuex'
export default {
    components:{
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted() {
      // 派发action，获取floor组件的数据
      this.$store.dispatch("getFloorList");
      // 获取用户信息在首页展示
      // this.$store.dispatch("getUserInfo");
    },
    computed:{
      ...mapState({
        floorList: state => state.home.floorList
      })
    }
}
</script>

<style>

</style>