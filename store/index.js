import Vue from 'Vue'
import Vuex from 'Vuex'
import tab from './tab'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
        user
    }
})