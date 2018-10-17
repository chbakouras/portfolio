import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {
        textAlign: 'center',
        margin: 20,
    },
});

class HeaderDivider extends React.Component {

    render() {
        const {classes, header} = this.props;
        return (
            <div className={classes.root}>
                <Typography className={classes.header}  component="h2" variant="h6" gutterBottom>
                    {header}
                </Typography>
            </div>
        );
    }
}

HeaderDivider.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(HeaderDivider);
