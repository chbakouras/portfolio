import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({});

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                portfolio
            </div>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Portfolio);
