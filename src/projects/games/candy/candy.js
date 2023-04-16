import React from "react"
import Thumbnail from "../../../components/thumbnail/thumbnail"
import "../../project.css"
import "./candy.css"

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
import Image17 from "./resources/17.png"
import Image18 from "./resources/18.png"
import Image19 from "./resources/19.png"
import Image20 from "./resources/20.png"
import Image21 from "./resources/21.png"
import Image22 from "./resources/22.png"
import Image23 from "./resources/23.png"
import Image24 from "./resources/24.png"
import Image25 from "./resources/25.png"


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
                <div className="section-subheading">Game Screens</div>
                <div className="candy-grid">
                    <div className="candy-character">
                        <img src={Image1} />
                    </div>
                    <div className="candy-character">
                        <img src={Image2} />
                    </div>
                    <div className="candy-character">
                        <img src={Image3} />
                    </div>
                    <div className="candy-character">
                        <img src={Image4} />
                    </div>
                    <div className="candy-character">
                        <img src={Image5} />
                    </div>
                    <div className="candy-character">
                        <img src={Image6} />
                    </div>
                    <div className="candy-character">
                        <img src={Image7} />
                    </div>
                    <div className="candy-character">
                        <img src={Image8} />
                    </div>
                </div>
            </div>

            <div className="project-section">  {/* characters */}
                <div className="section-subheading">Assets</div>
                <div className="candy-grid">

                    <div className="candy-character">
                        <img src={Image9} />
                    </div>
                    <div className="candy-character">
                        <img src={Image10} />
                    </div>
                    <div className="candy-character">
                        <img src={Image11} />
                    </div>
                    <div className="candy-character">
                        <img src={Image12} />
                    </div>
                    <div className="candy-character">
                        <img src={Image13} />
                    </div>
                    <div className="candy-character">
                        <img src={Image14} />
                    </div>
                    <div className="candy-character">
                        <img src={Image15} />
                    </div>
                    <div className="candy-character">
                        <img src={Image16} />
                    </div>
                    <div className="candy-character">
                        <img src={Image17} />
                    </div>
                    <div className="candy-character">
                        <img src={Image18} />
                    </div>
                    <div className="candy-character">
                        <img src={Image19} />
                    </div>
                    <div className="candy-character">
                        <img src={Image20} />
                    </div>
                    <div className="candy-character">
                        <img src={Image21} />
                    </div>
                    <div className="candy-character">
                        <img src={Image22} />
                    </div>
                    <div className="candy-character">
                        <img src={Image23} />
                    </div>
                    <div className="candy-character">
                        <img src={Image24} />
                    </div>
                    <div className="candy-character">
                        <img src={Image25} />
                    </div>
                </div>
            </div>
        </div>
    }
}

class Candy {
    constructor() {
        this.title = "Candy Pop Maker Game Assets"

    }

    GetThumbnail(idx) {
        let key = `game_${idx}`
        return <Thumbnail key={key} id={key} image={ThumbnailImg} title={this.title} />
    }

    GetComponent() {
        return <Component title={this.title} />
    }
}

export default Candy;