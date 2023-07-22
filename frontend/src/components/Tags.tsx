import React from 'react';
import Tag from './Tag';

interface ITagsProps {
  tags: string[];
  activeTags: string[];
  onClickTag: (tag: string) => void;
}

const Tags: React.FC<ITagsProps> = React.memo(
  ({ tags, activeTags, onClickTag }) => {
    const isTagActive = (tag: string) => activeTags.includes(tag);

    return (
      <div>
        <h3>Тэги:</h3>
        <div className='tag-list'>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
              isBtn={true}
              isActive={isTagActive(tag)}
              onClickTag={onClickTag}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default Tags;
