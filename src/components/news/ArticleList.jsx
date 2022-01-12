import useAxios from 'axios-hooks';
import DebugStates from 'componetns/DebugStates';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:8000/news/api/news/?format=api',
  );
  return (
    <>
      <h3> 뉴스 기사 목록을 보여줄 것입니다.</h3>
      {loading && '로딩중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article) => <ArticleSummary article={article} />)}
      <DebugStates articleLsit={articleList} loading={loading} error={error} />
    </>
  );
}

export default ArticleList;
