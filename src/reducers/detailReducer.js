const initialGameDetails = { game: {}, screen: {}, isLoading: true };

const detailReducer = (state = initialGameDetails, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING":
      return { ...state, isLoading: true };

    default:
      return { ...state };
  }
};

export default detailReducer;
