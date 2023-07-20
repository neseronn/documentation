import Button from './Button';
import style from '../styles/navigation.module.css';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';


const Navigation = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <img width='140' src={logo} alt='Documentation logo' />
        <p>Документация</p>
      </div>
      <Button children='Инструкции' onClick={() => console.log('Инструкции')} />
      <Button children='Регламенты' onClick={() => console.log('Регламенты')} />
      <Button
        children='База знаний'
        onClick={() => console.log('База знаний')}
      />
      <div className={style.tools}>
        <p className={style.activeTool}>RU</p>
        <p>EN</p>
        <img width='20' src={menu} alt='menu icon' />
      </div>
    </div>
  );
};

export default Navigation;
