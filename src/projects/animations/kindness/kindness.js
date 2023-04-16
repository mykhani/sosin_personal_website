import React from "react";
import "../../project.css";
import "./kindness.css";

import Ana from "./process/ana.gif";
import ColorTest from "./process/color_test.gif";
import Katt from "./process/katt.gif";
import Lee from "./process/lee.gif";
import Lilly from "./process/lilly.gif";
import Sam from "./process/sam.gif";
import Storyboard from "./process/storyboard.gif";
import ThreeAct from "./process/three_act_structure.png";
import Thumbnail from "../../../components/thumbnail/thumbnail.js"

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
                <div className="section-heading">Role</div>
                <div className="section-content">{this.props.role}</div>
            </div>
            <div className="project-section">
                <div className="section-heading">Credits</div>
                {
                    this.props.credits.map(({ name, role }) => {
                        return <div key={name} className="section-content"><span className="credit-name">{name}</span> - <span className="credit-role">{role}</span></div>
                    })
                }
            </div>

            <div className="project-section">
                <div className="section-heading">Process</div>
            </div>

            <div className="project-section">
                <div className="section-subheading">Story Writing</div>
                <img src={ThreeAct} style={{ width: "100%", maxWidth: "800px" }} />
            </div>

            <div className="project-section">
                <div className="section-subheading">Storyboarding</div>
                <img src={Storyboard} style={{ width: "100%", maxWidth: "800px" }} />
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Character Design</div>
                <div className="characters-grid">
                    <div className="character">
                        <img src={Ana} />
                        <div>Ana</div>
                    </div>
                    <div className="character">
                        <img src={Katt} />
                        <div>Katt </div>
                    </div>
                    <div className="character">
                        <img src={Lee} />
                        <div> Lee </div>
                    </div>

                    <div className="character">
                        <img src={Lilly} />
                        <div>Lilly</div>
                    </div>

                    <div className="character">
                        <img src={Sam} />
                        <div>Sam</div>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <div className="section-subheading">Color Test</div>
                <img src={ColorTest} style={{ width: "100%", maxWidth: "300px" }} />
            </div>

        </div >

    }

}

class Kindness {
    constructor() {
        this.title = "Kindness starts with you";
        this.video = "https://youtube.com/embed/CwYI5EE6c_Y?feature=share";
        this.description = `This was my group project during the storytelling module of HyperIsland Motion Creative program. 
        We had to design a short animation around the theme of kindness.The challenge was to convey the message in 15 seconds. 
        After thorough ideation, our group decided on the idea of spreading smile / happiness.\n We used a 3 - act structure for story telling. 
        This was my first project as a project manager and I greatly enjoyed working with immensely talented people in my group. 
        We also made a conscious effort of utilizing the concept of diversity and inclusion in our work.`;
        this.tools = "Frame-by-frame animation, Adobe Photoshop, Illustrator, After-effects";
        this.role = "Project Manager, Animation, Storyboarding, Background Characters Design";
        this.credits = [
            {
                "name": "Eric Bengtsso",
                "role": "Boardmatics, Composition, Art"
            },
            {
                "name": "Pen Hsiang Feng",
                "role": "Animation Lead, Background Design"
            },
            {
                "name": "Rakim Lee",
                "role": "Art Lead, Sound Design, Main Character Design"
            },
            {
                "name": "Yi Shen",
                "role": "Colorscript, Style Frames"
            },
            {
                "name": "Kateryna Shepel",
                "role": "Ideation"
            }
        ];
    }

    GetThumbnail(idx) {
        let key = `animation_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} video={this.video} description={this.description} tools={this.tools} role={this.role} credits={this.credits} />
    }
}

export default Kindness;

