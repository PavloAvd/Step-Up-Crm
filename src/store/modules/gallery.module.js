import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
import { fbApp } from "/firebase-config";



const storage = getStorage(fbApp)
const storageRef = ref(storage)
const carouselRef = ref(storage, 'carouselPhotos')

export default {
    namespaced: true,
    state: {
        carouselImages : []

    },

    mutations: {
        setCarouselImages(state, imgUrls){
            state.carouselImages = imgUrls
        }
    },
    actions: {
        async loadCarousel({commit}) {
            const imagesRef = await listAll(carouselRef)
            // console.log(imagesRef)
            // console.log(imagesRef.items)
            // console.log(imagesRef.prefixes)

            const images = Object.values(imagesRef.items)

            let imgUrls =[]
                images.map((async item => {
                let imgRef = ref(storage, `${item.fullPath}`)
                imgUrls.push(await getDownloadURL(imgRef))

            }))
            console.log(imgUrls)
            commit('setCarouselImages', imgUrls)


        }
    },
    getters: {
        load(state) {
            return state.carouselImages
        }
    },
}
