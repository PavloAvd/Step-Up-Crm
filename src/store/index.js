import { createStore } from 'vuex'
import auth from '@/store/modules/auth.module'
import message from '@/store/modules/message.module'
import gallery from "@/store/modules/gallery.module";
export default createStore({
  state: {
    studentBar: true
  },
  getters: {
  },
  mutations: {
    openStudentBar (state) {
      state.studentBar = true
    },
    closeStudentBar (state) {
      state.studentBar = false
    },

  },
  actions: {

  },
  modules: {
    auth,
    message,
    gallery

  }
})
