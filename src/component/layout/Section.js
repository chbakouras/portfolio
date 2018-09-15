import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    section: {}
});

class Section extends React.Component {

    render() {
        const {classes, children} = this.props;
        return (
            <div className={classes.section}>
                {children}
            </div>
        );
    }
}

Section.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Section);
