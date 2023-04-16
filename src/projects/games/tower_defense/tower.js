import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"

import Image1 from "./resources/1.png"
import Image2 from "./resources/2.png"
import Image3 from "./resources/3.png"
import Image4 from "./resources/4.png"
import Image5 from "./resources/5.png"
import Image6 from "./resources/6.png"
import Image7 from "./resources/7.png"
import Image8 from "./resources/8.png"
import Image9 from "./resources/9.png"
import Image10 from "./resources/10.png"

import Enemy1 from "./resources/enemy1.png"
import Enemy2 from "./resources/enemy2.png"

import "./tower.css"

let ThumbnailImg = Enemy2

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
                <div className="section-subheading">Assets</div>
                <div className="tower-grid">
                    <div className="tower-asset">
                        <img src={Image1} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image2} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image3} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image4} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image5} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image6} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image7} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image8} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image9} />
                    </div>
                    <div className="tower-asset">
                        <img src={Image10} />
                    </div>
                    <div className="tower-asset">
                        <img src={Enemy1} />
                    </div>
                    <div className="tower-asset">
                        <img src={Enemy2} />
                    </div>
                </div>
            </div>
        </div >
    }
}

class Tower {
    constructor() {
        this.title = "Texturing of 3D Assets for Tower Defense Game"

    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Tower;