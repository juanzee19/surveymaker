import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import CardSurvey from "./CardSurvey";
import axios from "axios";
import "./welcome.css";

const Welcome = () => {
    const navigate = useNavigate();
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios.post("https://surveymaker-53d73b4bd329.herokuapp.com/survey/list/private", {
            withQuestions: true,
            withOptions: true
        }, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
            console.log("Encuestas recibidas:", response.data); // 📌 Verifica qué datos llegan
            setSurveys(response.data);
        })
        .catch((error) => {
            console.error("Error al obtener encuestas:", error);
        });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="welcome-container">            
            <aside>
                <header>
                    <div>
                        <img className="avatar" src={avatar} alt="Avatar" />
                        <h2>Bienvenido/a,</h2>
                        <h3 className="user-name">{localStorage.getItem("userEmail")}</h3>
                    </div>
                </header>
                <nav>
                    <div className="menu">
                        <button onClick={() => navigate('/create-survey')} className="btn-menu">Crear nueva encuesta</button>
                        <button className="btn-menu">Encuestas activas</button>
                    </div>
                    <div className="cnt-btn-logout">
                        <button className="btn-menu btn-logout" onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                </nav>
            </aside>
            <main>
                <div className="cnt-survey">
                    {surveys.length > 0 ? (
                        surveys.map((survey) => (
                            <CardSurvey 
                                key={survey.id} 
                                title={survey.title} 
                                questions={survey.questions || []} // Enviar todas las preguntas
                                tiempo={survey.expiresAt ? `Expira en ${new Date(survey.expiresAt).toLocaleString()}` : "Sin límite"}
                            />
                        ))
                    ) : (
                        <p>No hay encuestas disponibles</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Welcome;
