import { FC } from 'react';
import Tag from './Tag';
import style from '../styles/article-item.module.css';

interface IArticleItemProps {
  article: IArticle;
}

const ArticleItem: FC<IArticleItemProps> = ({ article }: IArticleItemProps) => {
  return (
    <div className={style.articleItem}>
      <h3 className={style.title}>{article.title}</h3>
      <p className={style.description}>{article.decription}</p>
      <div className={style.bottom}>
        <div className={style.tags}>
          {article.tags &&
            article.tags.map((tag) => <Tag key={tag} tagName={tag} />)}
        </div>
        <p>{article.likes}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
