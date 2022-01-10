import Axios from 'axios';
import {useEffect} from 'react'
import DebugStates from 'DebugStates'

function ReviewList() {
  const[loading, setLoading] = useState(false);
  const[error, setError] = usestate(null);
  const[reviewList, setReviewList] = useState([]);

  useEffect(()=>{
    refetch();
  }, []);
  
  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://localhost:8000/shop/api/reviews/';
    Axios.get(url)
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
  return (
    <>
      <h2>Review List</h2>
      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}
      <button onClick{()=>refetch()} 
      className="bg-yellow-400 hover:bg-red-400">새로고침</button>
      <hr />
      <DebugStates loading={loading} error={error} reviewLsit={reviewList}/>
      <pre>{JSON.stringify(reviewList, null, 2)}</pre>
      
    </>
  );
}

export default ReviewList;
