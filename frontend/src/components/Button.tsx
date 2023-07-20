import style from '../styles/button.module.css';

interface IButtonProps {
  onClick: () => {};
  children: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
