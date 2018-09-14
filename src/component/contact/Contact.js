import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";

const styles = theme => ({});

class Contact extends React.Component {

    render() {
        return (
            <div>
                <SectionHeader headerText={'Contact'}/>
            </div>
        );
    }
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Contact);
