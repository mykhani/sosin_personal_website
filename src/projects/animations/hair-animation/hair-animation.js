import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React from "react";
import Thumbnail from "../../../components/thumbnail/thumbnail";
import "../../project.css"

import ColorChart from "./process/color-chart.png";
import WavePrinciple from "./process/wave-principle.gif";
import WaveAnimation from "./process/wave-animation.gif";
import Animation from "./process/animation.gif";
import ThumbnailImg from "./thumbnail.gif"

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return <div className="project">
            <div className='project-title'>
                {this.props.title}
            </div>
            < div className='project-video'>
                <iframe src={this.props.video} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            </div>

            <div className="project-section">
                <div className="section-heading">Description</div>
                <div className="section-content">{this.props.description}</div>
            </div>

            <div className="project-section">
                <div className="section-heading">Tools and Techniques</div>
                <div className="section-content">{this.props.tools}</div>
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

class HairAnimation {
    constructor() {
        this.title = "Hair animation tutorial";
        this.description = `As a part of a learning module during the HyperIsland 
        Motion Creative program, I conducted a short 30-minute workshop online on Zoom, 
        covering hair movement animation using frame-by-frame technique in Adobe Photoshop 
        and its comparison with achieving the same using Adobe After-effects.`;
        this.tools = "Frame-by-frame animation in Adobe Photoshop, Illustrator, After-effects";
        this.video = "https://www.youtube.com/embed/ncMCg8AkeCA";
    }

    GetThumbnail(idx) {
        let key = `animation_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} description={this.description} tools={this.tools} video={this.video} />
    }
}

export default HairAnimation;