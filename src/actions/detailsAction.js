import axios from "axios";
import { getGameDetails, getGameScreenShots } from "../getApiUrl";

/* export const gameDetails = (id) => async (dispatch) => {
  console.log(`url:${getGameDetails(id)}`);
  const gameDetailsData = await axios.get(getGameDetails(id));

  dispatch({
    type: "GET_DETAIL",
    payload: { game: gameDetailsData.data },
  });
};
 */

export const gameDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });

  const gameDetailsData = await axios.get(getGameDetails(id));
  const gameScreenShotsData = await axios.get(getGameScreenShots(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: gameDetailsData.data,
      screen: gameScreenShotsData.data,
    },
  });
};
