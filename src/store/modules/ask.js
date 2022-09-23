import { fetchAskList } from '../../api/index'

const state = {
    ask: []
}

const getters = {
    askList(state) {
        return state.ask
    }
}

const mutations = {
    SET_ASK(state, data) {
        state.ask = data
    }
}

const actions = {
    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response
    }
}
export default {
    state, getters, mutations, actions
}