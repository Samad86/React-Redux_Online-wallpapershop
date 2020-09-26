import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components"; // webpack при сборке сначала ищет файл index.js по указанному пути
import { Home, Cart } from "./pages";
import { setWallpapers } from "./redux/actions/wallpapers";

// Классовый компонент
// class App extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       this.props.setWallpapers(data.wallpapers);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route
//             exact
//             path="/"
//             render={() => <Home items={this.props.items} />}
//           />
//           <Route path="/cart" component={Cart} />
//         </div>
//       </div> // render - для передачи данных в компонент <Home />
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.wallpapers.items, // из объекта state вытаскиваем редьюсер wallpapers и оттуда - свойство items и передаем в свойство items
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setWallpapers: (items) => dispatch(setWallpapersAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// /*
// connect используется для создания компонентов-контейнеры, которые подключены к хранилищу, возвращает компонент высшего порядка. В Connect передается базовый компонент App.
// Аргументом connect является функция MapStateToProps - результатом передачи этого аргумента является подписка компонента-контейнера на обновления хранилища. Функция mapStateToProps будет вызываться каждый раз, когда состояние хранилища изменяется. И когда хранилище изменяется, будет происходить ререндер компонента App, если это нужно. Функция mapStateToProps возвращает какие-то данные из хранилища.
// Вторым аргументом connect является функция mapDispatchToProps - внедрение метода хранилища dispatch() в качестве свойства для компонента, генераторы действий. Функция mapDispatchToProps возвращает какие-то actions.
// */

// Функциональный компонент
function App() {
  const dispatch = useDispatch(); // useDispatch - получение функции store.dispatch в компоненте (аналог mapDispatchToProps в классовом компоненте). Хук возвращает ссылку на dispatch функцию из Redux. Используется для отправки действий.

  useEffect(() => {
    axios.get("http://localhost:3001/wallpapers").then(({ data }) => {
      dispatch(setWallpapers(data));
    });
  }, []); // выполнение эффекта только 1 раз при первом рендере

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
