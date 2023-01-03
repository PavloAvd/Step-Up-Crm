export default {
    namespaced: true,
    state() {
        return {
            message : null
        }

    },
    getters: {},
    mutations: {
        setMessage(state, message) {
            state.message = message
            console.log('from mut', state.message)
        },
        clearMessage(state) {
            state.message = null
        },
        closeStudentBar(state) {
            state.studentBar = false
        },

    },
    actions: {
        setMessage({commit}, message) {
            console.log('from errors',message)
            commit('setMessage', message)
            setTimeout(() => {
                commit('clearMessage')
            }, 10000)
        }
    },
}
