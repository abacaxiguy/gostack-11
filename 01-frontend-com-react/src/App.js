import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

function App() {
    const [projects, setProjects] = useState([]);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        <>
            <img width={300} src={backgroundImage} />

            <Header title="Projects" />

            <ul>
                {projects.map((project) => (
                    <li key={project}>{project}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddProject}>
                Adicionar projeto
            </button>
        </>
    );
}

export default App;
