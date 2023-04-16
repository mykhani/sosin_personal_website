import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./smash.css"

import Image1 from "./resources/1.png"
import Image2 from "./resources/2.png"
import Image3 from "./resources/3.png"
import Image4 from "./resources/4.png"
import Image5 from "./resources/5.png"
import Image6 from "./resources/6.png"
import Image7 from "./resources/7.png"
import Image8 from "./resources/8.png"


let ThumbnailImg = Image1

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
                <div className="smash-grid">
                    <div className="smash-character">
                        <img src={Image2} />
                    </div>
                    <div className="smash-character">
                        <img src={Image3} />
                    </div>
                    <div className="smash-character">
                        <img src={Image4} />
                    </div>
                    <div className="smash-character">
                        <img src={Image5} />
                    </div>
                    <div className="smash-character">
                        <img src={Image6} />
                    </div>
                    <div className="smash-character">
                        <img src={Image7} />
                    </div>
                    <div className="smash-character">
                        <img src={Image8} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Smash {
    constructor() {
        this.title = "Game Assets And Promotional Material"

    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Smash;