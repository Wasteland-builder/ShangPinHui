import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
// 登录与注册的模块
const state = {
    code: "",
    token: localStorage.getItem("TOKEN"),
    userInfo: {}
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state) {
        state.token = "";
        state.userInfo = {};
        localStorage.removeItem("TOKEN");
    }
};
const actions = {
    // 获取验证码
    async getCode({commit}, phone) {  
        let result = await reqGetCode(phone);
        if (result.code === 200) {
            commit("GETCODE", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    // 用户注册
    async userRegister({commit}, user) {
        let result = await reqUserRegister(user);
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    // 登录业务
    async userLogin({commit}, data) {
        let result = await reqUserLogin(data);
        if (result.code === 200) {
            commit("USERLOGIN", result.data.token);
            // 持久化存储token
            localStorage.setItem("TOKEN", result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("fail"))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}) {
        let result = await reqUserInfo();
        if (result.code === 200) {
            commit("GETUSERINFO", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error('fail'))
        }
        // if (result.code === 200) {
            // commit("GETUSERINFO", result.data);
        //     return "ok";
        // } else {
        //     return Promise.reject(new Error('fail'));
        // }
    },
    async userLogout({commit}) {
       let result = await reqLogout();
       if (result.code === 200) {
           commit("CLEAR");
           return 'ok';
       } else {
           return Promise.reject(new Error('fail'));
       }
    }
};
const getters = {};


export default {
    state,
    mutations,
    actions,
    getters
}