import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./doodles.css"

import Image1 from "./resources/1.jpg"
import Image2 from "./resources/2.jpg"
import Image3 from "./resources/3.jpg"
import Image4 from "./resources/4.jpg"
import Image5 from "./resources/5.jpg"
import Image6 from "./resources/6.jpg"
import Image7 from "./resources/7.jpg"
import Image8 from "./resources/8.jpg"

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
                <div className="doodles-grid">
                    <div className="doodles-character">
                        <img src={Image1} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image2} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image3} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image4} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image5} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image6} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image7} />
                    </div>
                    <div className="doodles-character">
                        <img src={Image8} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Doodles {
    constructor() {
        this.title = "Some Random Doodles"

    }

    GetThumbnail(idx) {
        let key = `illustration_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Doodles;