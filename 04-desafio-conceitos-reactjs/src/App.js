import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get("repositories").then((response) => {
            setRepositories(response.data);
        });
    }, []);

    async function handleAddRepository() {
        const response = await api.post("repositories", {
            title: `Novo projeto ${Date.now()}`,
            url: "https://github.com/abacaxiguy/repositorio_novo",
            techs: ["React.js", "Jest"],
        });

        const repository = response.data;

        setRepositories([...repositories, repository]);
    }

    async function handleRemoveRepository(id) {
        await api.delete(`repositories/${id}`);

        // My answer:

        // const index = repositories.findIndex((repository) => repository.id === id);
        // const currentRepositories = [...repositories];
        // currentRepositories.splice(index, 1);

        // setRepositories(currentRepositories);

        // Diego's answer:

        setRepositories(repositories.filter((repository) => repository.id !== id));
    }

    return (
        <div>
            <ul data-testid="repository-list">
                {repositories.map((repository) => (
                    <li key={repository.id}>
                        {repository.title}
                        <button onClick={() => handleRemoveRepository(repository.id)}>Remover</button>
                    </li>
                ))}
            </ul>

            <button onClick={handleAddRepository}>Adicionar</button>
        </div>
    );
}

export default App;
