import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Icon from "../../components/icon/icon.js"
import IconGroup from "../../components/icon-group/icon-group.js";
import Splash from "../../components/splash/splash.js"
import Navigation from "../../components/navigation/navigation.js"
import View from "../../components/view/view.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./about.css"

import Name from "./resources/Name.svg";
import Picture from "./resources/picture.svg"
import Role from "./resources/Role.svg";
import BtnEmail from "./resources/Btn_Email.svg";


class About extends View {
    constructor(props) {
        super(props);
        this.props = props;

        this.experience = [
            {
                period: "2019 - 2022",
                company: "Freelance",
                position: "Freelance Desginer",
                location: "Remote",
                description: `Worked on various projects related to mobile games for 
                Android and iOS and online games like slots, casino. Also designed logos,
                web and promotional material.`
            },
            {
                period: "2016 - 2017",
                company: "Big Immersive",
                position: "Senior CG Artist",
                location: "Lahore, Pakistan",
                description: `Designed concept art, 2D assets, UI, and post-production material
                for several in-house games. Co-ordinated with dev and management teams for the
                successful completion of projects.`
            },
            {
                period: "2014 - 2016",
                company: "Regexsoft",
                position: "CG Artist",
                location: "Lahore, Pakistan",
                description: `Designed 2D assets, UI, characters and levels for different 
                client mobile game projects.`
            }
        ];

        this.education = [
            {
                program: "Motion Creative",
                school: "HyperIsland",
                location: "Stockholm, Sweden",
                period: "2022 - 2023"
            },
            {
                program: "BFA Visual Communication Design",
                school: "Beaconhouse National University",
                location: "Lahore, Pakistan",
                period: "2009 - 2013"
            }
        ];

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
        return `Hi I'm Sosin! I'm currently a student of the Motion Creative Program 2022 at HyperIsland, Stockholm. I am a friendly
and passionate person who loves to work with people. Previously, I have worked as a Game artist, designing fun 2D mobile games.
After moving to Stockholm from Hong Kong, I decided to learn something new and got fascinated by the world of motion design and animation.
I am very enthusiastic about telling a story through animation and inculcate the ideas of inclusion and diversity through my work.

A bit about my technical skills - I am very proficient in doing frame-by-frame animation in Photoshop. Drawing and Illustration
by hand is something that comes naturally, but I am slowly adding another animation tools like After-effects and Cinema4D to my repertoire as well.
I have also learnt about story boarding, project management, building teams, and working effectively as a group of diverse people. 

Thanks to the amazing teachings at HyperIsland, I feel I have grown a lot as a person and cannot wait to take on a new challenge and make a difference..!!` ;
        //         return `My name is Sosin. I have recently moved to stockholm, Sweden with my husband.
        // Before that, I was working as a 2D game Artist and I always wanted to improve my 
        // animation skills.I came to know about the Motion creative program at Hyper Island.
        // It has been a great learning experience so far.Apart from learning the technical skills,
        //     I have also realized the importance of learning how to work with People.`;
    }

    render() {
        if (!this.state.loaded) {
            return <Splash duration={0} />
        }

        return <>
            <Navigation />
            <TransitionGroup component={null}>
                <CSSTransition classNames="about-container" timeout={0} in={this.state.mounted} appear>
                    <div className="about-container">
                        <div className="about-banner">
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

                        <div className="about-content">
                            <div className="about-section">
                                <div className="about-section-content">
                                    {this.about()}
                                </div>
                            </div>


                            <div className="about-section">
                                <div className="about-section-heading" >Education</div>
                            </div>

                            {
                                this.education.map(({ program, school, location, period }) => {
                                    return <div className="about-section">
                                        <div className="about-section-subheading">{program}</div>
                                        <div className="about-section-content">{school}</div>
                                        <div className="about-section-content">{location}</div>
                                        <div className="about-section-content">{period}</div>

                                    </div>
                                })
                            }

                            <div className="about-section">
                                <div className="about-section-heading" >Experience</div>
                            </div>

                            {
                                this.experience.map(({ period, company, position, location, description }) => {
                                    return <div className="about-section">
                                        <div className="about-section-subheading">{company}</div>
                                        <div className="about-section-content">{period}</div>
                                        <div className="about-section-content">{position}</div>
                                        <div className="about-section-content">{location}</div>
                                        <div className="about-section-content">{description}</div>

                                    </div>
                                })
                            }

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
                        </div>
                        {/* <IconGroup data={this.social()}>
                    </IconGroup> */}
                    </div >
                </CSSTransition>
            </TransitionGroup>
        </>
    }
}

export default About;