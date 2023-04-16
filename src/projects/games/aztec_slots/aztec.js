import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"


import LogoImg from "./resources/logo.png"
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
import Image11 from "./resources/11.png"
import Image12 from "./resources/12.png"
import Image13 from "./resources/13.png"
import Image14 from "./resources/14.png"
import Image15 from "./resources/15.png"
import Image16 from "./resources/16.png"

import "./aztec.css"

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
                <div className="section-subheading">Assets</div>
                <div className="aztec-grid">
                    <div className="aztec-asset">
                        <img src={Image2} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image3} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image4} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image5} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image6} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image7} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image8} />
                    </div>
                    <div className="asset">
                        <img src={Image9} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image10} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image11} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image12} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image13} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image14} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image15} />
                    </div>
                    <div className="aztec-asset">
                        <img src={Image16} />
                    </div>

                </div>
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Logo</div>
                <div className="aztec-logo">
                    <img src={LogoImg} />
                </div>
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Game Screen</div>
                <div className="aztec-screen">
                    <img src={Image1} />
                </div>
            </div>
        </div >
    }
}

class Aztec {
    constructor() {
        this.title = "Aztec Slots Game"
    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Aztec;