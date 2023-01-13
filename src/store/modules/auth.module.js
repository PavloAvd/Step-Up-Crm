import {
    onAuthStateChanged,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    doc
} from "firebase/firestore";
import { fbApp } from "/firebase-config";
import {error} from "@/utils/error";

const db =getFirestore(fbApp)
const auth = getAuth(fbApp)
const ROLE = 'role'

export default {
    state: {
        role: localStorage.getItem(ROLE)
    },
    getters: {
        role(state) {
            return state.role
        }
    },
    mutations: {
        setRole(state, role) {
            state.role = role
            localStorage.setItem(ROLE, role)
            console.log(role)
        }
    },
    actions: {
        async login({ dispatch, commit }, {email, password}) {
           try {
              let adminMail = []
              const queryAdmins = await getDocs(collection(db, "isAdmin"))
              queryAdmins.forEach((doc) => {
                  adminMail = doc.data()
              })
              if ( Object.values(adminMail).includes(email) ) {
                   await signInWithEmailAndPassword (auth, email, password)
                   console.log('auth as admin', auth.currentUser.email)
                   commit('setRole', 'admin')
                   commit('openStudentBar')

              } else {
                   await signInWithEmailAndPassword (auth, email, password)
                   console.log('auth as student', auth.currentUser.email)
                   commit('setRole', 'student')
                   commit('openStudentBar')
                  dispatch('userState')
              }
           } catch (e) {
               dispatch('message/setMessage', {
                   value : error(e.code),
                   type : 'danger'
               },{root: true})
        }
        },
        async signUp({ commit, dispatch }, {email, password, fullName, bDate, phone, zone, dCode}) {
            try {
                await createUserWithEmailAndPassword (auth, email, password)
                await addDoc(collection(db, 'users' ), {
                    email : email,
                    fullName : fullName,
                    birthday : bDate,
                    telephone : phone,
                    zone : zone,
                    dCode: dCode
                })
                dispatch('userState')
                // console.log('auth', email,fullName,bDate,phone,zone,dCode)
            } catch (e) {
                console.log(e)
            }
        },
        async userState ({commit, dispatch}) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('user', user)
                }
            })
        }
    }



}
