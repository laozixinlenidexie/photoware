import {mockreq} from '@/api'

export default {
    state: {
        mockimagelist:[]
    },
    getter:{},
    mutations: {
        MOCKIMAGELIST(state,mockimageslist){
            state.mockimagelist=mockimageslist;
        }
    },
    actions: {
        async imageList({commit}) {
            let result = await mockreq();
            if (result.code==200){
                commit('MOCKIMAGELIST',result.data)

            }

        }

    },
    modules:{},
}