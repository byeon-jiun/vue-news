import { fetchNewsList } from '../../api/index'

const state = {
    news: []
}

const getters = {
    newsList(state) {
        return state.news
    }
}

const mutations = {
    SET_NEWS(state, data) {
        state.news = data
    }
}

const actions = {
    FETCH_NEWS({commit}) {
        fetchNewsList()
            .then(({data}) => commit('SET_NEWS', data))
            .catch(err => console.log(err))
    }
}
export default {
    state, getters, mutations, actions
}