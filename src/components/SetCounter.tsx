import { useDispatch, useSelector } from "react-redux"
import { Button } from "./Button"
import { Input } from "./Input"
import { AppRootStateType } from "../state/store"
import { changeMaxValueAC, changeMinValueAC, setValueHandlerAC } from "../state/counterReducer"

type SetCounterPropsType = {

}

export const SetCounter: React.FC<SetCounterPropsType> = (
    {

    }
) => {

    const currentMaxValue = useSelector<AppRootStateType, number>(state => state.counter.currentMaxValue)
    const currentMinValue = useSelector<AppRootStateType, number>(state => state.counter.currentMinValue)
    const changing = useSelector<AppRootStateType, boolean>(state => state.counter.changing)
    const correctValue = useSelector<AppRootStateType, boolean>(state => state.counter.correctValue)
    const dispatch = useDispatch()

    const changeMaxValueHandler = (value: number) => {
        dispatch(changeMaxValueAC(value))
    }

    const changeMinValueHandler = (value: number) => {
        dispatch(changeMinValueAC(value))
    }

    const setValueHandler = () => {
        dispatch(setValueHandlerAC(currentMinValue, currentMaxValue))
    }

    return (
        <div className="border mainWrapper">
            <div className="border dispalyWrapper setDispalyWrapper">
                <div className="setValueWrapper">
                    <span className="setValueWrapperText">max value:</span>
                    <Input callback={changeMaxValueHandler} value={currentMaxValue} />
                </div>
                <div className="setValueWrapper">
                    <span className="setValueWrapperText">start value:</span>
                    <Input callback={changeMinValueHandler} value={currentMinValue} />
                </div>
            </div>
            <div className="border buttonBarWrapper">
                <Button disabled={!changing || !correctValue} name="set" callback={setValueHandler} />
            </div>
        </div>
    )
}
