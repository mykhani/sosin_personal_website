import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import "../project.css"

import ColorChart from "./process/color-chart.png";
import WavePrinciple from "./process/wave-principle.gif";
import WaveAnimation from "./process/wave-animation.gif";
import Animation from "./process/animation.gif";

class HairAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.title = "Hair animation tutorial";
        this.description = `As a part of a learning module during the HyperIsland 
        Motion Creative program, I conducted a short 30-minute workshop online on Zoom, 
        covering hair movement animation using frame-by-frame technique in Adobe Photoshop 
        and its comparison with achieving the same using Adobe After-effects.`;
        this.tools = "Frame-by-frame animation in Adobe Photoshop, Illustrator, After-effects";
        this.video = "https://www.youtube.com/embed/ncMCg8AkeCA";
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
                <div className="section-subheading">Wave Principle</div>
                <img src={WavePrinciple} style={{ width: "100%", maxWidth: "500px" }} />
            </div>

            <div className="project-section">
                <div className="section-subheading">Wave Animation</div>
                <img src={WaveAnimation} style={{ width: "100%", maxWidth: "500px" }} />
            </div>

            <div className="project-section">
                <div className="section-subheading">Final Animation</div>
                <img src={Animation} style={{ width: "100%", maxWidth: "500px" }} />
            </div>

        </div>
    }

}

export default HairAnimation;