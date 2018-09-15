import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    headerContainer: {
        padding: '6px 30px',
        margin: '10px auto',
        border: '1px solid #e4e4e4',
    },
    header: {
        fontSize: '20px',
    },
});

class SectionHeader extends React.Component {

    render() {
        const {classes, headerText} = this.props;
        return (
            <div className={classes.headerContainer}>
                <h3 className={classes.header}>{headerText}</h3>
            </div>
        );
    }
}

SectionHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    headerText: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(SectionHeader);
