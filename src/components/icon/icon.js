import React from "react";
import "./icon.css";

class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { opaque: true };
    }

    setOpaque() {
        console.log("SetOpaque")

        this.setState({ opaque: true });
    }

    setTransparent() {
        console.log("SetTransparent")
        this.setState({ opaque: false });
    }

    handleMouseOver = (e) => {
        this.setState({ opaque: true });
    }

    handleMouseLeave = (e) => {
        this.setState({ opaque: false });
    }

    render() {
        let opaque = this.props.opaque || this.state.opaque;

        console.log((opaque ? ' icon-opaque' : ' icon-transparent') + ' icon');

        return (
            <div
                className={(opaque ? ' icon-opaque' : ' icon-transparent') + ' icon'}
                onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}
            >
                <a href={this.props.url} ><img src={this.props.icon} /></a>
            </div>);
    }
}

export default Icon;