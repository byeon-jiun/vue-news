import { fetchUserInfo } from '../../api/index'

const state = {
    user: {}
}

const getters = {
    userInfo(state) {
        return state.user
    }
}

const mutations = {
    SET_USER_INFO(state, data) {
        state.user = data
    }
}

const actions = {
    async FETCH_USER_INFO({commit}, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER_INFO', response.data)
        return response
    }
}
export default {
    state, getters, mutations, actions
}