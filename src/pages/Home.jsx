import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Categories, SortPopup, WallpaperBlock } from "../components";
import { setCategory } from "../redux/actions/filters";

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

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []); // при первом рендере создается ссылка на функцию onSelectCategory и больше не меняется, предотвращается ненужный ререндер

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все обои</h2>
      <div className="content__items">
        {items.map((obj) => (
          <WallpaperBlock key={obj.id} {...obj} /> // передаем все свойства obj в компонент <WallpaperBlock />
        ))}
      </div>
    </div>
  );
}

export default Home;
