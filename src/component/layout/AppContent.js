import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles/index";


const styles = theme => ({
    toolbar: {
        [theme.breakpoints.down('sm')]: {...theme.mixins.toolbar}
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.drawerWidth,
        },
    },
});

class AppContent extends React.Component {

    render() {
        const {classes, children} = this.props;

        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div>
                    {children}
                </div>
            </main>
        );
    }
}

AppContent.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppContent);
