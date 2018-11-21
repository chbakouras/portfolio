import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    headerContainer: {
        padding: '6px 30px',
        margin: '10px auto',
        borderRadius: 0,
        ...theme.sectionHeaderStyle
    },
    header: {
        fontSize: '20px',
    },
});

class SectionHeader extends React.Component {

    render() {
        const {classes, headerText, containerStyle, textStyle} = this.props;
        return (
            <Paper className={classes.headerContainer} style={containerStyle}>
                <h3 className={classes.header} style={textStyle}>{headerText}</h3>
            </Paper>
        );
    }
}

SectionHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    headerText: PropTypes.string.isRequired,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(SectionHeader);
