import './creation_&_edition_menu.css';
import { useNavigate } from 'react-router-dom';
import SurveyItem from './survey_item';  // Importa el nuevo componente
import { useState } from 'react'; 


function CreateSurvey() {
  const navigate = useNavigate();

   // Estado para la lista de items
   const [items, setItems] = useState([]);
  
   // Función para agregar un nuevo item a la lista
   const handleAddItem = () => {
     setItems([
       ...items,
       { id: items.length + 1, text: '' } // Agrega un nuevo item vacío
     ]);
   };
 
   // Función para manejar cambios en el input de cada item
   const handleInputChange = (id, value) => {
     setItems(items.map(item =>
       item.id === id ? { ...item, text: value } : item
     ));
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
                  <SurveyItem
                    key={item.id}
                    item={item}
                    onInputChange={handleInputChange} // Pasa la función como prop
                  />
                ))}
              </ol>
              
              <div className="set__time">
                <svg
                  className="watch"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 18V24L27 27M33.02 34.7L32.32 42.36C32.2299 43.3573 31.769 44.2845 31.0284 44.9584C30.2878 45.6324 29.3213 46.004 28.32 46H19.66C18.6587 46.004 17.6922 45.6324 16.9516 44.9584C16.211 44.2845 15.7501 43.3573 15.66 42.36L14.96 34.7M14.98 13.3L15.68 5.63997C15.7698 4.64613 16.2279 3.72174 16.9642 3.04828C17.7006 2.37481 18.6621 2.00091 19.66 1.99997H28.36C29.3613 1.99591 30.3278 2.36757 31.0684 3.04152C31.809 3.71547 32.2699 4.64268 32.36 5.63997L33.06 13.3M38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 9.99997 24 9.99997C31.732 9.99997 38 16.268 38 24Z"
                    stroke="#1E1E1E"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="p__time">set time</p>
                <svg
                  className="flecha"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <div className="separador"></div>
            <div className="visibilidad">
              <h2 className="title__vi">Visibilidad</h2>
              <p className="visi__p">Quien puede ver esta encuesta?</p>
              <div className="h1__and__checkbox">
                <ol className="visibilidad__list">
                  <li className="visibilidad__item">
                    Todos
                    <input type="checkbox" />
                  </li>
                  <li className="visibilidad__item">
                    Url
                    <input type="checkbox" />
                  </li>
                  <li className="visibilidad__item">
                    Gmail
                    <input type="checkbox" />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateSurvey;