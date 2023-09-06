import { ChangeEvent } from "react"
import { useSelector } from "react-redux"
import { AppRootStateType } from "../state/store"

type InputPropsType = {
    value: number
    callback: (value: number) => void
}

export const Input: React.FC<InputPropsType> = (
    {
        value,
        callback
    }
) => {

    const correctValue = useSelector<AppRootStateType, boolean>(state=>state.counter.correctValue)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }

    return (
        <>
            <input onChange={onChangeHandler} value={value} className={`setInput ${!correctValue ? "red" : ""}`} type="number" />
        </>
    )
}
