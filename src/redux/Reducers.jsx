import * as actions from "./Actions";

const initialState = {
  lng: "FA",
  direction: "rtl",
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_DIR:
      return {
        ...state,
        direction: state.lng === "EN" ? "ltr" : "rtl",
      };
    case actions.CHANGE_LANG:
      return {
        ...state,
        lng: state.lng === "EN" ? "FA" : "EN",
      };
    default:
      return state;
  }
};

export default rootReducer;
