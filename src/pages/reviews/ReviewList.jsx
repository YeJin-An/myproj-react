import Axios from 'axios';
import DebugStated from 'pages/components/DebugStates';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
  setLoading(true);
  setError(null);

    const url = 'http://127.0.0.1:8000/shop/review/';
    // Promise 객체
    Axios.get(url)
      .then({data}) => {
        setReviewList(data);
      })
      .catch((error) => {
       
        console.error(error);
      
      }).finally(()=> {
        setLoading(false);
      })

      const deleteReview = (deletingReview)=> {
        console.log('Deleting', deletingReview);
      };
  return (
    <>
      <h2>Review List</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>동신 중에 오류가 발생했습니다.</div>}

      <button onClick={()=>{}}></button>

      <button onClick={()=> refetch()}classNAme="bg-yellow-400 hover:bg-red-600"></button>
      
      {reviewList.map(review => <Review review={review} />)}
      <hr />
      {JSON.stringify(reviewList, null, 2)}
      <DebugStates loading={loading} error={error} reviewList={reviewList}/>
    </>
  );
}

export default PageReviewList;
