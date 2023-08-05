import * as actions from "./Actions";

const initialState = {
  lng: "EN",
  direction: "ltr",
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
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
