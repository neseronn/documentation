import ArticleItem from '../components/ArticleItem';
import Categories from '../components/Categories';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Tags from '../components/Tags';
import { useActions } from '../hooks/useActions';

const categoryNames = [
  'FTP',
  'SSH',
  'Веб-приложения',
  'Сервисы',
  'Сайты',
  'VPS',
  'Домены',
  'Другое',
  'Почта',
  'Диагностика проблем',
];

const tagNames = ['CMS', 'Bitrix', 'Диагностика', 'DNS', 'FTP', 'Crontab'];

const Instructions: React.FC = () => {
  const { articles, error, isLoading } = useTypedSelector(
    (state) => state.articles
  );
  const { category, tags } = useTypedSelector((state) => state.filters);

  const { fetchArticles, setCategory, toggleTag } = useActions();

  useEffect(() => {
    fetchArticles(category);
    console.log('get articles');
  }, [category, tags]);

  const onSelectCategory = React.useCallback((i: number | null) => {
    setCategory(i);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTagClick = React.useCallback((tag: string) => {
    toggleTag(tag);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className='left'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          categories={categoryNames}
        />
        <Tags tags={tagNames} onClickTag={handleTagClick} activeTags={tags} />
      </div>

      <div className='right'>
        <div className='articles-list'>
          <h1>Нуждаются в популяризации</h1>

          {isLoading ? (
            <div>LOADING...</div>
          ) : error ? (
            <div>{error}</div>
          ) : articles ? (
            articles.map((article) => (
              <ArticleItem article={article} key={article.id} />
            ))
          ) : (
            <p>Статьи не найдены</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Instructions;
