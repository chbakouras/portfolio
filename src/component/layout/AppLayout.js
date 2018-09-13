import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileAppBar from "./MobileAppBar";
import ResponsiveDrawer from "./ResponsiveDrawer";
import AppContent from "./AppContent";

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
});

class AppLayout extends React.Component {

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    render() {
        const {classes, children, drawerContent} = this.props;
        return (
            <div className={classes.root}>
                <MobileAppBar onDrawerToggle={this.handleDrawerToggle}/>
                <ResponsiveDrawer mobileOpen={this.state.mobileOpen} onDrawerToggle={this.handleDrawerToggle}>
                    {drawerContent}
                </ResponsiveDrawer>
                <AppContent>
                    {children}
                </AppContent>
            </div>
        );
    }
}

AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    drawerContent: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(AppLayout);