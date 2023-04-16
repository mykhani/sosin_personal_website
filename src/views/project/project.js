import React, { cloneElement } from "react";
import "./project.css"
import Splash from "../../components/splash/splash.js";
import Navigation from "../../components/navigation/navigation.js";
import projects, { FindProject } from "../../projects/projects.js";
import View from "../../components/view/view.js"

import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

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

        return <>
            <Navigation />
            <TransitionGroup component={null}>
                <CSSTransition classNames="project-container" timeout={0} in={this.state.mounted} appear>
                    <div className="project-container">
                        {FindProject(id).GetComponent()}
                    </div>
                </CSSTransition>
            </TransitionGroup >
        </>
    }
}

export default withRouter(Project);