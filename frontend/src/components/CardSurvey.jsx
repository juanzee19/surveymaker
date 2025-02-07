import React from "react";
import "./welcome.css";

const CardSurvey = ({ title, questions, tiempo }) => {
    return (
        <div className="survey-container">
            <section className="box__father">
                <div className="white__box">
                    <h1>{title}</h1>
                    <div className="items__and__buttons">
                        <ul className="created__surveys">
                            {questions.length > 0 ? (
                                questions.map((q, index) => (
                                    <li key={index} className="item__survey">{q.title}</li>
                                ))
                            ) : (
                                <li className="item__survey">No hay preguntas</li>
                            )}
                        </ul>
                    </div>
                    <p>Tiempo restante: {tiempo}</p>
                </div>
            </section>
        </div>
    );
};

export default CardSurvey;
