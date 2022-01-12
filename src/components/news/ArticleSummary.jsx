function ArticleSummary({ article }) {
  return (
    <>
      <div>
        요약:
        <Link>{article.title}</Link>
      </div>
    </>
  );
}

export default ArticleSummary;
