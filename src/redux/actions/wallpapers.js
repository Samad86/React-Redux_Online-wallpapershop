import axios from "axios";

// setLoaded будет передавать в редьюсер wallpapers значение true или false, которое будет менять статус загрузки
export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

// fetchWallpapers - асинхронный экшен (Reux Thunk)
export const fetchWallpapers = () => (dispatch) => {
  dispatch(setLoaded(false)); // до отправки запроса на сервер isLoaded = false, dispatch отправляет это значение в redux
  axios.get("http://localhost:3001/wallpapers").then(({ data }) => {
    dispatch(setWallpapers(data));
  });
}; // функция fetchWallpapers возвращает другую функцию. Вторая функция выполняется с помощью библиотеки Redux Thunk (для получения товаров (запрос на сервер) и сохранения товаров)
// после отправки запроса и получения ответа выполняется экшен setWallpapers, он сохраняет товары и меняет значение isLoaded на true

export const setWallpapers = (items) => ({
  type: "SET_WALLPAPERS",
  payload: items,
}); // функция setWallpapers возвращает объект (для сохранения товаров)
