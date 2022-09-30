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
    async FETCH_NEWS({commit}) {
        const response = await fetchNewsList()
        commit('SET_NEWS', response.data);
        return response
    }
}
export default {
    state, getters, mutations, actions
}