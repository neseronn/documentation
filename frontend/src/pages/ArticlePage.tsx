import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import style from '../styles/article-page.module.css';
import Tag from '../components/Tag';
import LeftNav from '../components/LeftNav';

const ArticlePage: FC = () => {
  const { id } = useParams<string>();
  const { fetchArticleById } = useActions();
  const { selectedArticle, isLoading, error } = useTypedSelector(
    (store) => store.articles
  );

  const [activeSection, setActiveSection] = useState('section' + 0);

  useEffect(() => {
    fetchArticleById(id);
  }, [id]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    console.log(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ block: 'center' });
      setActiveSection(sectionId);
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('[data-section]');
    let currentSection = '';
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.6) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  };

  return (
    <>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : error ? (
        <div>{error}</div>
      ) : selectedArticle ? (
        <>
          <div className='top'>
            <h1>{selectedArticle.title}</h1>
            <p className={style.description}>{selectedArticle.decription}</p>
            <div className={style.bottom}>
              <div className={style.tags} style={{ marginRight: 70 + 'px' }}>
                {selectedArticle.tags &&
                  selectedArticle.tags.map((tag) => (
                    <Tag
                      key={tag}
                      tagName={tag}
                      isBtn={false}
                      isActive={false}
                    />
                  ))}
              </div>
              <div className={style.right_bottom}>
                <p>{selectedArticle.create_data}</p>
                <p className={style.read}>
                  время прочтения: {selectedArticle.read_time}
                </p>
                <p className={style.likes}>{selectedArticle.likes}</p>
                <p className={style.views}>{selectedArticle.views}</p>
              </div>
            </div>
          </div>

          <div className='block'>
            <div className='left'>
              <LeftNav
                items={selectedArticle.content.map((obj) => ({
                  id: obj.id,
                  content_title: obj.content_title,
                }))}
                activeItem={activeSection}
                onClickItem={handleNavigateToSection}
              />
            </div>

            <div className='right'>
              <div className='articles-list'>
                {selectedArticle &&
                  selectedArticle.content.map((content) => (
                    <div
                      key={content.id}
                      id={'section' + content.id}
                      data-section>
                      <h2 className={style.content_title}>
                        {content.content_title}
                      </h2>
                      <p className={style.content_description}>
                        {content.content_text}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Статья не найдена</p>
      )}
    </>
  );
};

export default ArticlePage;
