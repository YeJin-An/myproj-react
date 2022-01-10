import Axios from 'axios';
import {useEffect} from 'react'

function ReviewList() {
  useEffect(()=>{
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://localhost:8000/shop/api/reviews/';
    Axios.get(url)
    .then(((response)=>{
      console.group('정상 응답');
      console.log(response);
      console.groupEnd();
    })
    .catch(((error)=>{
      console.group("에러 응답");
      console.log(error);
      console.groupEnd();
    })
  };
  return (
    <>
      <h2>Review List</h2>
    </>
  );
}

export default ReviewList;
