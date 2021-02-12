import gameReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  games: gameReducer,
  game: detailReducer,
});

export default allReducers;
