import React from 'react';
import style from '../styles/categories.module.css';

// {activeCategory,items,onClickCategory,}

{
  /* <ul>
  <li
    className={activeCategory === null ? 'active' : ''}
    onClick={() => onClickCategory(null)}>
    Все статьи
  </li>
  {items &&
    items.map((name, index) => (
      <li
        className={activeCategory === index ? 'active' : ''}
        onClick={() => onClickCategory(index)}
        key={`${name}_${index}`}>
        {name}
      </li>
    ))}
</ul>; */
}

const categoryNames = [
  'FTP',
  'SSH',
  'Веб-приложения',
  'Сервисы',
  'Сайты',
  'VPS',
  'Домены',
  'Другое',
  'Почта',
  'Диагностика проблем',
];

const Categories = React.memo(function Categories() {
  return (
    <div className={style.categories}>
      <h3>Категории:</h3>
      <ul>
        <li className={style.active}>Все статьи</li>

        {categoryNames.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
