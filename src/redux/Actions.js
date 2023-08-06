export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const CHANGE_DIR = "CHANGE_DIR";
export const CHANGE_LANG = "CHANGE_LANG";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const changeLanguage = () => {
  return {
    type: CHANGE_LANG,
  };
};

export const changeDirection = () => {
  return {
    type: CHANGE_DIR,
  };
};
