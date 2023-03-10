import React from "react";
import "../project.css"
import LineArt from "./process/line-art.gif"
import ColorChart from "./process/color-chart.png"
import Animation from "./process/animation.gif"

class Spotify extends React.Component {
    constructor(props) {
        super(props);
        this.title = "Spotify Loop Animation";
        this.video = "https://youtube.com/embed/_J6M3VYZ7NY?feature=share";
        this.description = `This was an individual project during the HyperIsland Motion Creative program. 
        I had to create an abstract loop animation for spotify canvas.`;
        this.tools = "Frame-by-frame animation in Adobe Photoshop";
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

            <div className="project-section">
                <div className="section-subheading">Line Art</div>
                <img src={LineArt} style={{ width: "100%", maxWidth: "300px" }} />
            </div>

            <div className="project-section">
                <div className="section-subheading">Animation</div>
                <img src={Animation} style={{ width: "100%", maxWidth: "300px" }} />
            </div>

        </div>
    }

}

export default Spotify;