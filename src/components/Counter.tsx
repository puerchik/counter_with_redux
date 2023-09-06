import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../state/store"
import { Button } from "./Button"
import { incrementCounterAC, resetCounterAC } from "../state/counterReducer"

type CounterPropsType = {}

export const Counter: React.FC<CounterPropsType> = () => {

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const changing = useSelector<AppRootStateType, boolean>(state => state.counter.changing)
    const correctValue = useSelector<AppRootStateType, boolean>(state => state.counter.correctValue)

    const dispatch = useDispatch()

    const incrementCounterHandler = () => {
        dispatch(incrementCounterAC())
    }

    const resetCounterHandler = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className="border mainWrapper">
            <div className="border dispalyWrapper counterDispalyWrapper">
                {!changing
                    ? <span className={`counterValue ${value === maxValue ? "  redColor" : ""}`}>{value}</span>
                    : changing && correctValue
                        ? <span className="setValue">Enter values and press 'set'</span>
                        : <span className="incorrectValue">Incorrect value!</span>}
            </div>
            <div className="border buttonBarWrapper counterButtonBarWrapper">
                <Button disabled={value === maxValue || changing || !correctValue} name={"inc"} callback={incrementCounterHandler} />
                <Button disabled={value === minValue || changing || !correctValue} name={"reset"} callback={resetCounterHandler} />
            </div>
        </div>
    )
}
