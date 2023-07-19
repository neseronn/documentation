import { FC } from 'react';
import style from '../styles/tag.module.css'

interface ITagProps {
  tagName: string;
}

const Tag: FC<ITagProps> = ({ tagName }) => {
  return <div className={style.tag}>{tagName}</div>;
};

export default Tag;
