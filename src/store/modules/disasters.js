import axios from 'axios';

const state = {
    disasters: []
}

const getters = {
    allDisasters: state => state.disasters
 }

const actions = {
    async fetchDisasters({ commit }) {
        const response = await axios.get('https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1');

        const disasters = [];

        response.data.data.forEach(d => {
            const disaster = {
                id: d.id,
                name: d.fields.name
            }

            disasters.push(disaster)
        });

        commit('disastersFetched', disasters )
    }
 }

const mutations = { 
    disastersFetched: (state, disasters) => {
        state.disasters = disasters;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}