import { fetchAllList } from '../../api/index'

const state = {
    list: []
}

const getters = {
    AllList(state) {
        return state.list
    }
}

const mutations = {
    SET_LIST(state, data) {
        state.list = data
    }
}

const actions = {
     async FETCH_All_LIST({commit}, pageName) {
           const response = await fetchAllList(pageName);
           commit('SET_LIST', response.data);
           return response
        }
}
export default {
    state, getters, mutations, actions
}