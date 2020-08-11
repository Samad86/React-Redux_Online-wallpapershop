import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { Header } from "./components"; // webpack при сборке сначала ищет файл index.js по указанному пути
import { Home, Cart } from "./pages";

function App() {
  /* Запрос на фейковый json-сервер (fetch). Для примера - без использования библиотеки axios.
  fetch("http://localhost:3000/db.json").then(response => response.json()).then(json => console.log(json))
  В консоль выведется {wallpapers [...]}.
  Для отправки при первом рендере приложения запроса на сервер и получения от него данных используем хук useEffect. */

  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => response.json())
      .then((json) => setWallpapers(json.wallpapers));
  }, []); // выполнение эффекта только 1 раз при первом рендере

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={wallpapers} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div> // render - для передачи данных в компонент <Home />
  );
}

export default App;
