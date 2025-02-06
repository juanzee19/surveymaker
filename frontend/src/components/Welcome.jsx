import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import CardSurvey from "./CardSurvey";
import axios from "axios";
import './welcome.css';

const Welcome = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        
        const userEmail = localStorage.getItem("userEmail"); // Verificar si hay un email en el localStorage
        const token = localStorage.getItem("token"); // Obtener el token

        if (!token) {
            navigate("/login"); // Si no hay token, redirigir al login
            return;
        }
        axios.get("https://surveymaker-53d73b4bd329.herokuapp.com/Test/Private", {
                headers: { Authorization: `Bearer ${token}` }, // Enviar el token
        })
        .then((response) => {
                setData(response.data); // Guardar la info
        })
        .catch((error) => {
                console.error("Error:", error);
        });
    }, [navigate]);
    // Obtener el correo almacenado
    const userEmail = localStorage.getItem("userEmail");
    console.log(data);

    const handleLogout = () => {
        localStorage.removeItem("token") // Eliminar el token
      navigate("/login"); // Redirigir al login
  };

    return (
        <div className="welcome-container">            
            <aside>
                <header>
                    <div>
                        <img className="avatar" src={avatar} alt="Avatar" />
                        <h2>Bienvenido/a,</h2>
                        <h3 className="user-name">{userEmail}</h3>
                    </div>
                </header>
                <nav>
                    <div className="menu">
                        <button onClick={()=> navigate('/create-survey')} className="btn-menu">Crear nueva encuesta</button>
                        <button className="btn-menu">Encuestas activas</button>
                    </div>
                    <div className="cnt-btn-logout">
                        <button className="btn-menu btn-logout" onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                </nav>
            </aside>
            <main>
                <div className="cnt-survey">
                    <CardSurvey 
                        title="Encuesta 1"
                        ques1="¿Cómo va tu dia?"
                        ques2="¿Qué te gustaria comer hoy?"
                        ques3="¿Te gusta jugar al LOL?"
                        tiempo="1 hora"
                    />
                    
                </div>
            </main>
        </div>
    );
};

export default Welcome;
