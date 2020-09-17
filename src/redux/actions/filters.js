export const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
}); // Action Creator - функция, которая возвращает объект action, принимает динамические данные (name) и прокидывает их в action

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
