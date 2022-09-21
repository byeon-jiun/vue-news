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
           await fetchAllList(pageName)
                .then(({data}) => {
                    commit('SET_LIST', data)
                    return data
                })
                .catch(err => console.log(err))
        }
}
export default {
    state, getters, mutations, actions
}