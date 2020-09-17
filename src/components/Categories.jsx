import React, { useState } from "react";

// Классовый компонент:
/*class Categories extends React.Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      // при помощи setState меняем конкретное свойство
      activeItem: index,
    });
  };

  render() {
    const { items, onClickItem } = this.props;

    return (
      <div className="categories">
        <ul>
          <li>Все покрытия</li>
          {items.map((name, index) => (
            <li
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}*/

// Функциональный компонент:
// React.memo() предотвращет ненужный ререндер Categories. React.memo() делает поверхностное сравнение пропсов. Если ссылка на пропсы не меняется, то повторный ререндер делать не будет
const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    // выбор категории обоев пользователем: бумага, флизелин, винил, ...
    setActiveItem(index); // сохраняем выбранную категорию в state
    onClickItem(index); // из компонента Home
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все покрытия
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li> // {items && items.map()} - проверка на null или undefined для items
          ))}
      </ul>
    </div>
  );
});

export default Categories;
