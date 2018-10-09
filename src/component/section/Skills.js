import React from "react";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import SkillBadge from "../common/SkillBadge";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Skills extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <Section>
                <SectionHeader headerText={'Skills'}/>
                <SectionContent>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12}>
                            <Grid container justify="center"  spacing={16}>
                                <Grid item>
                                    <SkillBadge skill={'Javascript'} imageSrc={'/img/skills/javascript/javascript.png'}/>
                                </Grid>
                                <Grid item>
                                    <SkillBadge skill={'Angular'} imageSrc={'/img/skills/javascript/angular.png'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </SectionContent>
            </Section>
        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Skills);
