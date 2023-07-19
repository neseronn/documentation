import { FC } from 'react';
import Tag from './Tag';
import style from '../styles/article-item.module.css'

interface IArticleItem {
  tags: string[];
}

const ArticleItem: FC<IArticleItem> = ({ tags }) => {
  return (
    <div className={style.articleItem}>
      <h3 className={style.title}>Волшебный файл .htaccess</h3>
      <p className={style.description}>.htaccess — файл дополнительной конфигурации веб-сервера Apache, а также подобных ему серверов. Позволяет задавать большое количество дополнительных параметров и разрешений для работы веб-сервера у отдельных пользователей.</p>
      <div className={style.bottom}>
        <div className={style.tags}>{tags && tags.map((tag) => <Tag key={tag} tagName={tag} />)}</div>
        <p>89523</p>
      </div>
    </div>
  );
};

export default ArticleItem;
