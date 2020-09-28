const initialState = {
  items: [],
  isLoaded: false,
};
// при помощи isLoaded проверяем, произошла ли загрузка успешно

const wallpapers = (state = initialState, action) => {
  if (action.type === "SET_WALLPAPERS") {
    return {
      ...state,
      items: action.payload, // массив всех обоев
      isLoaded: true,
    };
  }
  return state; // если редьюсер обновлять не нужно (условие if не сработает, то вернутся старые данные)
};

export default wallpapers;
