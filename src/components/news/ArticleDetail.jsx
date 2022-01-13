import useAxios from 'axios-hooks';

function ArticleDetail({ articleId }) {
  const [{ data: article, loading, error }] = useAxios(
    `http://127.0.0.1:8000/news/api/news/?format=api/${articleId}/`,
  );
  return (
    <dir>
      {loading && '로딩 중 ...'}
      {error && '에러가 밸생했습니다'}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
          <div>{article.content.split(/[\r\n]+/).map(line)=>(
            <p key={index}>{line}</p>
          )}</div>
        </>
      )}
      <hr className="my-3" />
      <dir className = "fles gap-4 mt-3 mb-10">
      <Link tp="/news/">목록으로</Link>
      <Link to={`/news/${articleId}/edit/`}></Link>
      </dir>
      
    </dir>
  );
}

export default ArticleDetail;
