import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
// 封装游客身份模块uuid---->>生成一个随机字符串
import {getUUID} from '@/utils/uuid_token';
const state = {
    goodInfo: {},
    uuid_token: getUUID()
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    async getGoodInfo({commit}, skuid) {
      let result = await reqGoodsInfo(skuid);
      if (result.code === 200) {
          commit('GETGOODINFO', result.data);
      }
    },
    async AddOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if(result.code === 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'))
        }
    }

};
const getters ={
    categoryView(state) {
        return state.goodInfo.categoryView||{};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo||{};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}