import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import Grid from "@material-ui/core/Grid/Grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import contactInfo from "../../data/contactInfo";
import {faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
    root: {
        margin: "50px auto",
    },
    icon: {
        fontSize: 50
    },
    anchor: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
        maxWidth: 250,
        width: "100%",
        margin: "auto",
        color: "#24292e",
        fontWeight: "bold",
    },
});

class Contact extends React.Component {

    render() {
        const {classes} = this.props;
        const xs = 12;
        const sm = 4;
        return (
            <Section>
                <SectionHeader headerText={'Contact'}/>
                <SectionContent>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={xs} sm={sm}>
                            <a href={contactInfo.github.url} target={"_blank"} className={classes.anchor}>
                                <FontAwesomeIcon className={classes.icon}
                                                 style={{color: "#24292e"}}
                                                 icon={faGithub}/>
                                {contactInfo.github.text}
                            </a>
                        </Grid>
                        <Grid item xs={xs} sm={sm}>
                            <a href={contactInfo.linkedin.url} target={"_blank"} className={classes.anchor}>
                                <FontAwesomeIcon className={classes.icon}
                                                 style={{color: "#0077B5"}}
                                                 icon={faLinkedin}/>
                                {contactInfo.linkedin.text}
                            </a>
                        </Grid>
                        <Grid item xs={xs} sm={sm}>
                            <a href={contactInfo.mail.url} target={"_blank"} className={classes.anchor}>
                                <FontAwesomeIcon className={classes.icon}
                                                 style={{color: "#24292e"}}
                                                 icon={faEnvelopeSquare}/>
                                {contactInfo.mail.text}
                            </a>
                        </Grid>
                    </Grid>
                </SectionContent>
            </Section>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Contact);
