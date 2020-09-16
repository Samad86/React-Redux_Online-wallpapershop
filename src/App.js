import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux"; // connect объединит компонент App с Redux

import { Header } from "./components"; // webpack при сборке сначала ищет файл index.js по указанному пути
import { Home, Cart } from "./pages";
import { setWallpapers as setWallpapersAction } from "./redux/actions/wallpapers";

// function App() {
//   /* Запрос на фейковый json-сервер (fetch). Для примера - без использования библиотеки axios.
//   fetch("http://localhost:3000/db.json").then(response => response.json()).then(json => console.log(json))
//   В консоль выведется {wallpapers [...]}.
//   Для отправки при первом рендере приложения запроса на сервер и получения от него данных используем хук useEffect. */

//   useEffect(() => {
//     /* Запрос на json-сервер с помощью fetch
//     fetch("http://localhost:3000/db.json")
//       .then((response) => response.json())
//       .then((json) => setWallpapers(json.wallpapers));*/

//     /* GET-запрос при помощи axios возвращает уже готовый объект в формате JSON (в свойстве data). В случае с fetch возвращается Response со свойством body: ReadableString, далее его нужно конвертировать в формат JSON */

//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => setWallpapers(data.wallpapers));
//   }, []); // выполнение эффекта только 1 раз при первом рендере

//   return;
// }

// Классовый компонент
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setWallpapers(data.wallpapers);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Home items={this.props.items} />}
          />
          <Route path="/cart" component={Cart} />
        </div>
      </div> // render - для передачи данных в компонент <Home />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.wallpapers.items, // из объекта state вытаскиваем редьюсер wallpapers и оттуда - свойство items и передаем в свойство items
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWallpapers: (items) => dispatch(setWallpapersAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
connect используется для создания компонентов-контейнеры, которые подключены к хранилищу, возвращает компонент высшего порядка. В Connect передается базовый компонент App.
Аргументом connect является функция MapStateToProps - результатом передачи этого аргумента является подписка компонента-контейнера на обновления хранилища. Функция mapStateToProps будет вызываться каждый раз, когда состояние хранилища изменяется. И когда хранилище изменяется, будет происходить ререндер компонента App, если это нужно. Функция mapStateToProps возвращает какие-то данные из хранилища.
Вторым аргументом connect является функция mapDispatchToProps - внедрение метода хранилища dispatch() в качестве свойства для компонента, генераторы действий. Функция mapDispatchToProps возвращает какие-то actions.
*/
