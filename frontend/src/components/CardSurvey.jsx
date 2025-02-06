import React, { useState } from 'react';
import icon from "../assets/icon.png";
import "./welcome.css";

import './componentes-juanze/menu de creacion/encuesta-activa/encuesta.css'
const CardSurvey = ( { number} ) => {
 
    return (
            <div className="survey-container">

<section className='box__father'>

<div className='white__box '>
  <h1>Ejemplo de encuesta</h1>
  <div className='items__and__buttons' >
  <ol className='created__surveys'>
        <li className='item__survey'> 
          coca cola           
         
        </li>
        <li className='item__survey'>
          coca cola que se yo cualquier cosa
           
        </li>
        
        <li className='item__survey'>
          coca cola
         
        </li>        
      </ol>
    </div>
    <p>tiempo restante 2d 13H</p>

</div>

</section> 
           
        </div>
    )
}

export default CardSurvey;