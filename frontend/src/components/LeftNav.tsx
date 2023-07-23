import React, { FC } from 'react';
import style from '../styles/left-nav.module.css';

type NavItems = {
  id: number;
  content_title: string;
};

interface INavProps {
  activeItem: string | null;
  onClickItem: (sectionId: string) => void;
  items: NavItems[];
}

const LeftNav: FC<INavProps> = React.memo(function Categories({
  activeItem,
  onClickItem,
  items,
}) {
  return (
    <div className={style.list}>
      <h3>Содержание:</h3>
      <ul>
        {items.map((el) => (
          <li
            key={el.id}
            className={
              style.li +
              ' ' +
              (activeItem === 'section' + el.id ? style.active : '')
            }
            onClick={() => onClickItem('section' + el.id)}>
            {el.content_title}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default LeftNav;
