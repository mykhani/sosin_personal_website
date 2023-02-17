import React from "react";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mounted: false, loaded: false };
    }

    handlePageLoad = () => {
        console.log('view loaded');
        this.setState({ loaded: true })
    };

    componentDidMount() {
        if (document.readyState === 'complete') {
            this.handlePageLoad();
        } else {
            window.addEventListener('load', this.handlePageLoad, false);
        }

        this.setState({ mounted: true });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handlePageLoad);
    }
}

export default View;