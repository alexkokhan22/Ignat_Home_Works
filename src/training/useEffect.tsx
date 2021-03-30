import {useEffect, useState} from "react";
import React from "react";

useEffect(() => {
    console.log('Hello')

    //передавая такую функцию эффект умрет когда компонента умрет либо перед очередной отрисовкой эффекта
    return () => {
        console.log('I am dead')
    }
})

export const KeyboardHandler = () => {
    const [text, setText] = useState('')


    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText((state) => state + e.key)
        }

        // @ts-ignore
        window.addEventListener('keyUp', handler)


        //очистка EventListener происходит передачей того же callback, setInterval => clearInterval, setTimeOut => clearTimeOut
        return () => {
            // @ts-ignore
            window.removeEventListener('remove', handler)
        }
    }, [])

    return <div>
        {text}
    </div>
}
