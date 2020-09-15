import React from "react";

import { Categories, SortPopup, WallpaperBlock } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={["Бумага", "Флизелин", "Винил", "Акрил", "Текстиль"]}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
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
