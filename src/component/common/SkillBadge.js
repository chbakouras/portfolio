import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Grid from "@material-ui/core/es/Grid/Grid";

const styles = theme => ({});

class SkillBadge extends React.Component {

    render() {
        const {imageSrc, skill} = this.props;
        return (
            <div>
                <img src={imageSrc} alt={skill}/>
                <Typography>{skill}</Typography>
            </div>
        );
    }
}

SkillBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    imageSrc: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(SkillBadge);
