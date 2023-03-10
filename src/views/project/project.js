import React, { cloneElement } from "react";
import "./project.css"
import Splash from "../../components/splash/splash.js";
import Navigation from "../../components/navigation/navigation.js";
// import projects from "./projects/projects.json"
import Projects from "../../projects/projects.js";
import View from "../../components/view/view.js"

import Kindness from "../../projects/kindness/kindness";

// import Video1 from "./resources/1.mp4";
// import Video2 from "./resources/2.mp4";
// import Video3 from "./resources/3.mp4";
// import Video4 from "./resources/4.mp4";
// import Video5 from "./resources/5.mp4";
// import Video6 from "./resources/6.mp4";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// let videos = [Video1, Video2, Video3, Video4, Video5, Video6]

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class Project extends View {
    constructor(props) {
        super(props);
        this.props = props;
        // this.state = { mounted: false }
    }

    render() {
        if (!this.state.loaded) {
            return <Splash duration={0} />
        }

        let id = this.props.router.params.id;
        // let { title, video, description, role, tools, credits } = projects[id];

        return <>
            <Navigation />
            <TransitionGroup component={null}>
                <CSSTransition classNames="project-container" timeout={0} in={this.state.mounted} appear>
                    <div className="project-container">
                        {Projects[id]}
                    </div>

                </CSSTransition>
            </TransitionGroup >
        </>
    }
}

export default withRouter(Project);