import React, {useEffect, useState} from "react";

type propsType = {}

export const Clock = (props: propsType) => {
    let [data, setData] = useState(new Date())

    const numberZero = (num: number) => num < 10 ? '0' + num : num

    useEffect(() => {
        const intervalId = setTimeout (() => {
            setData(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    },  )

    let seconds = numberZero(data.getSeconds() )
    let minutes = numberZero(data.getMinutes() )
    let hours = numberZero(data.getHours())

    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    )
}