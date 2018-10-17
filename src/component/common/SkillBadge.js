import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = theme => ({
    card: {
        padding: '5px 5px 0 5px',
    },
    media: {
        objectFit: 'contain',
    },
    cardContent: {
        textAlign: 'center',
        height: 60,
        padding: '0 !important',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class SkillBadge extends React.Component {

    render() {
        const {classes, imageSrc, skill, size} = this.props;
        const badgeSize = size || 90;

        return (
            <CardActionArea style={{maxWidth: badgeSize, margin: 'auto'}}>
                <Card className={classes.card} style={{maxWidth: badgeSize}}>
                    <CardMedia
                        component="img"
                        alt={skill}
                        className={classes.media}
                        style={{height: badgeSize}}
                        image={imageSrc}
                        title={skill}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography component="h3" variant="subtitle1" gutterBottom>
                            {skill}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        );
    }
}

SkillBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    imageSrc: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    size: PropTypes.number,
};

export default withStyles(styles, {withTheme: true})(SkillBadge);
