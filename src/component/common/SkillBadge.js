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
        maxWidth: 160,
        padding: '5px 5px 0 5px',
    },
    media: {
        objectFit: 'contain',
        height: 160,
    },
    cardContent: {
        textAlign: 'center',
        height: 35,
    },
});

class SkillBadge extends React.Component {

    render() {
        const {classes, imageSrc, skill} = this.props;
        return (
            <CardActionArea>
                <Card className={classes.card}>
                    <CardMedia
                        component="img"
                        alt={skill}
                        className={classes.media}
                        image={imageSrc}
                        title={skill}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="title" component="h2">
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
};

export default withStyles(styles, {withTheme: true})(SkillBadge);
