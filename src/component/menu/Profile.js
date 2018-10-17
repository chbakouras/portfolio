import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

const styles = theme => ({
    avatar: {
        height: 'auto',
        width: '100%',
        maxWidth: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 0,
    },
    center: {
        textAlign: 'center',
    },
});

class Profile extends React.Component {

    render() {
        const {theme, classes, firstName, lastName, subheading, profileImageSrc} = this.props;

        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Avatar
                        alt={`${firstName} ${lastName}`}
                        src={profileImageSrc}
                        style={styles(theme).avatar}
                    />
                </Grid>
                <Grid item xs={12} className={classes.center}>
                    <Typography variant='h6'>
                        {firstName}
                    </Typography>
                    <Typography variant='h6'>
                        {lastName}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {subheading ? subheading : ''}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profileImageSrc: PropTypes.string.isRequired,
    subheading: PropTypes.string,
};

export default withStyles(styles, {withTheme: true})(Profile);