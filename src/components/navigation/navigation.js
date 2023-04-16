import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css"

import Logo from "./resources/Logo.png"
import LogoGif from "./resources/Logo.gif"
import BtnAbout from "./resources/Btn_About.svg";
import BtnAboutSelected from "./resources/Btn_About_selected.svg"

import BtnPortfolio from "./resources/Btn_Portfolio.svg"
import BtnPortfolioSelected from "./resources/Btn_Portfolio_selected.svg"
import Kebab from "./resources/kebab.png"

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

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { animate_logo: false };
    }

    handleLogoMouseEnter = () => {
        this.setState({ animate_logo: true });
    }

    handleLogoMouseLeave = () => {
        this.setState({ animate_logo: false });
    }

    render() {
        let animate_logo = this.state.animate_logo;
        let location = this.props.router.location.pathname;
        console.log(location)
        console.log(location === "/portfolio");
        console.log(location === "/about");

        return <div className="navigation-header">
            <div className="navigation-container">
                <div className='logo' onMouseEnter={this.handleLogoMouseEnter} onMouseLeave={this.handleLogoMouseLeave}>
                    <Link to="/"><img src={animate_logo ? LogoGif : Logo} /></Link>
                </div>
                <div className="links">
                    <div className="nav-item-group">
                        <div className="nav-item" id="portfolio-btn">
                            <Link to="/portfolio" className="nav-link" >
                                <img src={(location.match("/portfolio") ? BtnPortfolioSelected : BtnPortfolio)} />
                                {/* <img src={BtnPortfolioSelected} className={(location === "/portfolio" ? 'nav-item-active' : 'nav-item-inactive')} />
                            <img src={BtnPortfolio} className={(location === "/portfolio" ? 'nav-item-inactive' : 'nav-item-active')} /> */}
                            </Link>
                        </div>
                        <div className="nav-item" id="about-btn">
                            <Link to="/about" className="nav-link" >
                                <img src={(location === "/about" ? BtnAboutSelected : BtnAbout)} />
                                {/* <img src={BtnAboutSelected} className={(location === "/about" ? 'nav-item-active' : 'nav-item-inactive')} />
                            <img src={BtnAbout} className={(location === "/about" ? 'nav-item-inactive' : 'nav-item-active')} /> */}
                            </Link>
                        </div>

                    </div>
                    {/* <div className="nav-item-kebab">
                        <img src={Kebab} />
                    </div> */}
                </div>
            </div>
        </div>
    }
}

export default withRouter(Navigation);