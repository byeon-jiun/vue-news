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
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data)
                return data
            })
            .catch(err => console.log(err))
    }
}
export default {
    state, getters, mutations, actions
}