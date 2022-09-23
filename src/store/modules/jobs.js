import { fetchJobsList } from '../../api/index'

const state = {
    jobs: []
}

const getters = {
    jobList(state) {
        return state.jobs
    }
}

const mutations = {
    SET_JOBS(state, data) {
        state.jobs = data
    }
}

const actions = {
    async FETCH_JOBS({commit}) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response
    }
}
export default {
    state, getters, mutations, actions
}