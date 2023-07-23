import React from 'react';
import style from '../styles/sort-popup.module.css';

interface ISortProps {
  activeSort: string;
  onClickSort: (sortType: string) => void;
  sorts: ISort[];
}

const SortPopup: React.FC<ISortProps> = React.memo(function SortPopup({
  activeSort,
  onClickSort,
  sorts,
}) {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onSelectSort = (sortType: string) => {
    if (onClickSort) {
      onClickSort(sortType);
    }
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={style.sort}>
      <div
        onClick={() => setOpen(!open)}
        className={style.icon + ' ' + (open ? style.focus : '')}>
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M17.5 32.8125C13.4389 32.8125 9.54408 31.1992 6.67243 28.3276C3.80078 25.4559 2.1875 21.5611 2.1875 17.5C2.1875 13.4389 3.80078 9.54408 6.67243 6.67243C9.54408 3.80078 13.4389 2.1875 17.5 2.1875C21.5611 2.1875 25.4559 3.80078 28.3276 6.67243C31.1992 9.54408 32.8125 13.4389 32.8125 17.5C32.8125 21.5611 31.1992 25.4559 28.3276 28.3276C25.4559 31.1992 21.5611 32.8125 17.5 32.8125ZM17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 12.8587 33.1563 8.40752 29.8744 5.12563C26.5925 1.84374 22.1413 0 17.5 0C12.8587 0 8.40752 1.84374 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5C0 22.1413 1.84374 26.5925 5.12563 29.8744C8.40752 33.1563 12.8587 35 17.5 35Z'
            fill='#D2D2D2'
          />
          <path
            d='M15.3125 25.1562C15.3125 24.8662 15.4277 24.588 15.6329 24.3829C15.838 24.1777 16.1162 24.0625 16.4062 24.0625H18.5938C18.8838 24.0625 19.162 24.1777 19.3671 24.3829C19.5723 24.588 19.6875 24.8662 19.6875 25.1562C19.6875 25.4463 19.5723 25.7245 19.3671 25.9296C19.162 26.1348 18.8838 26.25 18.5938 26.25H16.4062C16.1162 26.25 15.838 26.1348 15.6329 25.9296C15.4277 25.7245 15.3125 25.4463 15.3125 25.1562ZM10.9375 18.5938C10.9375 18.3037 11.0527 18.0255 11.2579 17.8204C11.463 17.6152 11.7412 17.5 12.0312 17.5H22.9688C23.2588 17.5 23.537 17.6152 23.7421 17.8204C23.9473 18.0255 24.0625 18.3037 24.0625 18.5938C24.0625 18.8838 23.9473 19.162 23.7421 19.3671C23.537 19.5723 23.2588 19.6875 22.9688 19.6875H12.0312C11.7412 19.6875 11.463 19.5723 11.2579 19.3671C11.0527 19.162 10.9375 18.8838 10.9375 18.5938ZM6.5625 12.0312C6.5625 11.7412 6.67773 11.463 6.88285 11.2579C7.08797 11.0527 7.36617 10.9375 7.65625 10.9375H27.3438C27.6338 10.9375 27.912 11.0527 28.1171 11.2579C28.3223 11.463 28.4375 11.7412 28.4375 12.0312C28.4375 12.3213 28.3223 12.5995 28.1171 12.8046C27.912 13.0098 27.6338 13.125 27.3438 13.125H7.65625C7.36617 13.125 7.08797 13.0098 6.88285 12.8046C6.67773 12.5995 6.5625 12.3213 6.5625 12.0312Z'
            fill='#D2D2D2'
          />
        </svg>
      </div>
      {open && (
        <div className={style.sort_popup}>
          <ul>
            {sorts &&
              sorts.map((obj, index) => (
                <li
                  onClick={() => onSelectSort(obj.type)}
                  className={
                    style.li +
                    ' ' +
                    (activeSort === obj.type ? style.active : '')
                  }
                  key={index}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
