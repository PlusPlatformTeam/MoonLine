export const CHANGE_DIR = "CHANGE_DIR";
export const CHANGE_LANG = "CHANGE_LANG";

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
