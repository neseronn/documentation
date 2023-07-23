type ActivePage = '/' | '/articles' | '/reglaments' | '/knowledgeBase';

interface NavigationState {
  activePage: ActivePage;
}
