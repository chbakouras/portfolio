import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/es/Avatar/Avatar";

import profileData from "../../data/profile";

const styles = theme => ({
    content: {
        maxWidth: 700,
        width: "100%",
        margin: "20px auto",
        fontSize: "20px",
    },
    bio: {
        textAlign: "justify",
        padding: 15,
    },
    avatar: {
        height: 'auto',
        width: '100%',
        maxWidth: 220,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 0,
        border: "3px solid white",
        boxShadow: "rgb(0, 0, 0) 0 0 4px 0",
    }
});

class About extends React.Component {

    render() {
        const {classes, theme} = this.props;
        return (
            <Section>
                {/*<SectionHeader headerText={'About'}/>*/}
                <SectionContent>
                    <Paper className={classes.content}>
                        <Avatar
                            alt={`${profileData.firstName} ${profileData.lastName}`}
                            src={profileData.profileImageSrc}
                            style={styles(theme).avatar}
                        />
                        <Typography  variant="body1" gutterBottom className={classes.bio}>
                            {profileData.bio}
                        </Typography>
                    </Paper>
                </SectionContent>
            </Section>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(About);
