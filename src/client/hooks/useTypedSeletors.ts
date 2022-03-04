import { Rootstate } from './../Store/index';
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const useTypedSeletors: TypedUseSelectorHook<Rootstate> = useSelector

