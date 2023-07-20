import { useDispatch } from 'react-redux';
import '../styles/instructions.module.css';
import ArticleItem from '../components/ArticleItem';
import Categories from '../components/Categories';
import { fetchArticles } from '../store/articlesSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../store/store';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Tags from '../components/Tags';

const Instructions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, error, isLoading } = useTypedSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

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
