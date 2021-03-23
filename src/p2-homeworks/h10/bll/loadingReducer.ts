import {AppStoreType} from "./store";

export type StateType = {
    loading: boolean
}

type  loadingACType = {
    type: 'LOADING'
    loading: boolean
}

const initState: StateType = {
    loading: false
};

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                loading: action.loading
            };
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): loadingACType => {
    return {type: 'LOADING', loading}
}; // fix any