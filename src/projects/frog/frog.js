import React from "react";
import "../project.css"

import ColorChart from "./process/color-chart.png";

class Frog extends React.Component {
    constructor(props) {
        super(props);
        this.title = "Frog animation loop";
        this.description = `This was my first task at HyperIsland and I had 
        to create a loop animation of choice. I was looking for inspiration and 
        came across a beautiful swimming animation created by Emanuele Colombo, 
        a motion design based in Italy. I wanted to try something similar but 
        by using frame-by-frame animation. I decided my main character to be 
        a frog because I love them (who doesn't, they are so unique, slimey, 
        green 🐸). So I drew a frog swimming in the pool having the best time 
        of its life.`;

        this.tools = "Frame-by-frame animation in Adobe Photoshop, Illustrator, After-effects";
        this.video = "https://www.youtube.com/embed/0vb8BacHmsc";
    }

    render() {
        return <div className="project">
            <div className='project-title'>
                {this.title}
            </div>
            < div className='project-video'>
                <iframe src={this.video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            </div>

            <div className="project-section">
                <div className="section-heading">Description</div>
                <div className="section-content">{this.description}</div>
            </div>

            <div className="project-section">
                <div className="section-heading">Tools and Techniques</div>
                <div className="section-content">{this.tools}</div>
            </div>

            <div className="project-section">
                <div className="section-heading">Process</div>
            </div>

            <div className="project-section">
                <div className="section-subheading">Color Chart</div>
                <img src={ColorChart} style={{ width: "100%", maxWidth: "500px" }} />
            </div>
        </div>
    }

}

export default Frog;