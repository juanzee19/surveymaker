
import React from 'react';

function SurveyItem({ item, onInputChange, onRemoveItem }) {
  const handleChange = (event) => {
    onInputChange(item.id, event.target.value);
  };

  return (
    <li className="survey-item">
      <input
        type="text"
        value={item.text}
        onChange={handleChange}
        placeholder="Enter item text"
        className='input__li'
      />
      <button
        className="quit-item"
        onClick={() => onRemoveItem(item.id)}  // Llama a la función de eliminación
      >
        x
      </button>
    </li>
  );
}

export default SurveyItem;