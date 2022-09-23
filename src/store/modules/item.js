import { fetchItemDetail } from '../../api/index'

const state = {
    item: {}
}

const getters = {
    itemDetail(state) {
        return state.item
    }
}

const mutations = {
    SET_ITEM_DETAIL(state, data) {
        state.item = data
    }
}

const actions = {
    async FETCH_ITEM_DETAIL({commit}, id) {
        const response = await fetchItemDetail(id);
        commit('SET_ITEM_DETAIL', response.data);
        return response
    }
}
export default {
    state, getters, mutations, actions
}