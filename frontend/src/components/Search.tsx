import React, { useState } from 'react';
import style from '../styles/search.module.css';

interface ISearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Search: React.FC<ISearchProps> = ({ onChange, search }) => {
  const [icon, changeIcon] = useState(style.gray_icon);
  return (
    <div className={style.search}>
      <div className={style.icon + ' ' + icon}></div>
      <input
        placeholder='Поиск'
        className={style.input}
        type='text'
        id='search'
        value={search}
        onFocus={() => changeIcon(style.blue_icon)}
        onBlur={() => changeIcon(style.gray_icon)}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Search;
