import './App.css';
import ArticleItem from './components/ArticleItem';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div className='filters'>
        <Categories />
      </div>

      <div className='content'>
        <div className='articles-list'>
          <h1>Нуждаются в популяризации</h1>
          <ArticleItem tags={['CMS', 'Диагностика', 'DNS']} />
          <ArticleItem tags={['CMS', 'Диагностика', 'DNS']} />
        </div>
      </div>
    </>
  );
}

export default App;
