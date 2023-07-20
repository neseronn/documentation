import Tag from './Tag';

const tags = ['CMS', 'Bitrix', 'Диагностика', 'DNS', 'FTP', 'Crontab'];

const Tags: React.FC = () => {
  return (
    <div>
      <h3>Тэги:</h3>
      <div className='tag-list'>
        {tags.map((tag) => (
          <Tag key={tag} tagName={tag} isBtn={true}/>
        ))}
      </div>
    </div>
  );
};

export default Tags;
