import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";

const styles = theme => ({});

class AboutMe extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'About me'}/>
                <SectionContent>
                    <Typography>
                        I'm a Software Engineer with strong problem-solving skills.
                        Specialize in thinking outside the box to find unique solutions
                        to difficult engineering problems.
                        Proficient at designing software and writing code in various languages.
                        Expert in Java.
                        Enthusiastic team player and deep creative thinker.
                    </Typography>
                </SectionContent>
            </Section>
        );
    }
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AboutMe);
