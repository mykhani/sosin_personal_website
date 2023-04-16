import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./mythical.css"

import Image1 from "./resources/1.png"
import Image2 from "./resources/2.jpg"
import Image3 from "./resources/3.jpg"
import Image4 from "./resources/4.png"
import Image5 from "./resources/5.jpg"

let ThumbnailImg = Image5

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
                <div className="mythical-grid">
                    <div className="mythical-character">
                        <img src={Image1} />
                    </div>
                    <div className="mythical-character">
                        <img src={Image2} />
                    </div>
                    <div className="mythical-character">
                        <img src={Image3} />
                    </div>
                    <div className="mythical-character">
                        <img src={Image4} />
                    </div>
                    <div className="mythical-character">
                        <img src={Image5} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Mythical {
    constructor() {
        this.title = "Mythical Characters"

    }

    GetThumbnail(idx) {
        let key = `concept-art_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Mythical;