import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    drawer: {
        height: '100%',
    },
    drawerPaper: {
        width: theme.drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'fixed',
            top: 0
        },
    },
});

class ResponsiveDrawer extends React.Component {

    render() {
        const {children, classes, theme, mobileOpen, onDrawerToggle} = this.props;

        return (
            <div className={classes.drawer}>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={onDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {children}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {children}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);