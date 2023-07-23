interface IFiltersState {
  category: null | number;
  tags: string[];
  searchQuery: string;
  sort: string;
}

interface ISort {
  name: string;
  type: 'create_data' | 'views' | 'likes';
}
