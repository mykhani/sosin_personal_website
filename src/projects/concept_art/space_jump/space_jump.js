import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./space_jump.css"

import Image1 from "./resources/1.png"
import Image2 from "./resources/2.jpg"
import Image3 from "./resources/3.png"
import Image4 from "./resources/4.jpg"

let ThumbnailImg = Image4

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return <div className="project" >
            <div className='project-title'>
                {this.props.title}
            </div>
            <div className="project-section">  {/* characters */}
                {/* <div className="section-subheading">Designing Bird Characters</div> */}
                <div className="space-grid">
                    <div className="space-character">
                        <img src={Image1} />
                    </div>
                    <div className="space-character">
                        <img src={Image2} />
                    </div>
                    <div className="space-character">
                        <img src={Image3} />
                    </div>
                    <div className="space-character">
                        <img src={Image4} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class SpaceJump {
    constructor() {
        this.title = "Concept Art for Sci-fi VR Game"

    }

    GetThumbnail(idx) {
        let key = `concept-art_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default SpaceJump;