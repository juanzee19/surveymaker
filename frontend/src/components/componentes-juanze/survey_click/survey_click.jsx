import React from 'react';
import '../survey_click/survey_click.css';

const SurveyClick = ({ title, questions, tiempo, onClose }) => {
    return (
        <>
            <section className='box_survey'>
                <div className='white__box__survey'>
                    <h1>{title}</h1>
                    <div className='items__and__buttons_survey'>
                        <ol className='created__surveys_1'>
                            {questions.length > 0 ? (
                                questions.map((q, index) => (
                                    <li key={index} className='item__survey_1'>{q.title}</li>
                                ))
                            ) : (
                                <li className='item__survey_1'>No hay preguntas</li>
                            )}
                        </ol>
                    </div>
                    <p>{tiempo}</p>
                    <button onClick={onClose} className="btn-menu">Volver</button>
                </div>
            </section> 
        </>
    );
};

export default SurveyClick;
