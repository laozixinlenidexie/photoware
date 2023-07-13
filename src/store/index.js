import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import image from "@/store/image"
export default new Vuex.Store({
    modules:{
        image
    }
})