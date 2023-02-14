import React from "react";
import "./thumbnail.css"

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
    }

    render() {
        return <div className="thumbnail"><img ref={this.imgRef} src={this.props.image.urls.regular} /></div>
    }
}

export default Thumbnail;