import { useState } from 'react';

function useFieldValues(initialValues) {
  const [fieldValues, setfieldValues] = useState(initialValues);

  const handleFieldChange = (e) => {
    const { name, values } = e.target;
    setfieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: values,
      };
    });
  };
  const clearFieldValues = () => {
    setfieldValues(initialValues);
  };

  return {
    fieldValues,
    handleFieldChange,
    clearFieldValues,
    setfieldValues,
  };
}

export default useFieldValues;
