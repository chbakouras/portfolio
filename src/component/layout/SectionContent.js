import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    sectionContent: {}
});

class SectionContent extends React.Component {

    render() {
        const {classes, children} = this.props;
        return (
            <div className={classes.sectionContent}>
                {children}
            </div>
        );
    }
}

SectionContent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SectionContent);
