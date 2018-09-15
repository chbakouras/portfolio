import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";

const styles = theme => ({});

class Contact extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'Contact'}/>
                <SectionContent>
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
