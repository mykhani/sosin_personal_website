import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./fantasy.css"

import IconImg from "./resources/icon.png"
import Image1 from "./resources/1.png"
import Image2 from "./resources/2.png"
import Image3 from "./resources/3.png"
import Image4 from "./resources/4.png"
import Image5 from "./resources/5.png"
import Image6 from "./resources/6.png"

let ThumbnailImg = IconImg

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
                <div className="fantasy-grid">
                    <div className="fantasy-character">
                        <img src={Image1} />
                    </div>
                    <div className="fantasy-character">
                        <img src={Image2} />
                    </div>
                    <div className="fantasy-character">
                        <img src={Image3} />
                    </div>
                    <div className="fantasy-character">
                        <img src={Image4} />
                    </div>
                    <div className="fantasy-character">
                        <img src={Image5} />
                    </div>
                    <div className="fantasy-character">
                        <img src={Image6} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Fantasy {
    constructor() {
        this.title = "Assets for Fantasy Warrior Game"

    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Fantasy;