import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"

import Image1 from "./resources/1.png"
import Image2 from "./resources/2.png"
import Image3 from "./resources/3.jpg"

import "./dragon.css"

let ThumbnailImg = Image3

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
                {/* <div className="section-subheading">Assets</div> */}
                <div className="dragon-grid">
                    <div className="dragon-character">
                        <img src={Image1} />
                    </div>
                    <div className="dragon-character">
                        <img src={Image2} />
                    </div>
                    <div className="dragon-character">
                        <img src={Image3} />
                    </div>
                </div>
            </div>
        </div >
    }
}

class Dragon {
    constructor() {
        this.title = "Dragon Cover Design"

    }

    GetThumbnail(idx) {
        let key = `illustration_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Dragon;