import { FC } from 'react';
import style from '../styles/tag.module.css';

interface ITagProps {
  tagName: string;
  isBtn: boolean;
  isActive: boolean;
  onClickTag?: (tag: string) => void | undefined;
}

const Tag: FC<ITagProps> = ({
  tagName,
  isBtn,
  isActive,
  onClickTag,
}) => {
  const classNames = [style.tag];
  if (isBtn) {
    classNames.push('tag-btn');
    if (isActive) classNames.push(style.active);
  }
  return (
    <div
      className={classNames.join(' ')}
      onClick={() => onClickTag && onClickTag(tagName)}>
      {tagName}
    </div>
  );
};

export default Tag;
