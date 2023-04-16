import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Splash from "../../components/splash/splash.js";
import Navigation from "../../components/navigation/navigation.js";
import View from "../../components/view/view.js"
import projects, { FindProject } from "../../projects/projects.js"

import "./portfolio.css"

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
                        <div className="portfolio-group">
                            <div className="portfolio-group-heading">Animations</div>
                            <div className="tiled-container">
                                {projects.animations.map((p, idx) => {
                                    return p.GetThumbnail(idx)
                                })}
                            </div>
                        </div>

                        <div className="portfolio-group">
                            <div className="portfolio-group-heading">Games</div>
                            <div className="tiled-container">
                                {projects.games.map((p, idx) => {
                                    return p.GetThumbnail(idx)
                                })}
                            </div>
                        </div>

                        <div className="portfolio-group">
                            <div className="portfolio-group-heading">Illustrations</div>
                            <div className="tiled-container">
                                {projects.illustrations.map((p, idx) => {
                                    return p.GetThumbnail(idx)
                                })}
                            </div>
                        </div>

                        <div className="portfolio-group">
                            <div className="portfolio-group-heading">Concept Art</div>
                            <div className="tiled-container">
                                {projects.concept_arts.map((p, idx) => {
                                    return p.GetThumbnail(idx)
                                })}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    }
}

export default Project;