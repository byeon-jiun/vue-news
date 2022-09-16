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
    FETCH_USER_INFO({commit}, name) {
        fetchUserInfo(name)
            .then(({data}) => commit('SET_USER_INFO', data))
            .catch(err => console.log(err))
    }
}
export default {
    state, getters, mutations, actions
}