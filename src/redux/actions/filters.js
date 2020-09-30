export const setSortBy = ({ type, order }) => ({
  type: "SET_SORT_BY",
  payload: { type, order },
}); // Action Creator - функция, которая возвращает объект action, принимает динамические данные (name) и прокидывает их в action

export const setCategory = (catIndex) => ({
  type: "SET_CATEGORY",
  payload: catIndex,
});
