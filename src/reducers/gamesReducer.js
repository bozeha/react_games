const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
  isLoading: true,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      ///// this will update only the popular object in the state of gameReducer
      ////  by adding ...state , it will return all the other objects , newGames, upcoming
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
        isLoading: false,
      };
    case "GAMES_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
