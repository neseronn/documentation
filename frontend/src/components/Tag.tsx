import { FC } from 'react';
import style from '../styles/tag.module.css';

interface ITagProps {
  tagName: string;
  isBtn?: boolean;
}

const Tag: FC<ITagProps> = ({ tagName, isBtn = false }) => {
  return <div className={style.tag + (isBtn ? ' tag-btn' : '')}>{tagName}</div>;
};

export default Tag;
