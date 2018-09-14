import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";

const styles = theme => ({});

class Skills extends React.Component {

    render() {
        return (
            <div>
                <SectionHeader headerText={'Skills'}/>
            </div>
        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Skills);
