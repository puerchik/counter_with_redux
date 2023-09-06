export type StateType = {
    maxValue: number
    minValue: number
    currentMaxValue: number
    currentMinValue: number
    value: number
    correctValue: boolean
    changing: boolean
}

type ActionType = ChangeMaxValueACType
    | ChangeMinValueACType
    | SetValueHandlerACType
    | IncrementCounterACType
    | ResetCounterACType


const initialState: StateType = {
    maxValue: 5,
    minValue: 0,
    currentMaxValue: 5,
    currentMinValue: 0,
    value: 0,
    correctValue: true,
    changing: false
}



export const counterReducer = (state = initialState, action: ActionType): StateType => {

    switch (action.type) {
        case "CHANGE-MAX-VALUE": {
            return {
                ...state,
                currentMaxValue: action.payload.value,
                correctValue: state.currentMinValue >= 0 && action.payload.value > 0 && state.currentMinValue < action.payload.value,
                changing: true                
            }
        }
        case "CHANGE-MIN-VALUE": {
            return {
                ...state,
                currentMinValue: action.payload.value,
                correctValue: action.payload.value >= 0 && state.currentMaxValue > 0 && action.payload.value < state.currentMaxValue,
                changing: true
            }
        }
        case "SET-VALUE": {
            return {
                ...state,
                maxValue: action.payload.max,
                minValue: action.payload.min,
                value: action.payload.min,
                changing: false
            }
        }
        case "INCREMENT": {
            return state.value < state.maxValue ? { ...state, value: state.value + 1 } : state
        }
        case "RESET": {
            return { ...state, value: state.minValue }
        }

        default: return state
    }
}

export const changeMaxValueAC = (value: number) => {
    return {
        type: "CHANGE-MAX-VALUE",
        payload: {
            value
        }
    } as const
}
type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>

export const changeMinValueAC = (value: number) => {
    return {
        type: "CHANGE-MIN-VALUE",
        payload: {
            value
        }
    } as const
}
type ChangeMinValueACType = ReturnType<typeof changeMinValueAC>

export const setValueHandlerAC = (min: number, max: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            min,
            max
        }
    } as const
}
type SetValueHandlerACType = ReturnType<typeof setValueHandlerAC>

export const incrementCounterAC = () => {
    return {
        type: "INCREMENT"
    } as const
}
type IncrementCounterACType = ReturnType<typeof incrementCounterAC>

export const resetCounterAC = () => {
    return {
        type: "RESET"
    } as const
}
type ResetCounterACType = ReturnType<typeof resetCounterAC>