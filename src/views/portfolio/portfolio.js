import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Thumbnail from "../../components/thumbnail/thumbnail.js"
import Splash from "../../components/splash/splash.js";
import Navigation from "../../components/navigation/navigation.js";
import View from "../../components/view/view.js"
import "./portfolio.css"

import Image1 from "./resources/1.gif";
import Image2 from "./resources/2.gif";
import Image3 from "./resources/3.gif";
import Image4 from "./resources/4.gif";
import Image5 from "./resources/5.gif";
import Image6 from "./resources/6.gif";

import projects from "../project/projects/projects.json"

let images = [
    Image1, Image2, Image3, Image4, Image5, Image6
];

class Project extends View {
    constructor(props) {
        super(props);
        this.state = { mounted: false, loaded: false };
    }

    componentDidMount() {
        super.componentDidMount();
    }

    render() {
        if (!this.state.loaded) {
            return <Splash duration={0} />
        }

        return <>
            <Navigation />
            <TransitionGroup component={null}>
                <CSSTransition classNames="portfolio" timeout={0} in={this.state.mounted} appear>
                    <div className="portfolio-container">
                        {projects.map(({ title }, idx) => {
                            return <Thumbnail key={idx} id={idx} image={images[idx]} title={title} />
                        })}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    }
}

export default Project;