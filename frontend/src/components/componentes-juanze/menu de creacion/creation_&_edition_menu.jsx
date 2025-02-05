import './creation_&_edition_menu.css';
import { useNavigate } from 'react-router-dom';
import SurveyItem from './survey_item';
import { useState } from 'react';

function CreateSurvey() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [visibility, setVisibility] = useState([]); // Estado para la visibilidad
  const [timeLimit, setTimeLimit] = useState(0); // Estado para el tiempo límite

  // Agregar nueva pregunta
  const handleAddItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, title: '', options: [] }
    ]);
  };

  // Manejar cambios en preguntas u opciones
  const handleInputChange = (id, values) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, title: values[0], options: values.slice(1).map(text => ({ text })) }
        : item
    ));
  };

  // Eliminar una pregunta
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Manejar cambio de visibilidad
  const handleVisibilityChange = (option) => {
    setVisibility(prev =>
      prev.includes(option) ? prev.filter(v => v !== option) : [...prev, option]
    );
  };

  return (
    <>
      <section className="box__father">
        <div className="box-white">
          {/* Nombre de la encuesta */}
          <input
            type="text"
            className="edit__survey__name"
            placeholder="New Survey"
          />

          <div className="main">
            <div className="items__and__buttons">
              {/* Botón para agregar una nueva pregunta */}
              <button onClick={handleAddItem} className="create__new" title="Crear un nuevo item">
                New item +
              </button>

              {/* Lista de preguntas creadas */}
              <ol className="created__surveys">
                {items.map((item) => (
                  <SurveyItem
                    key={item.id}
                    item={item}
                    onInputChange={handleInputChange}
                    onRemoveItem={handleRemoveItem}
                  />
                ))}
              </ol>

              {/* Configuración de tiempo */}
              <div className="set__time">
                <svg className="watch" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 18V24L27 27M33.02 34.7L32.32 42.36C32.2299 43.3573 31.769 44.2845 31.0284 44.9584C30.2878 45.6324 29.3213 46.004 28.32 46H19.66C18.6587 46.004 17.6922 45.6324 16.9516 44.9584C16.211 44.2845 15.7501 43.3573 15.66 42.36L14.96 34.7M14.98 13.3L15.68 5.63997C15.7698 4.64613 16.2279 3.72174 16.9642 3.04828C17.7006 2.37481 18.6621 2.00091 19.66 1.99997H28.36C29.3613 1.99591 30.3278 2.36757 31.0684 3.04152C31.809 3.71547 32.2699 4.64268 32.36 5.63997L33.06 13.3M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 9.99997 24 9.99997C31.732 9.99997 38 16.268 38 24Z"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="p__time">set time</p>
                <input
                  type="number"
                  min="0"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(e.target.value)}
                  placeholder="0 = Sin límite"
                />
              </div>
            </div>

            <div className="separador"></div>

            {/* Configuración de visibilidad */}
            <div className="visibilidad">
              <h2 className="title__vi">Visibilidad</h2>
              <p className="visi__p">¿Quién puede ver esta encuesta?</p>
              <div className="h1__and__checkbox">
                <ol className="visibilidad__list">
                  <li className="visibilidad__item">
                    Todos
                    <input
                      type="checkbox"
                      checked={visibility.includes("Todos")}
                      onChange={() => handleVisibilityChange("Todos")}
                    />
                  </li>
                  <li className="visibilidad__item">
                    URL
                    <input
                      type="checkbox"
                      checked={visibility.includes("URL")}
                      onChange={() => handleVisibilityChange("URL")}
                    />
                  </li>
                  <li className="visibilidad__item">
                    Gmail
                    <input
                      type="checkbox"
                      checked={visibility.includes("Gmail")}
                      onChange={() => handleVisibilityChange("Gmail")}
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <button className='todo__listo'>Todo Listo</button>
        </div>
      </section>
    </>
  );
}

export default CreateSurvey;
