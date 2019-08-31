import Vue from 'vue';
import Vuex from 'vuex';
import disasters from './modules/disasters';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        disastersModule: disasters
    }
})