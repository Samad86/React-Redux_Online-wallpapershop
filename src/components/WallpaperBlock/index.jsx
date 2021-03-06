import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function WallpaperBlock({ imageUrl, name, price, types, sizes }) {
  const availableTypes = ["Основа: Бумага", "Основа: Флизелин"];
  const availableSizes = [0.53, 0.7, 1.06];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = (index) => setActiveType(index);
  const onSelectSize = (index) => setActiveSize(index);

  return (
    <div className="wallpaper-block">
      <img className="wallpaper-block__image" src={imageUrl} alt="Wallpaper" />
      <h4 className="wallpaper-block__title">{name}</h4>
      <div className="wallpaper-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={classNames({
                active: activeType === index, // если activeType === index, то у элемента будет class = "active"
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={classNames({
                active: activeSize === index, // если activeSize === index, то у элемента будет class = "active"
                disabled: !sizes.includes(size),
              })}
            >
              {size} м.
            </li>
          ))}
        </ul>
      </div>
      <div className="wallpaper-block__bottom">
        <div className="wallpaper-block__price">
          {price} ₽<br />
          за рулон
        </div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

WallpaperBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired, // isRequired - тип imageUrl обязательно должен быть строкой
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired, // тип types обязательно должен быть массивом чисел
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

WallpaperBlock.defaultProps = {
  name: "---",
  price: 0,
  types: [],
  sizes: [],
}; // значения пропсов по умолчанию

export default WallpaperBlock;
