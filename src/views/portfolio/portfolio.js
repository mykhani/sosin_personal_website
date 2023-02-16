import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Thumbnail from "../../components/thumbnail/thumbnail.js"
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

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false };
    }
    componentDidMount() {
        this.setState({ mounted: true });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        console.log(projects);
    }
    render() {
        return <TransitionGroup component={null}>
            <CSSTransition classNames="portfolio" timeout={0} in={this.state.mounted} appear>
                <div className="portfolio-container">
                    {projects.map(({ title }, idx) => {
                        return <Thumbnail id={idx} image={images[idx]} title={title} />
                    })}
                    {/* <Thumbnail project_id={1} title={projects["1"]} image={{
                        urls: {
                            regular: Project1, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail project_id={2} title={projects["2"]} image={{
                        urls: {
                            regular: Project2, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail project_id={3} title={projects["3"]} image={{
                        urls: {
                            regular: Project3, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail project_id={4} title={projects["4"]} image={{
                        urls: {
                            regular: Project4, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail project_id={5} title={projects["5"]} image={{
                        urls: {
                            regular: Project5, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail project_id={6} title={projects["6"]} image={{
                        urls: {
                            regular: Project6, hover: "hover-gif"
                        }
                    }} /> */}
                </div>
            </CSSTransition>
        </TransitionGroup>
    }
}

export default Project;