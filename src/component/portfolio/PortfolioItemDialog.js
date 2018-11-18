import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Slide from "@material-ui/core/Slide/Slide";
import Dialog from "@material-ui/core/Dialog/Dialog";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    appBar: {
        position: 'relative !important',
    },
    flex: {
        flex: 1,
    },
    childrenWrapper: {
        margin: '30px auto',
        maxWidth: 1200,
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PortfolioItemDialog extends React.Component {

    render() {
        const {children, classes, projectName, open, onClose} = this.props;
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            {projectName}
                        </Typography>
                        <IconButton color="inherit" onClick={onClose} aria-label="Close">
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.childrenWrapper}>
                    {children}
                </div>
            </Dialog>
        );
    }
}

PortfolioItemDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    projectName: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(PortfolioItemDialog);
