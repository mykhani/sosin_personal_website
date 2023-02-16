import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Icon from "../../components/icon/icon.js"
import IconGroup from "../../components/icon-group/icon-group.js";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./about.css"

import Name from "./resources/Name.svg";
import Picture from "./resources/picture.svg"
import Role from "./resources/Role.svg";
import BtnEmail from "./resources/Btn_Email.svg";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { mounted: false };
    }

    componentDidMount() {
        this.setState({ mounted: true });
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    social() {
        return {
            linkedin: "https://www.linkedin.com/in/sosin-shafiq",
            instagram: "https://www.instagram.com/sosin_shafiq/"
        };
    }

    caption() {
        return
    }
    email() {
        return 'sosinshafiq@gmail.com';
    }

    about() {
        return `My name is Sosin. I have recently moved to stockholm, Sweden with my husband.
Before that, I was working as a 2D game Artist and I always wanted to improve my 
animation skills.I came to know about the Motion creative program at Hyper Island.
It has been a great learning experience so far.Apart from learning the technical skills,
    I have also realized the importance of learning how to work with People.`;
    }

    render() {
        return <TransitionGroup component={null}>
            <CSSTransition classNames="about" timeout={0} in={this.state.mounted} appear>
                <div id="about-container">
                    <div id="about-banner">
                        <div id="about-name">
                            <img src={Name} />
                        </div>
                        <div id="about-picture">
                            <img src={Picture} />
                        </div>
                        <div id="about-role">
                            <img src={Role} />
                        </div>
                    </div>

                    <div id="about-description">{this.about()}</div>
                    <div id="about-email">
                        <div id="email">
                            <a href="mailto: sosinshafiq.gmail.com">
                                <img src={BtnEmail} />
                            </a>
                        </div>
                    </div>
                    <div className='about-social'>
                        <a className='about-icon' href='https://www.linkedin.com/in/sosin-shafiq' ><i className="bi bi-linkedin"></i></a>
                        <a className='about-icon' href='https://www.instagram.com/sosin_shafiq' ><i className="bi bi-instagram"></i></a>
                    </div>
                    {/* <IconGroup data={this.social()}>
                    </IconGroup> */}
                </div >
            </CSSTransition>
        </TransitionGroup>
    }
}

export default About;