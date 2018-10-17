import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from "@material-ui/core/es/Hidden/Hidden";

const styles = theme => ({});

class MobileAppBar extends React.Component {

    render() {
        const {children, header, onDrawerToggle, openDrawerButtonAriaLabel} = this.props;

        return (
            <Hidden mdUp>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label={openDrawerButtonAriaLabel ? openDrawerButtonAriaLabel : "Open drawer"}
                            onClick={onDrawerToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            {header ? header : ''}
                        </Typography>
                        {children}
                    </Toolbar>
                </AppBar>
            </Hidden>
        );
    }
}

MobileAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
    header: PropTypes.string,
    openDrawerButtonAriaLabel: PropTypes.string,
};

export default withStyles(styles, {withTheme: true})(MobileAppBar);