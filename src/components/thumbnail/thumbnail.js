import React from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css"

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    handleMouseEnter = () => {

    }

    handleMouseLeave = () => {

    }

    render() {
        let id = this.props.id;

        return <div className="thumbnail" >
            <Link to={'/portfolio/' + id}>
                <img src={this.props.image} />
                <div className='thumbnail-text'>{this.props.title}</div>
            </Link>
        </div>

    }
}

export default Thumbnail;