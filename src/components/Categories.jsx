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
function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
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
        {items.map((name, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
