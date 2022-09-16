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
    FETCH_ITEM_DETAIL({commit}, id) {
        fetchItemDetail(id)
            .then(({data}) => commit('SET_ITEM_DETAIL', data))
            .catch(err => console.log(err))
    }
}
export default {
    state, getters, mutations, actions
}