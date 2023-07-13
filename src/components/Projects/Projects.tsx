import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-title">Software Projects</h2>
            <section className="projects-content">
                <section className="projects-text-container">

                    <a href="https://github.com/keenans1/citysearch" target="_blank" rel="noopener" className="pre-turing-projects-link">City Search GitHub Repo</a>
                    <a href="https://citysearch.vercel.app/" target="_blank" rel="noopener" className="gif-container">
                        <img src="https://user-images.githubusercontent.com/110955503/221709782-410bec18-7a3c-44c3-9011-dc6ecf483471.gif" className="projects-images"/>
                    </a>


                    <a href="https://github.com/keenans1/spoiled_fruit" target="_blank" rel="noopener" className="pre-turing-projects-link">Spoiled Fruit GitHub Repo</a>
                    <a href="https://spoiled-fruit.vercel.app/" target="_blank" rel="noopener" className="gif-container">
                        <img src="https://media.giphy.com/media/A1UYoA8az68IQQ0SQO/giphy.gif" className="projects-images"/>
                    </a>


                    <a href="https://github.com/orgs/grant-guru/repositories" target="_blank" rel="noopener" className="pre-turing-projects-link">Grant Guru GitHub Repo</a>
                    <a href="https://grant-guru-fe.vercel.app/" target="_blank" rel="noopener" className="gif-container">
                        <img src="https://user-images.githubusercontent.com/111818942/230463892-75b499d4-e3a6-475a-b9df-89940440fc3e.gif" className="projects-images"/>
                    </a>


                    <a href="https://keenansouthall.azurewebsites.net/" target="_blank" rel="noopener" className="pre-turing-projects-link">Pre-Turing Projects</a>
                </section>
            </section> 
        </div>
    )
}

export default Projects