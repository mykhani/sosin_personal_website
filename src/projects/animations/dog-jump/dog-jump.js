import React from "react";
import Thumbnail from "../../../components/thumbnail/thumbnail";
import "../../project.css"

import ThumbnailImg from "./thumbnail.gif"
import ColorChart from "./process/color-chart.png";
import CharacterDesign from "./process/character-design.png";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.props = props

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
                <div className="section-heading">Role</div>
                <div className="section-content">{this.props.role}</div>
            </div>

            <div className="project-section">
                <div className="section-heading">Process</div>
            </div>

            <div className="project-section">
                <div className="section-subheading">Character Design</div>
                <img src={CharacterDesign} style={{ width: "100%", maxWidth: "600px" }} />
            </div>

            <div className="project-section">
                <div className="section-subheading">Color Chart</div>
                <img src={ColorChart} style={{ width: "100%", maxWidth: "500px" }} />
            </div>


        </div>
    }

}

class DogJump {
    constructor() {
        this.title = "Dog jump animation";
        this.description = `This was an individual project during the HyperIsland Motion Creative program.
         I had to create a dog skipping animation for an online kids' book.`;
        this.role = "Illustration, Animation";
        this.tools = "Adobe Illustrator, After-effects";
        this.video = "https://youtube.com/embed/ipbRCkctHsk?feature=share";
    }

    GetThumbnail(idx) {
        let key = `animation_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} description={this.description} role={this.role} tools={this.tools} video={this.video} />
    }
}

export default DogJump;