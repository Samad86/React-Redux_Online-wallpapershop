import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Categories,
  SortPopup,
  WallpaperBlock,
  WallpaperLoadingBlock,
} from "../components";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchWallpapers } from "../redux/actions/wallpapers";

const categoryNames = ["Бумага", "Флизелин", "Винил", "Акрил", "Текстиль"]; // выносим массив категорий, чтобы предотвратить ненужный ререндер. В items в функции Home() теперь всегда будет храниться одна и та же ссылка (даже когда компонент Home произведет ререндер)

const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch(); // useDispatch - получение функции store.dispatch в компоненте (аналог mapDispatchToProps в классовом компоненте). Хук возвращает ссылку на dispatch функцию из Redux. Используется для отправки действий.

  const items = useSelector(({ wallpapers }) => wallpapers.items); // useSelector - маппинг значения из store (аналог mapStateToProps в классовом компоненте). В качестве аргумента селектор будет передавать Redux state и будет вызываться когда компонент перерендеривается, так же он подписывается на store и вызывается каждый раз при изменении. Однако селектор будет производить сравнение (по умолчанию является строгим ===) предыдущего значения результата селектора и текущего значения результата. Если они отличаются, компонент будет вынужден повторно выполнить рендеринг. С useSelector() возвращение нового объекта каждый раз по умолчанию будет вызывать повторный рендеринг.
  // Указываем конкретно, что вытаскиваем из хранилища - wallpapers, filters (а не весь state), чтобы избежать лишнего ререндера.
  // Возвращает массив

  const isLoaded = useSelector(({ wallpapers }) => wallpapers.isLoaded);

  const { category, sortBy } = useSelector(({ filters }) => filters);

  // Фильтрация обоев по категориям покрытия.
  // Когда пользователь выбирает категорию покрытий обоев (бумага, флизелин, винил, акрил или текстиль), т.е. происходит фильтрация товаров по выбранному покрытию, каждый раз отправляется запрос на сервер.
  // В useEffect следим за свойствами category и sortBy.

  useEffect(() => {
    dispatch(fetchWallpapers());
  }, [category, sortBy]); // выполнение эффекта только 1 раз при первом рендере (отправка экшена). dispatch выполняет асинхронный экшен fetchWallpapers, который возвращает функцию

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []); // при первом рендере создается ссылка на функцию onSelectCategory и больше не меняется, предотвращается ненужный ререндер

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все обои</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <WallpaperBlock key={obj.id} isLoading={true} {...obj} /> // передаем все свойства obj в компонент <WallpaperBlock />
            ))
          : Array(25)
              .fill(0)
              .map((_, index) => <WallpaperLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
