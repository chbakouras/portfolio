import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import SkillBadge from "../common/SkillBadge";

const styles = theme => ({});

class Skills extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'Skills'}/>
                <SectionContent>
                    <SkillBadge skill={'Javascript'} imageSrc={'/img/skills/javascript/javascript.png'} />
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
