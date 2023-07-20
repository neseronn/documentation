import React, { FC } from 'react';
import style from '../styles/categories.module.css';

interface ICategoriesProps {
  activeCategory: number | null;
  onClickCategory: (i: number | null) => void;
  categories: string[];
}

const Categories: FC<ICategoriesProps> = React.memo(function Categories({
  activeCategory,
  onClickCategory,
  categories,
}) {
  return (
    <div className={style.categories}>
      <h3>Категории:</h3>
      <ul>
        <li
          className={activeCategory === null ? style.active : ''}
          onClick={() => onClickCategory(null)}>
          Все статьи
        </li>

        {categories.map((category, index) => (
          <li
            key={category}
            className={activeCategory === index ? style.active : ''}
            onClick={() => onClickCategory(index)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
