interface IArticle {
  id: number;
  title: string;
  decription: string;
  category: number;
  likes: number;
  create_data: string;
  tags: string[];
}

interface IArticleContent {
  id: number;
  content_title: string;
  content_text: string;
}

interface IArticleFull extends IArticle {
  read_time: string;
  views: number;
  content: IArticleContent[];
}
