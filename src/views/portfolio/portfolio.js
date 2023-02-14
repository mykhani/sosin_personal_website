import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Thumbnail from "../../components/thumbnail/thumbnail.js"
import "./portfolio.css"

import projectImg1 from "./project1.svg"

import Project1 from "./1.svg";
import Project2 from "./2.svg";
import Project3 from "./3.svg";
import Project4 from "./4.svg";
import Project5 from "./5.svg";
import Project6 from "./6.svg";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false };
    }
    componentDidMount() {
        this.setState({ mounted: true });
    }
    render() {
        return <TransitionGroup component={null}>
            <CSSTransition classNames="portfolio" timeout={0} in={this.state.mounted} appear>
                <div className="portfolio-container">
                    <Thumbnail image={{
                        urls: {
                            regular: Project1, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail image={{
                        urls: {
                            regular: Project2, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail image={{
                        urls: {
                            regular: Project3, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail image={{
                        urls: {
                            regular: Project4, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail image={{
                        urls: {
                            regular: Project5, hover: "hover-gif"
                        }
                    }} />
                    <Thumbnail image={{
                        urls: {
                            regular: Project6, hover: "hover-gif"
                        }
                    }} />
                </div>
            </CSSTransition>
        </TransitionGroup>
    }
}

export default Project;