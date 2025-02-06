import React, { useState } from 'react';
import "./welcome.css";
import './componentes-juanze/menu de creacion/encuesta-activa/encuesta.css';

const CardSurvey = ( { title, ques1, ques2, ques3, tiempo } ) => {

    return (
        <div className="survey-container">
          <section className='box__father'>
            <div className='white__box '>
              <h1>{title}</h1>
              <div className='items__and__buttons' >
                <ol className='created__surveys'>
                  <li className='item__survey'>{ques1}</li>
                  <li className='item__survey'>{ques2}</li>
                  <li className='item__survey'>{ques3}</li>        
                </ol>
              </div>
                <p>Tiempo restante: {tiempo}</p>
            </div>
          </section> 
        </div>
    )
}

export default CardSurvey;