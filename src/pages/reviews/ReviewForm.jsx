import useFieldValues from 'pages/components/hook/useFieldValues'ort { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect } from 'react';

// 함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재생성

function PageReviewForm() {
  // 상탯값 정의, 훅 호출
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { reviewId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues ,setFieldValues } = useFieldValues({
    score: 5,
    content: '',
  });

  useEffect(()=>{
    const url = `http://localhost:8000/shop.api.reviews/${reviewId}`;
    Axios
    .get(url.then(response => {
      setFieldValues(response.data);
    })
    .then((e)=> {setError(e)})
    .finally(()=>{setLoading(false);
    })
  }, [reviewId]);

  // 다양한 함수를 정의
  const saveReview = async () => {
    setLoading(true);
    setError(null);

    const url = !reviewId 
    ? 'http://localhost:8000/shop/api/reviews/' 
    : `http://localhost:8000/shop/api/reviews/${reviewId}`

    const url = 'http://localhost:8000/shop/api/reviews/';
    try {
      await Axios.post(url, fieldValues);
      navigate('/reviews/');
      console.groupEnd();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  // 표현 by jsx

  return (
    <div>
      <h2>
        ReviewForm
        {reviewId ? '수정' : '생성'}
      </h2>
      <ReviewForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={saveReview}
        loading = {loading}
      />
      <DebugStates reviewId={reviewId} fieldClaues={fieldValues} />
    </div>
  );
}

export default PageReviewForm;
