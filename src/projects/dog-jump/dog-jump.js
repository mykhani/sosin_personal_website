import React from "react";
import "../project.css"

import ColorChart from "./process/color-chart.png";
import CharacterDesign from "./process/character-design.png";

class DogJump extends React.Component {
    constructor(props) {
        super(props);
        this.title = "Dog jump animation";
        this.description = `This was an individual project during the HyperIsland Motion Creative program.
         I had to create a dog skipping animation for an online kids' book.`;
        this.role = "Illustration, Animation";
        this.tools = "Adobe Illustrator, After-effects";
        this.video = "https://youtube.com/embed/ipbRCkctHsk?feature=share";

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
                <div className="section-heading">Role</div>
                <div className="section-content">{this.role}</div>
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

export default DogJump;