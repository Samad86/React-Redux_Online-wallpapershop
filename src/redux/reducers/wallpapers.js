const initialState = {
  items: [],
  isLoaded: false,
};

const wallpapers = (state = initialState, action) => {
  if (action.type === "SET_WALLPAPERS") {
    return {
      ...state,
      items: action.payload, // массив всех обоев
    };
  }
  return state; // если редьюсер обновлять не нужно (условие if не сработает, то вернутся старые данные)
};

export default wallpapers;
