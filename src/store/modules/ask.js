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
    FETCH_ASK({commit}) {
        fetchAskList()
            .then(({data}) => commit('SET_ASK', data))
            .catch(err => console.log(err))
    }
}
export default {
    state, getters, mutations, actions
}