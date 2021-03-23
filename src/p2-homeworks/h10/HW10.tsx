import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import Preloader from "./Preloader/Preloader"

function HW10() {
    const dispatch = useDispatch()
    const selector = useSelector<AppStoreType, StateType>( state => state.loading)

    // useSelector, useDispatch
   // const loading = false;

    const setLoading = () => {
        const action = loadingAC(true)
        dispatch(action)

        setTimeout(() => {
            const action = loadingAC(false)
            dispatch(action)
        }, 2000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {selector.loading
                ? (
                    <div><Preloader/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
