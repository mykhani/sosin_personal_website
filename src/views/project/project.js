import React from "react";
import "./project.css"
import projects from "./projects/projects.json"

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

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { mounted: false }
    }

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        this.setState({ mounted: true });
        console.log(this.props)
    }

    render() {
        let id = this.props.router.params.id;

        console.log(projects[id])
        let { title, video, description } = projects[id];
        let videoPath = process.env.PUBLIC_URL + video;
        console.log(videoPath)
        return <TransitionGroup component={null}>
            <CSSTransition classNames="project" timeout={0} in={this.state.mounted} appear>
                <div className="project-container">
                    <div className='project-title'>
                        {title}
                    </div>
                    < div className='project-video'>
                        {/* <video src={videoPath} controls loop autoplay /> */}
                        <iframe src={video} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="project-description">{description}</div>
                </div>

            </CSSTransition>
        </TransitionGroup >
    }
}

export default withRouter(Project);