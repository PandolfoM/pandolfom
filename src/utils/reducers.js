import { UPDATE_VIEW } from "./actions";

const initialState = {
  isInView: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return {
        ...state,
        isInView: action.isInView,
      };
    default:
      return state;
  }
};

export default reducer;
