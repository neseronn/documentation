import style from '../styles/button.module.css';

interface IButtonProps {
  onClick?: () => void;
  children: string;
  isActive: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, isActive }) => {
  return (
    <button
      className={style.button + ' ' + (isActive ? `${style.active}` : '')}>
      {children}
    </button>
  );
};

export default Button;
