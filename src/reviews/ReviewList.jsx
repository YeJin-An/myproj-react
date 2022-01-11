import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Review from 'components/Review';
import DebugStates from 'DebugStates'
import {axiosInstance} from 'api/base'

function ReviewList() {
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const[reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    refetch();
  }, []);
  
  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `/shop/api/reviews/`;
    axiosInstance.get(url)
    .then((({data})=>{
      setReviewList(data);
    })
    .catch(((error)=>{
      console.log(error);
      setError(error)
    })
    .finally(()=>{
      setLoading(false);
    });
  };

  const deleteReview = (deletingReview) => {
    const { id: deletingReviewId } = deletingReview;
    const url = `/shop/api/reviews/${deletingReviewId}/`;

    setLoading(true);
    setError(null);

    axiosInstance.delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 선택지 #1) 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) =>
          prevReviewList.filter((review) => review.id !== deletingReviewId),
        );
        // 선택지 #2) 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      
      <h2>Review List</h2>
      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}
      <button onClick{()=>refetch()} className="bg-yellow-400 hover:bg-red-400 mr-1">새로고침</button>
      <button
        onClick={() => navigate('/reviews/new/')}
        className="bg-blue-400 hover:bg-slate-400"
      >
        새 리뷰
      </button>
      <div className="">
        {reviewList.map((review) => (
        <Review
        key={review.id}
        review={review}
        handleEdit={() => navigate(`/reviews/${review.id}/edit/`)}
        handleDelete={() => deleteReview(review)}
      />
        ))}
      </div>
      <hr />
      <DebugStates loading={loading} error={error} reviewLsit={reviewList}/>
      <pre>{JSON.stringify(reviewList, null, 2)}</pre>
      
    </>
  );
}

export default ReviewList;
