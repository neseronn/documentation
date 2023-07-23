import { actions } from '../store/filtersSlice';
import { fetchArticles, fetchArticleById } from '../store/articlesSlice';

import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch } from '../store/store';

const rootActions = {
  ...actions,
  fetchArticles,
  fetchArticleById,
};

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
