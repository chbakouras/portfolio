import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import Paper from "@material-ui/core/Paper/Paper";

const styles = theme => ({
    content: {
        padding: 20,
        maxWidth: 700,
        width: "100%",
        margin: "40px auto",
        fontSize: "20px",
    },
    bio: {
        textAlign: "justify"
    }
});

class About extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Section>
                <SectionHeader headerText={'About'}/>
                <SectionContent>
                    <Paper className={classes.content}>
                        <Typography  variant="body1" gutterBottom className={classes.bio}>
                            I'm a Software Engineer with strong problem-solving skills.
                            Specialize in thinking outside the box to find unique solutions
                            to difficult engineering problems.
                            Proficient at designing software and writing code in various languages.
                            Expert in Java.
                            Enthusiastic team player and deep creative thinker.
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
