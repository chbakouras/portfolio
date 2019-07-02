import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import Paper from "@material-ui/core/Paper/Paper";

import profileData from "../../data/profile";
import Profile from "../menu/Profile";
import Hidden from "@material-ui/core/Hidden/Hidden";

const styles = theme => ({
    content: {
        maxWidth: 700,
        width: "100%",
        margin: "20px auto",
        fontSize: "20px",
    },
    bio: {
        textAlign: "justify",
        padding: "20px 30px",
        fontSize: 17,
        fontWeight: 600,
        fontStyle: "italic"
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
    },
    bioBackground: {
        background: "linear-gradient(135deg, #a3b9e1 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px), linear-gradient(225deg, #a3b9e1 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px",
        backgroundColor: "#a3b9e1",
        backgroundSize: "64px 128px",
        marginBottom: "-15px"
    }
});

class About extends React.Component {

    render() {
        const {classes, theme} = this.props;
        return (
            <Section>
                <SectionContent customStyle={styles(theme).bioBackground}>
                    <Paper className={classes.content}>
                        <Hidden mdUp>
                            <Profile
                                firstName={profileData.firstName}
                                lastName={profileData.lastName}
                                profileImageSrc={profileData.profileImageSrc}
                                subheading={profileData.subheading}/>
                        </Hidden>

                        <Typography variant="body1" gutterBottom className={classes.bio}>
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
