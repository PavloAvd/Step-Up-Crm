const TOKEN_KEY = 'jwt-token'
const ROLE = 'role'
import axios from 'axios'
// import store from "@/store";
// import {error} from '../../../utils/error'

export default {
    namespaced: true,

    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY),
            role: localStorage.getItem(ROLE)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        },
        setRole(state, role) {
            state.role = role
            localStorage.setItem(ROLE, role)
            console.log(role)
        }

    },

    actions: {
        async login({commit, dispatch}, payload) {
            try {
                const url = `${process.env.VUE_APP_FB_SIGN_IN_URL}${process.env.VUE_APP_FB_KEY}`
                const {data} = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
                commit('setRole', 'admin')
                // commit('clearMessage', null, {root: true})

                } catch (e) {
                dispatch('setMessage', {
                    value: error(e.response.data.error.message),
                    type: 'danger'
                },{root: true})
                throw new Error()
            }
        },
        async signUp ({ commit, dispatch}, payload) {
            try {
                const url = `${process.env.VUE_APP_FB_SIGN_UP_URL}${process.env.VUE_APP_FB_KEY}`
                const {data} = await axios.post(url, {...payload, returnSecureToken: true})
                commit('setToken', data.idToken)
                // commit('clearMessage', null, {root: true})
                console.log(payload)
            } catch (e) {
                dispatch('setMessage', {
                    value: error(e.response.data.error.message),
                    type: 'danger'
                },{root: true})
                throw new Error()
            }
        }
    },
    getters: {
        role (state) {
           return state.role
        },
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}
