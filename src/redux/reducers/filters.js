const initialState = {
  category: null,
  sortBy: {
    type: "popular",
    order: "desc",
  },
}; // хранит в себе сортировку (по популярности, цене, алфавиту) и категории

const filters = (state = initialState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload, // заменяем category на новое значение
    };
  }

  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload, // заменяем sortBy на новое значение
    };
  }

  return state; // если редьюсер обновлять не нужно (условия if не сработают, то вернутся старые данные)
};

export default filters;
