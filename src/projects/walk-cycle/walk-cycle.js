import React from "react";
import "../project.css"

import ColorChart from "./process/color-chart.png"

class WalkCycle extends React.Component {
    constructor(props) {
        super(props);
        this.title = "The Breezy Walk Cycle";
        this.video = "https://www.youtube.com/embed/vr4xTo8JVVI";
        this.description = `This animation was made as an individual project during the 
        HyperIsland Motion Creative program and work I am most proud of. It was my 
        first-ever walk cycle that I have designed using frame-by-frame animation technique.`;
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

        </div>
    }

}

export default WalkCycle;