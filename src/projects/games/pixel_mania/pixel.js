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

import GameImg from "./resources/game.png"
import GridImg from "./resources/grid.png"
import LogoImg from "./resources/logo.png"
import BackgroundImg from "./resources/background.png"

import "./pixel.css"
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers"

let ThumbnailImg = GameImg

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
                <div className="pixel-grid">
                    <div className="pixel-asset">
                        <img src={Image1} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image2} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image3} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image4} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image5} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image6} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image7} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image8} />
                    </div>
                    <div className="pixel-asset">
                        <img src={Image9} />
                    </div>
                </div>
            </div>
            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Logo</div>
                <div className="pixel-logo">
                    <img src={LogoImg} />
                </div>
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Game Grid</div>
                <div className="pixel-screen">
                    <img src={GridImg} />
                </div>
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Game Screen</div>
                <div className="pixel-screen">
                    <img src={GameImg} />
                </div>
            </div>
        </div >
    }
}

class Pixel {
    constructor() {
        this.title = "Pixel Art Based Slots Game"

    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Pixel;