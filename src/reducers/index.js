import { combineReducers } from "redux";
import BandReducer from "./BandReducer";

export default combineReducers({
    bands: BandReducer
});