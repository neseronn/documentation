import ArticleItem from '../components/ArticleItem';
import Categories from '../components/Categories';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Tags from '../components/Tags';
import { useActions } from '../hooks/useActions';
import Search from '../components/Search';
import SortPopup from './../components/SortPopup';

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

const sorts: ISort[] = [
  { name: 'По дате публикации', type: 'create_data' },
  { name: 'По количеству просмотров', type: 'views' },
  { name: 'По количеству добавлений', type: 'likes' },
];

const Instructions: React.FC = () => {
  const { articles, error, isLoading } = useTypedSelector(
    (state) => state.articles
  );
  const { category, tags, searchQuery, sort } = useTypedSelector(
    (state) => state.filters
  );

  const { fetchArticles, setCategory, toggleTag, setSearchQuery, setSort } =
    useActions();

  useEffect(() => {
    fetchArticles({ category, tags, search: searchQuery, sort });
    console.log('get articles');
  }, [category, tags, searchQuery, sort]);

  const onSelectCategory = React.useCallback((i: number | null) => {
    setCategory(i);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTagClick = React.useCallback((tag: string) => {
    toggleTag(tag);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSelectSort = React.useCallback((sort: string) => {
    setSort(sort);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className='block searching'>
        <Search onChange={handleSearchChange} search={searchQuery} />
        <SortPopup sorts={sorts} activeSort={sort} onClickSort={onSelectSort} />
      </div>
      <div className='block'>
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
      </div>
    </>
  );
};

export default Instructions;
