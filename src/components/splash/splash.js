import React from "react";
import "./splash.css"
import SplashIcon from "./splash.gif"

import {
    redirect,
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

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.component = props.component;
        this.state = { loading: false };
        this.splashTimer = null;

    }



    componentDidMount() { // runs after the component output has been rendered to the DOM.
        this.setState({ loading: true });

        let { duration = 3000 } = this.props

        if (duration > 0) {
            this.splashTimer = setTimeout(() => {
                this.splashTimeout();
            }, duration);
        }
    }

    componentWillUnmount() {
        if (this.splashTimer) {
            clearInterval(this.splashTimer);
        }
    }

    splashTimeout() {
        console.log("Splash timeout!");
        console.log(this.props.redirect)
        this.setState({ loading: false })
        console.log(this.props.router)

        let { redirect } = this.props;

        if (redirect) {
            this.props.router.navigate(redirect)
        } else {
            this.props.router.navigate(-1) /* go back */
        }

        console.log(this)
    }

    render() {
        return <div className="splash-container">
            <div className="splash">
                <img id="splash" src={SplashIcon} />
            </div>
        </div>

    }
}

export default withRouter(Splash);