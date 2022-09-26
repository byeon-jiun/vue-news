import { fetchUserInfo } from '../../api/index'
import {saveUserToCookie, saveAuthToCookie, getUserFromCookie, getAuthFromCookie} from '../../utill/cookies'
const state = {
    user: {},
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || ''
}

const getters = {
    userInfo(state) {
        return state.user
    }
}

const mutations = {
    SET_USER_INFO(state, data) {
        state.user = data
    },
    SET_TOKEN (state, data) {
        state.token = data
    }
}

const actions = {
    async FETCH_USER_INFO({commit}, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER_INFO', response.data)
        saveUserToCookie(response.data.id);
        saveAuthToCookie('test123');
        return response
    }
}
export default {
    state, getters, mutations, actions
}