import React from 'react';
import style from '../styles/search.module.css';

interface ISearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Search: React.FC<ISearchProps> = ({ onChange, search }) => {
  return (
    <div className={style.search}>
      {/* <div className={style.icon}></div> */}
      {/* <input type="email" placeholder="email" id="email" required><label for="email" data-fon="✉" data-text="email">&nbsp;</label> */}
      <input
        placeholder='Поиск'
        className={style.input}
        type='text'
        id="search"
        value={search}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Search;
