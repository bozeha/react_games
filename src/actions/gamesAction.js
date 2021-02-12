import axios from "axios";
import {
  popularGames,
  newGames,
  upcomingGames,
  getGameFromSearch,
} from "../getApiUrl";

//// one way to get async api data fill the object and return to dispatch (update state)
//// then option
/* export const loadGames = (dispatch) => {
  axios.get(popularGames()).then((data) => {
    dispatch({
      type: "FETCH_GAMES",
      payload: { popular: data.data.results },
    });
  });
}; */

//// second way to get async api data fill the object and return to dispatch (update state)
//// async await
export const loadGames = () => async (dispatch) => {
  dispatch({ type: "GAMES_LOADING" });

  const popularGamesData = await axios.get(popularGames());
  const newGamesData = await axios.get(newGames());
  const upcomingGamesData = await axios.get(upcomingGames());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
    },
  });
};

export const loadGameFromSearch = (name) => async (dispatch) => {
  const searchGameData = await axios.get(getGameFromSearch(name));
  dispatch({
    type: "SEARCH",
    payload: {
      search: searchGameData.data.results,
    },
  });
};
