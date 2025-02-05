import './creation_&_edition_menu.css';
import { useNavigate } from 'react-router-dom';
import SurveyItem from './survey_item'; // Importa el nuevo componente
import { useState } from 'react';

function CreateSurvey() {
  const navigate = useNavigate();

  // Estado para la lista de items
  const [items, setItems] = useState([]);

  // Función para agregar un nuevo item a la lista
  const handleAddItem = () => {
    setItems([
      ...items,
      { 
        id: items.length + 1, 
        title: '', 
        options: [{ text: '' }] // Un item con una opción vacía
      }
    ]);
  };

  // Función para manejar cambios en el título del item
  const handleInputChange = (id, value, field) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  // Función para agregar una nueva opción al item
  const handleAddOption = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, options: [...item.options, { text: '' }] } : item
    ));
  };

  // Función para manejar cambios en el input de cada opción
  const handleOptionChange = (id, index, value) => {
    setItems(items.map(item =>
      item.id === id
        ? {
            ...item,
            options: item.options.map((option, i) =>
              i === index ? { ...option, text: value } : option
            ),
          }
        : item
    ));
  };

  // Función para eliminar un item
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id)); // Filtra el item con el id dado
  };

  return (
    <>
      <section className="box__father">
        <div className="box-white">
          <input
            type="text"
            className="edit__survey__name"
            placeholder="New Survey"
          />
          
          <div className="main">
            <div className="items__and__buttons">
              <button
                onClick={handleAddItem}
                className="create__new"
                title="Crear un nuevo item"
              >
                New item +
              </button>

              <ol className="created__surveys">
                {items.map((item) => (
                  <li key={item.id} className="survey-item">
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleInputChange(item.id, e.target.value, 'title')}
                      placeholder="Enter title"
                      className="input__title"
                    />
                    {item.options.map((option, index) => (
                      <input
                        key={index}
                        type="text"
                        value={option.text}
                        onChange={(e) => handleOptionChange(item.id, index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        className="input__option"
                      />
                    ))}
                    <button
                      className="add-option"
                      onClick={() => handleAddOption(item.id)}
                    >
                      Add Option
                    </button>
                    <button
                      className="quit-item"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ol>

              <div className="set__time">
                {/* El resto del contenido */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateSurvey;
