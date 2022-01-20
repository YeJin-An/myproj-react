import useAxios from 'axios-hooks';

function ArticleDetail({ articleId }) {
  const [{ data: article, loading, error }] = useAxios(
    `http://127.0.0.1:8000/news/api/news/?format=api/${articleId}/`,
  );

  const [{loading:deleteLoading, error:deleteError},deleteArticle] = useApiAxios({
    url: `news/api/news/?format=api/${articleId}/`,
    method: "DELETE",
  },{manual:true})

  const handleDelete = () => {
    if(window.confirm("Are you sure?")){
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteArticle().then()
    }
  };

  return (
    <div>
      {loading && <LoadingIndicator/>}
      {seleteLoading && <LoadingIndicator>삭제중 ...</LoadingIndicator>}
      {error && '에러가 밸생했습니다'}
      {seleteError && '삭제 요청 중 에러가 발생했습니다. (${deleteError.response.statusText}})}
      {article && (
        <div>
          <h3 className="text-2xl my-5">{article.title}</h3>
          <div>{article.content.split(/[\r\n]+/).map(line)=>(
            <p key={index}>{line}</p>
          )}</div>
        </div>
      )}
      <hr className="my-3" />
      <div className = "fles gap-4 mt-3 mb-10">
      <Link tp="/news/">목록으로</Link>
      <Link to={`/news/${articleId}/edit/`}>수정하기</Link>
      <button disabled={deleteLoading}
        onClick={haneldDelete}
        className="hover:text-red-400>삭제하기</button>
      </div>
    </div>
  );
}



export default ArticleDetail;
