type StateType = {
    _id: number
    name: string,
    age: number
}


type SortUpType = {
    type: 'sort'
    payload: 'up'
}

type SortDownType = {
    type: 'sort'
    payload: 'down'
}

type CheckAgeType = {
    type: 'check'
    payload: 18
}

type ActionType = SortUpType | SortDownType | CheckAgeType


export const homeWorkReducer = (state: Array<StateType>, action: ActionType): any => {
    switch (action.type) {
        case "sort": {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }

                })]
            }
            if (action.payload === 'down') {
                return [...state.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1
                    } else {
                        return -1
                    }

                })]
            }
        }

        case "check": {
            return [...state.filter( a => a.age >= 18)]
        }
        default:
            return state
    }
};