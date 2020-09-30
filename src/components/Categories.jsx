import React from "react";
import PropTypes from "prop-types";

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
const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все покрытия
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li> // {items && items.map()} - проверка на null или undefined для items
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  //activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired, // массив строк
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: 0,
}; // значения пропсов по умолчанию

export default Categories;
