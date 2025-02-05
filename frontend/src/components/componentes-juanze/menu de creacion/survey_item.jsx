// SurveyItem.js
import React from 'react';

function SurveyItem({ item, onInputChange }) {
  // Función para manejar los cambios en el input
  const handleInputChange = (e) => {
    onInputChange(item.id, e.target.value);
  };

  return (
    <li className="item__survey">
      <input
        className="input__li"
        type="text"
        value={item.text}
        onChange={handleInputChange}
      />
      <button className="quit__item">
        x
      </button>
    </li>
  );
}

export default SurveyItem;