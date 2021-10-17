// index é responsavel por gerar toda estrutura de uma store do vuex(state, getters, actions, muttations)
import { State, Getters, Mutations, MutationsInterface } from './types';

const Minutes = 0.05;

export const state = (): State =>({
    time: Minutes * 60,
    isActive: false,
    hasCompleted: false,
})

export const getters: Getters = {
    minutes: state => Math.floor(state.time / 60),
    seconds: state => state.time % 60
}

export const mutations: MutationsInterface = {
    [Mutations.SET_TIME](state, newTime) {
        state.time = newTime;
    },
    [Mutations.RESET_TIME](state) {
        state.time = Minutes * 60;
    },
    [Mutations.SET_IS_ACTIVE](state, isActive) {
        state.isActive = isActive;
    },
    [Mutations.SET_HAS_COMPLETED](state, hasCompleted) {
        state.hasCompleted = hasCompleted;
    },
}