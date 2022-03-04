import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { cartAction } from "../Store/Slice/cart.slice"; 


const allActions = {
   ...cartAction,
}

export const useActions = () => {
   const dispatch = useDispatch()
   return bindActionCreators(allActions, dispatch)
}