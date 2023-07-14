import React from "react";
import "./Projects.css";

const Projects = () => {
    
    const info = {
        titles: ["City Search Github Repo", "Spoiled Fruit Github Repo", "Grant Guru Github Repo"],
        githubLinks: ["https://github.com/keenans1/citysearch", "https://github.com/keenans1/spoiled_fruit", "https://github.com/orgs/grant-guru/repositories"],
        deployedLinks: ["https://citysearch.vercel.app/", "https://spoiled-fruit.vercel.app/", "https://grant-guru-fe.vercel.app/"],
        imageLinks: ["https://user-images.githubusercontent.com/110955503/221709782-410bec18-7a3c-44c3-9011-dc6ecf483471.gif", "https://media.giphy.com/media/A1UYoA8az68IQQ0SQO/giphy.gif", "https://user-images.githubusercontent.com/111818942/230463892-75b499d4-e3a6-475a-b9df-89940440fc3e.gif"]
    }

    const displayGifs = () => {
        const gifElements = []
      
        for (let i = 0; i < 3; i++) {
          gifElements.push(
            <React.Fragment key={i}>
              <a href={info.githubLinks[i]} target="_blank" rel="noopener">
                {info.titles[i]}
              </a>
              <a href={info.deployedLinks[i]} target="_blank" rel="noopener" className="gif-container">
                <img src={info.imageLinks[i]} className="content-image" />
              </a>
            </React.Fragment>
          )
        }
      
        return gifElements
      }
      
    return (
        <div id="projects" className="main-content-display-container">
            <h2>Software Projects</h2>
            <section className="main-content-display-container content-box">
                <section className="main-content-display-container content-padding">
                    {displayGifs()}
                    <a href="https://keenansouthall.azurewebsites.net/" target="_blank" rel="noopener">Pre-Turing Projects</a>
                </section>
            </section> 
        </div>
    )
}

export default Projects