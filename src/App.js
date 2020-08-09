import React from "react";

import { Header, Categories, SortPopup } from "./components"; // webpack при сборке сначала ищет файл index.js по указанному пути

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              onClickItem={(name) => console.log(name)}
              items={["Бумага", "Флизелин", "Винил", "Акрил", "Текстиль"]}
            />
            <SortPopup items={["популярности", "цене", "алфавиту"]} />
          </div>
          <h2 className="content__title">Все обои</h2>
          <div className="content__items">
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/16179/oboykin-borastapeter-borosan-easyup-2017-33557-r1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Borastapeter арт. 33557
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  979 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/16123/oboykin-borastapeter-borosan-easyup-2017hall-33501.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Borastapeter арт. 33501
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1980 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/59448/220060-oboykin-bn-international-van-gogh-2.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                BN International арт. 220060
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1240 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/6788/7018-r1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Eco wallpaper арт. 7018
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1796 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/15058/ch1405-chic-struktures-grandeco-oboykin.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Grandeco арт. CH1405</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  130 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/41798/skogspromenad-5259-3-oboykin-sandudd-metsapolku.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Sandudd арт. 5259-3</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  2360 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/65028/31415-oboykin-marburg-atelier.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Marburg арт. 31415</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  2937 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/10907/loft-238532-1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">МОФ арт. 238532-1</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  300 ₽<br />
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
            </div>{" "}
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/27056/54118-11.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Andrea Rossi арт. 54118-11
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  3250 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/57061/249347-1-oboykin-rasch-bombino-8.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Rasch арт. 249347</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  2200 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/6776/7006-r1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Eco wallpaper арт. 7006
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  189 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/16164/oboykin-borastapeter-borosan-easyup-2017-33542-r1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Borastapeter арт. 33542
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1980 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/31321/305142q-oboykin-rasch-english-style-iii.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Rasch арт. 305142</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  531 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/33948/82670-oboykin-decori-decori-carrara.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Decori Decori арт. 82670
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1498 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/65823/10197-05-oboykin-freedom-brigid.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Freedom арт. 10197-05</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1698 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/43080/410914-530-530.jpg-1-oboykin-rasch-hyde-park.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Rasch арт. 410914</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  780 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/58153/gl-co-lon-lo2201-oboykin-grandeco-little-ones.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Grandeco арт. LO22014</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  3500 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/1948/718-66.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">HomeColor арт. 718-66</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1385 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/73775/1162-r1-oboykin-borastapeter-everyday-moments.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Borastapeter арт. 1162</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  3600 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/8559/20480.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">МОФ арт. 20480</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1627 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/55349/figaro-610042-oboykin-calcutta.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Calcutta арт. 610042</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  2669 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/31317/305173q-oboykin-rasch-english-style-iii.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Rasch арт. 305173</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  759 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/70890/57309-oboykin-marburg-padua-classic.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Marburg арт. 57309</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  530 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/16181/oboykin-borastapeter-borosan-easyup-2017-33559-r1.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">
                Borastapeter арт. 335592
              </h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  1980 ₽<br />
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
            <div className="wallpaper-block">
              <img
                className="wallpaper-block__image"
                src="https://www.oboykin.ru/assets/images/products/3647/kids-i-teens-ii-293029.jpg"
                alt="Wallpaper"
              />
              <h4 className="wallpaper-block__title">Rasch арт. 293029</h4>
              <div className="wallpaper-block__selector">
                <ul>
                  <li className="active">
                    Основа:
                    <br />
                    Бумага
                  </li>
                  <li>
                    Основа:
                    <br />
                    Флизелин
                  </li>
                </ul>
                <ul>
                  <li className="active">0.53 м.</li>
                  <li>0.7 м.</li>
                  <li>1.06 м.</li>
                </ul>
              </div>
              <div className="wallpaper-block__bottom">
                <div className="wallpaper-block__price">
                  737 ₽<br />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
