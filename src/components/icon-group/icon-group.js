import React from "react";
import Icon from "../icon/icon.js"
import "./icon-group.css";

class IconGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { group_opaque: true };
    }

    handleMouseEnter = (e) => {
        console.log("icon group mouse enter");
        this.setState({ group_opaque: false });
    }

    handleMouseLeave = (e) => {
        console.log("icon group mouse leave");
        this.setState({ group_opaque: true });
    }

    render() {
        return (
            <div className="icon-group"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                {this.props.data.map((d) => {
                    return <Icon icon={d.icon} url={d.url} opaque={this.state.group_opaque} />
                })}
            </div>)
    }
}

export default IconGroup;