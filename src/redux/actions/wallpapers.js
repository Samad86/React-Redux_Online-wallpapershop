import axios from "axios";

// fetchWallpapers - асинхронный экшен (Reux Thunk)
export const fetchWallpapers = () => (dispatch) => {
  axios.get("http://localhost:3001/wallpapers").then(({ data }) => {
    dispatch(setWallpapers(data));
  });
}; // функция fetchWallpapers возвращает другую функцию. Вторая функция выполняется с помощью библиотеки Redux Thunk (для получения товаров (запрос на сервер) и сохранения товаров)

export const setWallpapers = (items) => ({
  type: "SET_WALLPAPERS",
  payload: items,
}); // функция setWallpapers возвращает объект (для сохранения товаров)
