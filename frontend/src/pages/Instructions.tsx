import ArticleItem from '../components/ArticleItem';
import Categories from '../components/Categories';
import { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Tags from '../components/Tags';
import { useActions } from '../hooks/useActions';

const Instructions: React.FC = () => {
  const { articles, error, isLoading } = useTypedSelector(
    (state) => state.articles
  );

  const { fetchArticles } = useActions();

  useEffect(() => {
    fetchArticles();
    console.log('get articles');
  }, []);

  return (
    <>
      <div className='left'>
        <Categories />
        <Tags />
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
