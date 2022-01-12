import { useParams } from 'react-router-dom';

function PageNewsArticleDetail() {
  const { articleId } = useParams();

  return (
    <div>
      <h2> 뉴스기사{articleId} 부여주기</h2>
      <ArticleDetail articleId={articleId} />

      <h3>비슷한 기사 목록</h3>

      <h3>당신이 관심있을 만한 기사</h3>
    </div>
  );
}

export default PageNewsArticleDetail;
