import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
// state: 仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
// mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
// cation :处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过API里面的接口函数调用
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data);
        }
    }
    ,
    // 获取首页轮播图的额数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    async getFloorList({commit}) {
        let result = await reqFloorList();
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data);
        }
    }
};
// getters:理解为计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}