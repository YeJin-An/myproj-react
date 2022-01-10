// fieldValues: 현재의 필드 값 내역
// handleFieldChange : 각 필드 값이 변화 시에 호출
// handlesubmit : 인자 없는 함수. submit 시에 호출.

function ReviewForm({ fieldValues, handleFieldChange, handleSubmit loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요');
    }
  };

  return (
    <div>
      <div>
        div:
        <select
          name="score"
          value={fieldValues.score}
          onChange={handleFieldChange}
          className="bg-gray-100 border-gray-400"
          disabled = {loading}
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div>
        content
        <textarea
          name="content"
          value={fieldValues.content}
          onChange={handleFieldChange}
          classname="bg-gray-100 border border-gray-400"
          disabled= {loading}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-100 cursor-pointer"
          onClick={() => handleSubmit && handleSubmit()}
          disabled={loading}
        >{loading && '로딩 아이콘'}</button>
      </div>
    </div>
  );
}
export default ReviewForm;
