import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Splash from "../splash/splash.js";
import Navigation from "../navigation/navigation.js";
import Portfolio from "../../views/portfolio/portfolio.js"
import About from "../../views/about/about.js";
import Project from "../../views/project/project.js";

import 'bootstrap/dist/css/bootstrap.css';
import "./app.css"

const navItems = [
    {
        title: "Logo",
        path: "/"
    }, {
        title: "Portfolio",
        path: "/portfolio",
    }, {
        title: "About me",
        path: "/about"
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false };
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    render() {
        return (
            <TransitionGroup component={null}>
                <CSSTransition classNames="main-app" in={this.state.mounted} timeout={300} appear>
                    <div className="app-container" >
                        <BrowserRouter>
                            {/* <Navigation /> */}
                            <Routes>
                                <Route exact path="/" element={<Splash duration={3000} />} />
                                <Route exact path="/portfolio" element={<><Navigation /><Portfolio /></>} />
                                <Route path="/portfolio/:id" element={<><Navigation /><Project /></>} />
                                <Route exact path="/about" element={<><Navigation /><About /></>} />
                            </Routes>
                        </BrowserRouter >
                    </div >
                </CSSTransition>
            </TransitionGroup>

        )
    }
}

export default App;