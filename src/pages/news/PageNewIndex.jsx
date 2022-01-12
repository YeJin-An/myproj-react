// 뉴스 서비스의 대문 페이지

import ArticleList from 'components/news/ArticleList';

function PageNewsIndex() {
  return (
    <>
      <h2>뉴스 페이지</h2>
      <ArticleList />

      <h2>뉴스 추천</h2>

      <h2>광고</h2>
    </>
  );
}

export default PageNewsIndex;
