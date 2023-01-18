import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {unsplashActions} from "../store/unsplash/unsplash.slice";

const actions = {
    ...unsplashActions
}

export const useAppActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}