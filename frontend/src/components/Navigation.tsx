import React from 'react';
import Button from './Button';
import style from '../styles/navigation.module.css';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

const Navigation: React.FC = () => {
  const { setActivePage } = useActions();
  const location = useLocation();
  React.useEffect(() => {
    setActivePage(location.pathname as ActivePage);
  }, [location]);

  return (
    <div className={style.nav}>
      <NavLink to='/'>
        <div className={style.logo}>
          <img width='140' src={logo} alt='Documentation logo' />
          <p>Документация</p>
        </div>
      </NavLink>

      <NavLink to='/articles'>
        <Button isActive={location.pathname.includes('/articles')}>
          Инструкции
        </Button>
      </NavLink>

      <NavLink to='/reglaments'>
        <Button isActive={location.pathname.includes('/reglaments')}>
          Регламенты
        </Button>
      </NavLink>

      <NavLink to='/knowledgeBase'>
        <Button isActive={location.pathname.includes('/knowledgeBase')}>
          База знаний
        </Button>
      </NavLink>

      <div className={style.tools}>
        <p className={style.activeTool}>RU</p>
        <p>EN</p>
        <img width='20' src={menu} alt='menu icon' />
      </div>
    </div>
  );
};

export default Navigation;
