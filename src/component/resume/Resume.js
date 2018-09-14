import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";

const styles = theme => ({});

class Resume extends React.Component {

    render() {
        return (
            <div>
                <SectionHeader headerText={'Resume'}/>
            </div>
        );
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Resume);
